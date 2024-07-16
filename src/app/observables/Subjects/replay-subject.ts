import { ReplaySubject } from 'rxjs';
import {logOutput} from "../../helpers";


// ReplaySubject
// A variant of Subject that "replays" or emits old values to new subscribers.
// When a new subscriber subscribes to the ReplaySubject, it immediately receives the specified number of previous values emitted by the subject.


const enabled = false;
if (enabled) {
  const replaySubject = new ReplaySubject<number>(1);
  replaySubject.next(0);  // this will be logged, because the replaysubject will replay the last 1 values;

  const subscription = replaySubject.subscribe(logOutput);

  replaySubject.next(1);
  replaySubject.next(2);
  replaySubject.next(3);
  replaySubject.next(4);
  replaySubject.complete();
  replaySubject.next(5);  // This will not be logged

  const subscription2 = replaySubject.subscribe(logOutput);
}


