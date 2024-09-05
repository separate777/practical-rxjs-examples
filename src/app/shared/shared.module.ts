import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReplaceEmptyWithPipe} from "./pipes/replace-empty-with.pipe";
import {ToggleButtonModule} from "primeng/togglebutton";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {ProgressSpinnerModule} from "primeng/progressspinner";


@NgModule({
  declarations: [ReplaceEmptyWithPipe],
  exports: [
    ReplaceEmptyWithPipe,
    ToggleButtonModule,
    RouterOutlet,
    FormsModule,
    RouterLink,
    InputNumberModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
  ],
  imports: [
    CommonModule,
    ToggleButtonModule,
    RouterOutlet,
    FormsModule,
    RouterLink,
    InputNumberModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
  ]
})
export class SharedModule {
}
