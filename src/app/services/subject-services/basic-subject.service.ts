import {Inject} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {SubjectService} from "./subject-service.type";
import {State} from "./state.type";


@Inject({})
export class BasicSubjectService implements SubjectService{

    private stateSubject$$ = new Subject<State>();


    // constructor() {
    //     this.stateSubject$$.next({value: 'init'});
    // }

    public getState$(): Observable<State> {
        return this.stateSubject$$.asObservable();
    }

    public setState(state: State) {
        this.stateSubject$$.next(state);
    }
}