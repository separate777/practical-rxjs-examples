import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, catchError, EMPTY, map, Subject, switchMap, tap} from "rxjs";
import {PokeService} from "../../services/poke.service";

@Component({
    selector: 'app-route-changes-example',
    templateUrl: './route-changes-example.component.html',
    styleUrl: './route-changes-example.component.css'
})
export class RouteChangesExampleComponent {

    error$$ = new Subject<{message: string}>();
    loading$$ = new Subject<boolean>();
    currentPokemonName$ = this.activatedRoute.paramMap.pipe(map(value => String(value.get('poke-name'))));

    currentPokemon$ = this.currentPokemonName$.pipe(
        tap(() => this.loading$$.next(true)),
        switchMap(name => this.pokeService.getOnePokemon$(name)),
        tap(() => this.loading$$.next(false)),
        catchError(err => {
            this.error$$.next(err)
            this.loading$$.next(false);
            return EMPTY;
        }))

    constructor(private readonly activatedRoute: ActivatedRoute, private readonly pokeService: PokeService) {
    }
}
