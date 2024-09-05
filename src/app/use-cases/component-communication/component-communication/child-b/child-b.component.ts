import { Component } from '@angular/core';
import {ComponentCommunicationService} from "../../component-communication.service";

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.css'
})
export class ChildBComponent {

  constructor(private readonly componentCommunicationService: ComponentCommunicationService) {
  }
  triggerReset() {
    this.componentCommunicationService.triggerReset();
  }
}
