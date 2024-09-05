import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {catchError, combineLatest, EMPTY, map, Observable, ReplaySubject, Subject, switchMap, tap} from "rxjs";
import {PokeService} from "../../../services/poke.service";
import {pokemon} from "./pokemon";
import {GlobalRefreshService} from "../../state-management/global-refresh.service";


@Component({
  selector: 'display-pokemon-from-route',
  templateUrl: './display-pokemon-from-route.component.html',
  styleUrl: './display-pokemon-from-route.component.css'
})
export class DisplayPokemonFromRouteComponent {
  public loading$$: Subject<boolean> = new Subject<boolean>();
  public error$$: ReplaySubject<{ message: string }> = new ReplaySubject<{ message: string }>(1);

  public currentPokemonName$: Observable<string> = this.route.paramMap.pipe(map((paramMap: ParamMap) => {
        const pokemonName = paramMap.get('pokemon-name');
        if (pokemonName === null) {
          throw new Error('Invalid Pokemon Name');
        }
        return pokemonName;
      }),
      catchError((error) => {
        this.error$$.next(error);
        return EMPTY;
      }));

  public currentPokemon$: Observable<pokemon> = combineLatest([this.currentPokemonName$, this.globalRefreshService.getRefresh$()])
  .pipe(
      map(([pokemonName, _]) => pokemonName),
      tap(() => this.loading$$.next(true)),
      switchMap(
          (pokemonName: string) => {
            return this.pokeService.getOnePokemon$(pokemonName).pipe(
                catchError((error) => {
                  this.error$$.next(error);
                  this.loading$$.next(false);
                  return EMPTY;
                })
            )
          }),
      tap(() => this.loading$$.next(false))
  );

  constructor(private readonly route: ActivatedRoute,
              private readonly pokeService: PokeService,
              private readonly globalRefreshService: GlobalRefreshService) {
  }

}
