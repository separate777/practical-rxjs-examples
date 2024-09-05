import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayPokemonFromRouteComponent } from './display-pokemon-from-route/display-pokemon-from-route.component';
import {RouterModule, Routes} from "@angular/router";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: DisplayPokemonFromRouteComponent
  },
  {
    path: ':pokemon-name',
    component: DisplayPokemonFromRouteComponent
  }
];

@NgModule({
  declarations: [
    DisplayPokemonFromRouteComponent
  ],
  imports: [
    RouterModule.forChild(routes),
      SharedModule,
    CommonModule,
    ProgressSpinnerModule
  ]
})
export class AccessingRouteParametersModule { }
