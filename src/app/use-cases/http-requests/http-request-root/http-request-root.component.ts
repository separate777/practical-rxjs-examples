import {Component} from '@angular/core';
import {ExampleVersion} from "../../state-management/state-management.module";
import {StateService} from "../../state-management/state.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-http-request-root',
  templateUrl: './http-request-root.component.html',
  styleUrl: './http-request-root.component.css'
})
export class HttpRequestRootComponent {
  public exampleVersion: typeof ExampleVersion = ExampleVersion;
  public exampleVersion$: Observable<ExampleVersion> = this.stateService.getState$();

  constructor(private readonly stateService: StateService<ExampleVersion>) {
  }

}
