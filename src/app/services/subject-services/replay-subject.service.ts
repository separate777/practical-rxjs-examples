import {Inject} from "@angular/core";
import {SubjectService} from "./subject-service.type";
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";
import {State} from "./state.type";

@Inject({})
export class ReplaySubjectService implements SubjectService {
    private state$$: ReplaySubject<{ value: string }> = new ReplaySubject(1)


    constructor() {
        this.setState({value: 'init (replaySubject)'});
    }
    getState$(): Observable<State> {
        return this.state$$.asObservable();
    }

    setState(state: State): void {
        this.state$$.next(state);
    }

}