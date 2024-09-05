import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";

@Injectable()
export class GlobalRefreshService {

  private refresh$$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor() {
    this.refresh$$.next();
  }

  public triggerRefresh(): void {
    this.refresh$$.next();
  }

  public getRefresh$() {
    return this.refresh$$.asObservable();
  }

}
