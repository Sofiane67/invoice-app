import {Component, Input, OnInit} from '@angular/core';
import {Invoice} from "../invoice";

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.scss']
})
export class InvoiceCardComponent implements OnInit {

  @Input() invoice: Invoice = {} as Invoice;

  constructor() { }

  ngOnInit(): void {
  }

}
