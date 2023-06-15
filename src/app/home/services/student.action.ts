import { createAction, props } from '@ngrx/store';
import { currentStudent } from '../models/user.model';
import { StudentModel } from './user.model';

export const setCurrentStudent = createAction(
  '[currentStudent Component] SetCurrentStudent',
  props<StudentModel>()
);
