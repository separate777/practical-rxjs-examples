import {Component} from '@angular/core';
import {ComponentCommunicationService} from "../../../component-communication.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-child-ab',
  templateUrl: './child-ab.component.html',
  styleUrl: './child-ab.component.css'
})
export class ChildAbComponent {
  data$: Observable<string> = this.componentCommunicationService.getData$();
  constructor(private readonly componentCommunicationService: ComponentCommunicationService) {
  }

  triggerReset() {
    this.componentCommunicationService.triggerReset();
  }
}
