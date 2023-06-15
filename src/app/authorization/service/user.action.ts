import { createAction, props } from "@ngrx/store";
import { UserInfo } from "../models/Login.model";

export const setCurrentUser = createAction(
  '[currentUser Component] SetCurrentUser',
  props<UserInfo>()
);
