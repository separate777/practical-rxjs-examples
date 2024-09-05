import {Component, OnInit} from '@angular/core';
import {PokeService} from "../../../services/poke.service";
import {FormControl} from "@angular/forms";
import {Observable, Subject, switchMap, tap} from "rxjs";
import {Pokemon} from "../../accessing-route-parameters/display-pokemon-from-route/pokemon";

function isString(value: any): value is string {
  return typeof value === 'string';
}

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent implements OnInit {

  pokemonList: {
    name: string
  }[] = [{name: "bulbasaur"}, {name: "squirle"}, {name: "charmander"}, {name: "pikachu"}, {name: "eevee"}, {name: "jigglypuff"}, {name: "snorlax"}, {name: "mewtwo"}, {name: "mew"}];


  pokemonName: FormControl<{ name: string }> = new FormControl<{ name: string }>({name: ''}, {nonNullable: true});

  isLoading$$: Subject<boolean> = new Subject<boolean>();

  currentPokemon$: Observable<Pokemon> = this.pokemonName.valueChanges.pipe(
      tap(() => this.isLoading$$.next(true)),
      switchMap((pokemon) => this.pokeService.getOnePokemon$(pokemon.name)),
      tap(() => this.isLoading$$.next(false)),
  );

  constructor(private readonly pokeService: PokeService) {
  }

  ngOnInit(): void {


  }

}
