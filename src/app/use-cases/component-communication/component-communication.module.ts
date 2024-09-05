import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentCommunicationComponent} from "./component-communication/component-communication.component";
import {RouterModule, Routes} from "@angular/router";
import { ChildAComponent } from './component-communication/child-a/child-a.component';
import { ChildBComponent } from './component-communication/child-b/child-b.component';
import { ChildAaComponent } from './component-communication/child-a/child-aa/child-aa.component';
import { ChildAbComponent } from './component-communication/child-a/child-ab/child-ab.component';
import {ComponentCommunicationService} from "./component-communication.service";
import {ButtonModule} from "primeng/button";

const routes: Routes = [
  {
    path: '',
    component: ComponentCommunicationComponent
  }
]


@NgModule({
  declarations: [
      ComponentCommunicationComponent,
      ChildAComponent,
      ChildBComponent,
      ChildAaComponent,
      ChildAbComponent
  ],
  providers: [
      ComponentCommunicationService
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ButtonModule
  ]
})
export class ComponentCommunicationModule { }
