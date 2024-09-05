import { Subject } from 'rxjs';
import {logOutput} from "../../helpers";


// Subject
// A special type of observable that allows values to be multicasted to many observers.


const enabled = false;
if (enabled) {
  const subject = new Subject<number>();
  subject.next(0);  // This will not be logged (no subscribers yet)

  subject.subscribe(logOutput);

  subject.next(1);
  subject.next(2);
  subject.next(3);
  subject.next(4);
  subject.complete();
  subject.next(5);  // This will not be logged

  const subscription2 = subject.subscribe(logOutput);
}


