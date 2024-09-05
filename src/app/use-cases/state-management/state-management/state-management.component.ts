import { Component } from '@angular/core';
import {ExampleVersion} from "../global-state-management-module";
import {GlobalStateService} from "../global-state.service";
import {ToggleButtonChangeEvent} from "primeng/togglebutton";
import {map} from "rxjs";

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrl: './state-management.component.css'
})
export class StateManagementComponent {
  public exampleVersion$ = this.globalStateService.getState$();
  public isAdvancedVersion$ = this.exampleVersion$.pipe(map((version) => version === ExampleVersion.ADVANCED));

  constructor(private readonly globalStateService: GlobalStateService<ExampleVersion>) {
  }

  onToggleExampleVersion($event: ToggleButtonChangeEvent) {
    this.globalStateService.setState($event.checked ? ExampleVersion.ADVANCED : ExampleVersion.BASIC);
  }
}
