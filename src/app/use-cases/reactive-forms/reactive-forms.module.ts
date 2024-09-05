import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import {Route, RouterModule} from "@angular/router";

const routes: Route[] = [
  {
    path: '',
    component: ReactiveFormsComponent,
  }
]


@NgModule({
  declarations: [
    ReactiveFormsComponent
  ],
  imports: [
      RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ReactiveFormsModule { }
