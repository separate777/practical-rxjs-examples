import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveElementsComponent} from './reactive-elements/reactive-elements.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {InputGroupModule} from "primeng/inputgroup";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RadioButtonModule} from "primeng/radiobutton";
import {TooltipModule} from "primeng/tooltip";

const routes: Routes = [
  {
    path: '',
    component: ReactiveElementsComponent
  },
]


@NgModule({
  declarations: [
    ReactiveElementsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
    InputGroupModule,
    InputTextModule,
    ButtonModule,
    RadioButtonModule,
    TooltipModule
  ]
})
export class ReactiveElementsModule {
}
