import {modalReducer} from "./modal/modal.reducer";

export const reducers = {
  modal: modalReducer
}

export interface Reducers{
  modal: boolean
}
