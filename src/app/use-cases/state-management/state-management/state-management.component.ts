import { Component } from '@angular/core';
import {ExampleVersion} from "../state-management.module";
import {StateService} from "../state.service";
import {ToggleButtonChangeEvent} from "primeng/togglebutton";
import {map} from "rxjs";

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrl: './state-management.component.css'
})
export class StateManagementComponent {
  public exampleVersion$ = this.stateService.getState$();
  public isAdvancedVersion$ = this.exampleVersion$.pipe(map((version) => version === ExampleVersion.ADVANCED));

  constructor(private readonly stateService: StateService<ExampleVersion>) {
  }

  onToggleExampleVersion($event: ToggleButtonChangeEvent) {
    this.stateService.setState($event.checked ? ExampleVersion.ADVANCED : ExampleVersion.BASIC);
  }
}
