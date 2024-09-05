import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class GlobalRefreshService {

  private refresh$$: Subject<void> = new Subject<void>();

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
