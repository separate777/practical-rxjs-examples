import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {StateService} from "../../state.service";
import {ExampleVersion} from "../../state-management.module";

@Component({
  selector: 'app-local-state-child-b',
  templateUrl: './local-state-child-b.component.html',
  styleUrl: './local-state-child-b.component.css'
})
export class LocalStateChildBComponent {

  localState$: Observable<ExampleVersion> = this.stateService.getState$();

  constructor(private stateService: StateService<ExampleVersion>) {
  }

}
