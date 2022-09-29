import { NgModule } from '@angular/core';
import {InvoiceListComponent} from "./invoices-list/invoice-list.component";
import {RouterModule} from "@angular/router";
import {InvoiceService} from "./invoice.service";
import {SharedModule} from "../../shared/shared.module";
import { InvoiceCardComponent } from './invoice-card/invoice-card.component';



@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceCardComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: "invoices", component: InvoiceListComponent},
    ]),
    SharedModule
  ],
  providers: [InvoiceService]
})
export class InvoiceModule { }
