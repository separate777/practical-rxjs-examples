import { Component } from '@angular/core';
import {BehaviorSubject, catchError, debounceTime, EMPTY, of, startWith, Subject, switchMap, tap} from "rxjs";
import {FormControl} from "@angular/forms";
import {PokeService} from "../../services/poke.service";

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrl: './poke.component.css'
})
export class PokeComponent {
  isLoading = new BehaviorSubject(true);
  error$ = new Subject();
  limit = new FormControl<number>(10);

  pokeList$ = this.limit.valueChanges.pipe(
      startWith(this.limit.value),
      debounceTime(500),
      tap(() => this.isLoading.next(true)),
      switchMap((limit) =>
          typeof limit !== 'number'
              ? of('please enter a valid number')
              : this.pokeService.getMultiplePokemon$(limit)
      ),
      tap(() => this.isLoading.next(false)),
      catchError((error) => {
        this.isLoading.next(false);
        this.error$.next(String(error));
        return of(EMPTY);
      })
  );

  constructor(private pokeService: PokeService) {}
}
