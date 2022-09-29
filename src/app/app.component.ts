import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {Reducers} from "./store/reducers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'invoice-app';
  sub: Subscription | undefined
  modalIsOpen: boolean = false;

  constructor(private store: Store<Reducers>) {
  }

  ngOnInit() {
    this.sub = this.store.subscribe((data) => this.modalIsOpen = data.modal)
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
