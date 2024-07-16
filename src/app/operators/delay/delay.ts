import {delay, Observable, Subscription } from 'rxjs';
import { interval5SecondsGreen$, logOutput} from '../../helpers';

// delay
// Delays the emission of values from the source observable by a specified amount of time.
// https://rxmarbles.com/#delay

const source$: Observable<number> = interval5SecondsGreen$();
const enabled: boolean = false;

if (enabled) {
  const subscription: Subscription = source$.pipe( delay(2000)).subscribe(logOutput);
}
