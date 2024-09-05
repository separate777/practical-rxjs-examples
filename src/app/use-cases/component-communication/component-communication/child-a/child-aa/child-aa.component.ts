import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ComponentCommunicationService} from "../../../component-communication.service";

@Component({
  selector: 'app-child-aa',
  templateUrl: './child-aa.component.html',
  styleUrl: './child-aa.component.css'
})
export class ChildAaComponent {
  @Input() data: string = '';

  @Output() reset = new EventEmitter<void>();

  constructor() {
  }

  triggerReset() {
    this.reset.emit();
  }
}
