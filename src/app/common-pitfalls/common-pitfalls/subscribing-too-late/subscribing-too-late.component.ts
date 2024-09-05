import { Component } from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-subscribing-too-late',
  templateUrl: './subscribing-too-late.component.html',
  styleUrl: './subscribing-too-late.component.css'
})
export class SubscribingTooLateComponent {
  data$$: Subject<string> = new Subject<string>();
  // data$$: BehaviorSubject<string> = new BehaviorSubject<string>('Hello World');
  // data$$: ReplaySubject<string> = new ReplaySubject<string>(1);

  constructor() {
    this.data$$.next('Hello World');
  }

}



































