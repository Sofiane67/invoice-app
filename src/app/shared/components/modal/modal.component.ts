import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {openModal} from "../../../store/modal/modal.actions";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Output() openingModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  isOpen = true;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.isOpen = false;
    setTimeout(() => this.store.dispatch(openModal()), 600)
  }

}
