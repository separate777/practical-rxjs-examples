import {Component} from '@angular/core';
import {ExampleVersion} from "../../state-management/global-state-management-module";
import {GlobalStateService} from "../../state-management/global-state.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-http-request-root',
  templateUrl: './http-request-root.component.html',
  styleUrl: './http-request-root.component.css'
})
export class HttpRequestRootComponent {
  public exampleVersion: typeof ExampleVersion = ExampleVersion;
  public exampleVersion$: Observable<ExampleVersion> = this.globalStateService.getState$();

  constructor(private readonly globalStateService: GlobalStateService<ExampleVersion>) {
  }

}
