import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonPitfallsComponent} from './common-pitfalls/common-pitfalls.component';
import {RouterModule, Routes} from "@angular/router";
import {SubscribingTooLateComponent} from './common-pitfalls/subscribing-too-late/subscribing-too-late.component';
import {SharedModule} from "../shared/shared.module";
import {NotUsingAsyncComponent} from './common-pitfalls/not-using-async/not-using-async.component';
import {NotUnsubscribingComponent} from './common-pitfalls/not-unsubscribing/not-unsubscribing.component';
import {IntervalService} from "./common-pitfalls/interval.service";

const routes: Routes = [
      {
        path: '',
        component: CommonPitfallsComponent,
        children: [
          {
            path: 'subscribing-too-late',
            component: SubscribingTooLateComponent
          },
          {
            path: 'not-using-async',
            component: NotUsingAsyncComponent
          },
          {
            path: 'not-unsubscribing',
            component: NotUnsubscribingComponent
          }

        ]
      }
    ]
;


@NgModule({
  declarations: [
    CommonPitfallsComponent,
    SubscribingTooLateComponent,
    NotUsingAsyncComponent,
    NotUnsubscribingComponent
  ],
  providers: [
      IntervalService
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CommonPitfallsModule {
}
