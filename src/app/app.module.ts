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
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app-component/app.component';
import {PokeService} from './services/poke.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {StateManagementModule} from "./use-cases/state-management/state-management.module";
import {DockModule} from "primeng/dock";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [AppComponent],
  providers: [PokeService],
  imports: [
    SharedModule,
    StateManagementModule,
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DockModule,
    ButtonModule,
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
