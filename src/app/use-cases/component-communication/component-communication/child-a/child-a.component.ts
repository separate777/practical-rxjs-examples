import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css'
})
export class ChildAComponent {
  @Input() data: string = '';

  @Output() reset = new EventEmitter<void>();

  triggerReset() {
    this.reset.emit();

  }
}
