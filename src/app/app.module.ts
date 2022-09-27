import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ButtonComponent} from "./components/UI/button/button.component";
import {SharedModule} from "./shared/shared.module";
import {FormGroupComponent} from "./components/UI/input/formGroup.component";
import {DropdownComponent} from "./components/UI/dropdown/dropdown.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FormGroupComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
