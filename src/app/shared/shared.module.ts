import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReplaceEmptyWithPipe} from "./pipes/replace-empty-with.pipe";
import {ToggleButtonModule} from "primeng/togglebutton";
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {DropdownModule} from "primeng/dropdown";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";
import {NavItemComponent} from "./nav-menu/nav-item/nav-item.component";


@NgModule({
  declarations: [ReplaceEmptyWithPipe, NavMenuComponent, NavItemComponent],
  exports: [
    ReplaceEmptyWithPipe,
    ToggleButtonModule,
    RouterOutlet,
    FormsModule,
    RouterLink,
    InputNumberModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    DropdownModule,
    NavMenuComponent,
    NavItemComponent
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
    DropdownModule
  ]
})
export class SharedModule {
}
