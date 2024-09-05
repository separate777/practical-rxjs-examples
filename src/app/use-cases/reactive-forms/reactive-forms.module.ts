import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import {Route, RouterModule} from "@angular/router";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {SharedModule} from "../../shared/shared.module";
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";

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
    CommonModule,
    ProgressSpinnerModule,
    SharedModule,
    InputGroupModule,
    InputTextModule
  ]
})
export class ReactiveFormsModule { }
