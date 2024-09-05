import {Component} from '@angular/core';
import {PokeService} from '../services/poke.service';
import {map, Subject,} from 'rxjs';
import {GlobalStateService} from "../use-cases/state-management/global-state.service";
import {ExampleVersion} from "../use-cases/state-management/global-state-management-module";
import {ToggleButtonChangeEvent} from "primeng/togglebutton";
import {GlobalRefreshService} from "../use-cases/state-management/global-refresh.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  exampleVersion$ = this.globalStateService.getState$()
  .pipe(map((version) => version === ExampleVersion.ADVANCED));

  constructor(private pokeService: PokeService, private readonly globalStateService: GlobalStateService<ExampleVersion>, private readonly globalRefreshService: GlobalRefreshService) {
  }

  onToggleExampleVersion($event: ToggleButtonChangeEvent) {
    this.globalStateService.setState($event.checked ? ExampleVersion.ADVANCED : ExampleVersion.BASIC)
  }

  triggerRefresh() {
    this.globalRefreshService.triggerRefresh();
  }




  test() {

    const observable$ = new Subject();

    observable$.subscribe(
        {
          next: (value) => console.log(value),
          error: (error) => console.error(error),
          complete: () => console.log('complete')
        }
    )
  }

}
