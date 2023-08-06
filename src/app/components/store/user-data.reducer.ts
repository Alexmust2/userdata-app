import { createReducer, on } from "@ngrx/store";
import { addUserData } from "./user-data.actions";

export interface userData {
  name: string;
  email: string;
  theme: string;
  msg: string;
}


export const initialState: userData = {
  name: "",
  email: "",
  theme: "",
  msg: "",
}

export const userReducer = createReducer(
  initialState,
  on(addUserData, (state, props) => {
    return {
      ...state,
      email: props.email,
      name: props.name,
      theme: props.theme,
      msg: props.msg
    }
  }),
);

