import {Component} from '@angular/core';
import {StateService} from "../state.service";
import {ToggleButtonChangeEvent} from "primeng/togglebutton";
import {ExampleVersion} from "../state-management.module";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-local-state',
  templateUrl: './local-state.component.html',
  styleUrl: './local-state.component.css',
  providers: [StateService]
})
export class LocalStateComponent {
  isAdvancedVersion$: Observable<boolean> = this.stateService.getState$()
  .pipe(map((version) => version === ExampleVersion.ADVANCED));

  constructor(private stateService: StateService<ExampleVersion>) {
    this.stateService.setState(ExampleVersion.BASIC);
  }

  onToggleExampleVersion($event: ToggleButtonChangeEvent) {
    this.stateService.setState($event.checked ? ExampleVersion.ADVANCED : ExampleVersion.BASIC);
  }
}
