import { BehaviorSubject } from 'rxjs';
import {logOutput} from "../../helpers";


// ReplaySubject
// A variant of Subject that "replays" or emits old values to new subscribers.
// When a new subscriber subscribes to the ReplaySubject, it immediately receives the specified number of previous values emitted by the subject.


const enabled = false;
if (enabled) {
    const behaviourSubject = new BehaviorSubject<number>(0);

    behaviourSubject.next(0);  // this will be logged, because the replaysubject will replay the last 1 values;

    const subscription = behaviourSubject.subscribe(logOutput);

    behaviourSubject.next(1);
    behaviourSubject.next(2);
    behaviourSubject.next(3);
    behaviourSubject.next(4);
    behaviourSubject.complete();
    behaviourSubject.next(5);  // This will not be logged

    const subscription2 = behaviourSubject.subscribe(logOutput);
}