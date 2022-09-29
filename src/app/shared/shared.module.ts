import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent} from "./components/icon/icon.component";
import {ButtonComponent} from "./components/button/button.component";
import {DropdownComponent} from "./components/dropdown/dropdown.component";
import {FormGroupComponent} from "./components/form-group/form-group.component";
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    IconComponent,
    ButtonComponent,
    DropdownComponent,
    FormGroupComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
  ],
    exports: [
        CommonModule,
        IconComponent,
        FormGroupComponent,
        DropdownComponent,
        ButtonComponent,
        ModalComponent
    ]
})
export class SharedModule { }
