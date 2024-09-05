import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StateManagementComponent} from './state-management/state-management.component';
import {StateService} from "./state.service";
import {ToggleButtonModule} from "primeng/togglebutton";
import {SharedModule} from "../../shared/shared.module";
import {GlobalRefreshService} from "./global-refresh.service";
import {LocalStateComponent} from "./local-state/local-state.component";
import {LocalStateChildAComponent} from "./local-state/local-state-child-a/local-state-child-a.component";
import {LocalStateChildBComponent} from "./local-state/local-state-child-b/local-state-child-b.component";

export enum ExampleVersion {
  BASIC = 'BASIC',
  ADVANCED = 'ADVANCED'
}

export const INIT_STATE_INJECTION_TOKEN: InjectionToken<ExampleVersion> = new InjectionToken<ExampleVersion>('the initial state')

@NgModule({
  declarations: [
    StateManagementComponent,
    LocalStateComponent,
    LocalStateChildAComponent,
    LocalStateChildBComponent
  ],
  providers: [
    {
      provide: INIT_STATE_INJECTION_TOKEN,
      useValue: ExampleVersion.BASIC
    },
    {
      provide: StateService<ExampleVersion>,
      useClass: StateService<ExampleVersion>
    },
    {
      provide: GlobalRefreshService
    }
  ],
  imports: [
    SharedModule,
    CommonModule,
    ToggleButtonModule
  ]
})
export class StateManagementModule {
}
