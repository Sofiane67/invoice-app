import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Invoice} from "./invoice";

@Injectable()
export class InvoiceService {
  invoices$ = this.http.get<Invoice[]>("api/invoices/data.json")
  constructor(private http: HttpClient) { }
}
