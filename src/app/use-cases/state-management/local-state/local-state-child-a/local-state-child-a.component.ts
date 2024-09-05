import {Component} from '@angular/core';
import {StateService} from "../../state.service";
import {Observable} from "rxjs";
import {ExampleVersion} from "../../state-management.module";

@Component({
  selector: 'app-local-state-child-a',
  templateUrl: './local-state-child-a.component.html',
  styleUrl: './local-state-child-a.component.css'
})
export class LocalStateChildAComponent {
  localState$: Observable<ExampleVersion> = this.stateService.getState$();

  constructor(private stateService: StateService<ExampleVersion>) {
  }

}
