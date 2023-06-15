import { createReducer, on } from '@ngrx/store';
import { setCurrentStudent } from './student.action';
import { StudentModel } from './user.model';

export const initialState: StudentModel = {
  email: '',
  phoneNumber: '',
  address: '',
  motherName: '',
  motherPhoneNumber: '',
  fatherName: '',
  fatherPhoneNumber: '',
  gender: '',
  dateOfBirth: '',
  fullName: '',
};

export const studentReducer = createReducer(
  initialState,
  on(setCurrentStudent, (state, currentStudent) => ({
    email: currentStudent.email,
    phoneNumber: currentStudent.phoneNumber,
    address: currentStudent.address,
    motherName: currentStudent.motherName,
    motherPhoneNumber: currentStudent.motherPhoneNumber,
    fatherName: currentStudent.fatherName,
    fatherPhoneNumber: currentStudent.fatherPhoneNumber,
    gender: currentStudent.gender,
    dateOfBirth: currentStudent.dateOfBirth,
    fullName: currentStudent.fullName,
  }))
);
