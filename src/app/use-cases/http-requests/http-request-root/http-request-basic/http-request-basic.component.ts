import {AfterViewInit, Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable, switchMap} from "rxjs";
import {PokeService} from "../../../../services/poke.service";

@Component({
  selector: 'app-http-request-basic',
  templateUrl: './http-request-basic.component.html',
  styleUrl: './http-request-basic.component.css'
})
export class HttpRequestBasicComponent implements AfterViewInit {

  limit: FormControl<number | null> = new FormControl<number>(0);

  pokeList$: Observable<string[]> = this.limit.valueChanges.pipe(
      switchMap((limit) =>
          this.pokeService.getPokemon$(Number(limit))
      ));

  constructor(private readonly pokeService: PokeService) {
  }

  ngAfterViewInit(): void {
    this.limit.setValue(10, {emitEvent: true})
  }
}
