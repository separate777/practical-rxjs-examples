import {Component} from '@angular/core';
import {BehaviorSubject, combineLatest, filter, map, Observable} from "rxjs";
import {ToggleButtonChangeEvent} from "primeng/togglebutton";

@Component({
  selector: 'app-reactive-elements',
  templateUrl: './reactive-elements.component.html',
  styleUrl: './reactive-elements.component.css'
})
export class ReactiveElementsComponent {
  inputValue$$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  inputUpdateSyncActive$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  inputValue$: Observable<string> = combineLatest([this.inputValue$$, this.inputUpdateSyncActive$$])
  .pipe(
      filter(([_, syncActive]) => syncActive),
      map(([value, _]) => value)
  );

  updateInputValue($event: KeyboardEvent) {
    this.inputValue$$.next(($event.target as HTMLInputElement).value);
  }

  clearInputValue() {
    this.inputValue$$.next('');
  }

  updateInputSync($event: ToggleButtonChangeEvent) {
    this.inputUpdateSyncActive$$.next(!!$event.checked);
  }
}
