import { Injectable } from '@angular/core';
import {ReplaySubject, Subject} from "rxjs";

@Injectable()
export class ComponentCommunicationService {

  private dataSubject$$: ReplaySubject<string> = new ReplaySubject<string>(1)
  private reset$$: Subject<void> = new Subject<void>();
  constructor() { }

  public setData(data: string): void {
    this.dataSubject$$.next(data);
  }

  public getData$() {
    return this.dataSubject$$.asObservable();
  }

  public triggerReset(): void {
    this.reset$$.next();
  }

  public getReset$() {
    return this.reset$$.asObservable();
  }

}
