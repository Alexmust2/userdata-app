import { createAction, props } from '@ngrx/store';

export const addUserData = createAction (
  "[Form] push user info to store",
  props<{email: string, name: string, msg: string, theme: string}>()
);
