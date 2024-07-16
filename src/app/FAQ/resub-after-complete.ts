import {of, Subscription} from 'rxjs';
import {logOutput} from "../helpers";

// What happens when I resubscribe after completion?

// cold observables: when you subscribe to a cold observable, it will "restart" the observable.

const obs1 = of(1, 2, 3);

const subs1: Subscription = obs1.subscribe(logOutput);
const subs2: Subscription = obs1.subscribe(logOutput);
