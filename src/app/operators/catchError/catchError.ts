import { Observable, Subscription, catchError, filter, map, of } from 'rxjs';
import { errorLog, interval2SecondsGreen$, logOutput } from '../../helpers';

// catchError
// Handles errors on an observable stream by catching the error and replacing it with another observable or throwing an error.
// https://angularindepth.com/reference/rxjs/operators/catch-error
// https://rxjs.dev/api/operators/catchError

const source1$: Observable<number> = interval2SecondsGreen$(10); // emits 0, 1 then completes
const enabled: boolean = true;
if (enabled) {
  const subscription: Subscription = source1$
    .pipe(
      map((val) => {
        if (val === 3) {
          throw new Error('YAY ERROR');
        } else {
          return val;
        }
      }),
      catchError((err, caught) => {
        errorLog(err);
        console.log('##', caught);
        // return of(1, 2, 3);
        // return EMPTY;
        // return caught;
        // return err;
        return of(null);
      }),
      filter((val) => val !== null)
    )
    .subscribe(logOutput);

  // setTimeout(() => {
  //   console.log('####', subscription);
  // }, 1000);
  // const subscriptionDelay: Subscription = of(1, 2, 3, 4, 5).subscribe(
  //   logOutput
  // );
  // setTimeout(() => {
  //   console.log('####', subscriptionDelay);
  // }, 1000);
}
