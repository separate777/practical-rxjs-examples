import {Component, OnDestroy, OnInit} from '@angular/core';
import {IntervalService} from "../interval.service";
import {interval, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-not-unsubscribing',
  templateUrl: './not-unsubscribing.component.html',
  styleUrl: './not-unsubscribing.component.css'
})
export class NotUnsubscribingComponent implements OnDestroy{

  private interval$ = interval(1000);
  private destroy$$ = new Subject<void>();

  constructor() {
    this.interval$.pipe(
    ).subscribe(console.log);

  }

  ngOnDestroy(): void {
        // take(1)
        // takeUntil(this.destroy$$)
        // this.destroy$$.next();
    }

}
