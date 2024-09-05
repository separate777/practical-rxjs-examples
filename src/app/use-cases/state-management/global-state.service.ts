import {Observable, ReplaySubject} from "rxjs";
import {Inject, Injectable, Optional} from "@angular/core";
import {INIT_STATE_INJECTION_TOKEN} from "./global-state-management-module";


@Injectable()
export class GlobalStateService<T> {

  private state$$: ReplaySubject<T> = new ReplaySubject<T>(1);

  constructor(@Optional() @Inject(INIT_STATE_INJECTION_TOKEN) private initState: T) {
    if (this.initState) {
      this.state$$.next(this.initState);
    }
  }

  public setState(state: T): void {
    this.state$$.next(state);
  }

  public getState$(): Observable<T> {
    return this.state$$.asObservable();
  }
}

