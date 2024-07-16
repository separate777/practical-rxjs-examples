import {of, Subject, Subscription} from 'rxjs';
import {logOutput} from "../helpers";

// What happens when I resubscribe after completion?

// cold observables: when you resubscribe to a cold observable, it will "restart" the observable.

// const obs1 = of(1, 2, 3);
//
// const subs1: Subscription = obs1.subscribe(logOutput);
// const subs2: Subscription = obs1.subscribe(logOutput);
//


// Hot observables: When you resubscribe to a hot observable it will


const subj = new Subject();

const subs3: Subscription = subj.subscribe(logOutput);

subj.next(1);
subj.next(2);
subj.next(3);
subj.complete();
const subs4: Subscription = subj.subscribe(logOutput);
const subs5: Subscription = subj.subscribe(logOutput);
