import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent} from "./components/icon/icon.component";



@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    IconComponent
  ]
})
export class SharedModule { }