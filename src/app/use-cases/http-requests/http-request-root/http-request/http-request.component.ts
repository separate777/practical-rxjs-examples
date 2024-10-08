import {Component} from '@angular/core';
import {BehaviorSubject, catchError, combineLatest, debounceTime, EMPTY, map, Observable, of, startWith, Subject, switchMap, tap} from "rxjs";
import {FormControl} from "@angular/forms";
import {PokeService} from "../../../../services/poke.service";
import {GlobalRefreshService} from "../../../state-management/global-refresh.service";

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.css'
})
export class HttpRequestComponent {

  limit: FormControl<number | null> = new FormControl<number>(10);
  isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  error$$: Subject<{ message: string } | null> = new Subject<{ message: string } | null>()

  pokeList$: Observable<string | string[] | never> = combineLatest([
    this.limit.valueChanges.pipe(startWith(this.limit.value), debounceTime(500)),
    this.globalRefreshService.getRefresh$().pipe(startWith(null))
  ])
  .pipe(
      map(([limit]) => limit),
      tap(() => {
        this.isLoading$$.next(true);
        this.error$$.next(null)
      }),
      switchMap((limit) =>
          typeof limit !== 'number'
              ? of('please enter a valid number')
              : this.pokeService.getPokemon$(limit).pipe(
                  catchError((error) => {
                        this.isLoading$$.next(false);
                        this.error$$.next(error);
                        return EMPTY;
                      }
                  )
              )),
      tap(() => this.isLoading$$.next(false)),
  );

  constructor(private readonly pokeService: PokeService,
              private readonly globalRefreshService: GlobalRefreshService) {

  }
}
