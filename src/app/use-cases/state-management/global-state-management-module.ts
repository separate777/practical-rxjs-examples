import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StateManagementComponent} from './state-management/state-management.component';
import {GlobalStateService} from "./global-state.service";
import {ToggleButtonModule} from "primeng/togglebutton";
import {SharedModule} from "../../shared/shared.module";
import {GlobalRefreshService} from "./global-refresh.service";

export enum ExampleVersion {
  BASIC = 'BASIC',
  ADVANCED = 'ADVANCED'
}

export const INIT_STATE_INJECTION_TOKEN: InjectionToken<ExampleVersion> = new InjectionToken<ExampleVersion>('the initial state')

@NgModule({
  declarations: [
    StateManagementComponent
  ],
  providers: [
    {
      provide: INIT_STATE_INJECTION_TOKEN,
      useValue: ExampleVersion.BASIC
    },
    {
      provide: GlobalStateService<ExampleVersion>,
      useClass: GlobalStateService<ExampleVersion>
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
export class GlobalStateManagementModule {
}
