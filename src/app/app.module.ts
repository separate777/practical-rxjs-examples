import {Inject, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component';
import {PokeService} from './services/poke.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import './operators/switchMap/switchMap';
import './operators/map/map';
import './operators/tap/tap';
import './operators/combineLatest/combineLatest';
import './operators/startWith/startWith';
import './operators/takeUntil/takeUntil';
import './operators/take/take';
import './operators/debounceTime/debounceTime';
import './operators/filter/filter';
import './operators/withLatestFrom/withLatestFrom';
import './operators/of/of';
import './operators/catchError/catchError';
import './operators/delay/delay';
import './observables/Subjects/subject';
import './observables/Subjects/replay-subject';
import './observables/Subjects/behaviour-subject';
import './FAQ/resub-after-complete';
import {PokeComponent} from './components/poke/poke.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {
    ShowSubjectServiceStateComponent
} from './components/show-subject-service-state/show-subject-service-state.component';
import {ChangeStateComponent} from './components/change-state/change-state.component';
import {
    subjectServiceInjectionToken
} from "./services/subject-services/subject-service.injection-token";
import {BehaviourSubjectService} from "./services/subject-services/behaviour-subject.service";
import {
    RouteChangesExampleComponent
} from "./route-changes-example/route-changes-example/route-changes-example.component";


@NgModule({
    declarations: [AppComponent, PokeComponent, HomeComponent, NotFoundComponent, ShowSubjectServiceStateComponent, ChangeStateComponent, RouteChangesExampleComponent  ],
    providers: [
        PokeService,
        {
            provide: subjectServiceInjectionToken,
            useClass: BehaviourSubjectService,
        }
    ],
    imports: [
        InputNumberModule,
        CommonModule,
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ProgressSpinnerModule,
        BrowserAnimationsModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
