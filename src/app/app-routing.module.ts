import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StateManagementComponent} from "./use-cases/state-management/state-management/state-management.component";
const routes: Routes = [
  {
    path: 'reactive-elements',
    loadChildren: () => import('./use-cases/reactive-elements/reactive-elements.module').then((m) => m.ReactiveElementsModule)
  },
  {
    path: 'accessing-route-parameters',
    loadChildren: () => import('./use-cases/accessing-route-parameters/accessing-route-parameters.module').then((m) => m.AccessingRouteParametersModule)
  },
  {
    path: 'component-communication',
    loadChildren: () => import('./use-cases/component-communication/component-communication.module').then((m) => m.ComponentCommunicationModule)
  },
  {
    path: 'http-requests',
    loadChildren: () => import('./use-cases/http-requests/http-requests.module').then((m) => m.HttpRequestsModule)
  },
  {
    path: 'reactive-forms',
    loadChildren: () => import('./use-cases/reactive-forms/reactive-forms.module').then((m) => m.ReactiveFormsModule)
  },
  {
    path: 'state-management',
    component: StateManagementComponent
  }

];


@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
