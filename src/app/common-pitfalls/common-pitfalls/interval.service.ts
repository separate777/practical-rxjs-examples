import { Injectable } from '@angular/core';
import {interval} from "rxjs";

@Injectable()
export class IntervalService {

  interval$ = interval(1000);
  constructor() { }

  public getInterval$() {
    return this.interval$;
  }
}
