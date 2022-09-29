import {createReducer, on} from "@ngrx/store";
import {openModal} from "./modal.actions";

export const initialState = false;

export const modalReducer = createReducer(
  initialState,
  on(openModal, (state) => !state),
)
