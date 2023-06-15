import { createSelector } from '@ngrx/store';
import { UserInfo } from '../models/Login.model';

export const selectUser = (state: UserInfo) => state;
export const selectCurrentUser = createSelector(
  selectUser,
  (state: UserInfo) => state
);
