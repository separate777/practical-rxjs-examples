import {Component} from '@angular/core';
import {PokeService} from '../services/poke.service';
import {map, Subject,} from 'rxjs';
import {StateService} from "../use-cases/state-management/state.service";
import {ExampleVersion} from "../use-cases/state-management/state-management.module";
import {ToggleButtonChangeEvent} from "primeng/togglebutton";
import {GlobalRefreshService} from "../use-cases/state-management/global-refresh.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  exampleVersion$ = this.stateService.getState$()
  .pipe(map((version) => version === ExampleVersion.ADVANCED));

  constructor(private readonly stateService: StateService<ExampleVersion>, private readonly globalRefreshService: GlobalRefreshService) {
  }

  onToggleExampleVersion($event: ToggleButtonChangeEvent) {
    this.stateService.setState($event.checked ? ExampleVersion.ADVANCED : ExampleVersion.BASIC)
  }

  triggerRefresh() {
    this.globalRefreshService.triggerRefresh();
  }


}
