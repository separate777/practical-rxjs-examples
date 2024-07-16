import {Inject} from "@angular/core";
import {SubjectService} from "./subject-service.type";
import {BehaviorSubject, Observable} from "rxjs";
import {State} from "./state.type";

@Inject({})
export class BehaviourSubjectService implements SubjectService {
    private state$$: BehaviorSubject<{ value: string }> = new BehaviorSubject({value: 'init (behaviourSubject)'})
    getState$(): Observable<State> {
        return this.state$$.asObservable();
    }

    setState(state: State): void {
        this.state$$.next(state);
    }

}