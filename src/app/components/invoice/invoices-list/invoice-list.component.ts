import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {InvoiceService} from "../invoice.service";
import {Subscription} from "rxjs";
import {Dropdown} from "../../../shared/components/dropdown/dropdown";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit, OnDestroy {

  numberOfInvoices = "";
  sub: Subscription | undefined;
  invoices$ = this.invoiceService.invoices$

  @Input() dropdownOptions: Dropdown[] = [
    {option: "draft", value: "Draft", isCheckbox: true},
    {option: "pending", value: "Pending", isCheckbox: true},
    {option: "paid", value: "Paid", isCheckbox: true},
  ]

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.sub = this.invoices$.subscribe(invoices =>{
      this.numberOfInvoices = `${invoices.length > 0 ? `There are ${invoices.length}`:"0" } invoice${invoices.length === 1 ? "" : "s"}`
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}
