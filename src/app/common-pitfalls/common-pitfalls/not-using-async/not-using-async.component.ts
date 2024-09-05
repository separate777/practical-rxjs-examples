import {Component, OnInit} from '@angular/core';
import {PokeService} from "../../../services/poke.service";
import {take} from "rxjs";
import {Pokemon} from "../../../use-cases/accessing-route-parameters/display-pokemon-from-route/pokemon";

@Component({
  selector: 'app-not-using-async',
  templateUrl: './not-using-async.component.html',
  styleUrl: './not-using-async.component.css'
})
export class NotUsingAsyncComponent implements OnInit {

  public pokemon: Pokemon | undefined;
  public pokemon$ = this.pokeService.getOnePokemon$('pikachu');

  constructor(private readonly pokeService: PokeService) {
  }

  ngOnInit(): void {
    this.pokeService.getOnePokemon$('pikachu').pipe(take(1))
    .subscribe((data) => {
      this.pokemon = data;
    })
  };
}
