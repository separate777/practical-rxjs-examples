import {Component, OnDestroy, OnInit} from '@angular/core';
import {ComponentCommunicationService} from "../component-communication.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.css'
})
export class ComponentCommunicationComponent implements OnInit, OnDestroy {

  data: string = '';
  destroy$$: Subject<void> = new Subject<void>();

  constructor(private readonly componentCommunicationService: ComponentCommunicationService) {
  }

  ngOnInit(): void {
    this.componentCommunicationService.getReset$()
    .pipe(takeUntil(this.destroy$$))
    .subscribe(() => {
      this.initialise();
    });
  }

  ngOnDestroy(): void {
    this.destroy$$.next();
  }

  initialise() {
    this.data = 'Hello World'
    this.componentCommunicationService.setData(this.data);
    setTimeout(() => {
      this.data = 'Bye World'
      this.componentCommunicationService.setData(this.data);
    }, 2000)

  }
}
