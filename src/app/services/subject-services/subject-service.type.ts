import {Observable} from "rxjs";

export type State = {
    value: string;
}
export type SubjectService = {
    setState: (state: State) => void;
    getState$: () => Observable<State>;
}