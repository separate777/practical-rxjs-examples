import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpRequestComponent } from './http-request-root/http-request/http-request.component';
import {Route, RouterModule} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import { HttpRequestBasicComponent } from './http-request-root/http-request-basic/http-request-basic.component';
import { HttpRequestRootComponent } from './http-request-root/http-request-root.component';


const routes: Route[] = [
  {
    path: '',
    component: HttpRequestRootComponent,
  }
]

@NgModule({
  declarations: [
    HttpRequestComponent,
    HttpRequestBasicComponent,
    HttpRequestRootComponent
  ],
  imports: [
    RouterModule.forChild(routes),
      SharedModule,
    CommonModule,
    InputTextModule,
    ReactiveFormsModule
  ]
})
export class HttpRequestsModule { }
