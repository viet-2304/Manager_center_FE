import { createReducer, on } from "@ngrx/store";
import { UserInfo } from "../models/Login.model";
import { setCurrentUser } from "./user.action";

export const initialState: UserInfo = {
  email: '',
  phoneNumber: '',
  address: '',
  userName:"",
  roleId:""

};

export const userReducer = createReducer (
  initialState,
  on(setCurrentUser, (state, currentUser) => ({
    email: currentUser.email,
    phoneNumber: currentUser.phoneNumber,
    address: currentUser.address,
    userName: currentUser.userName,
    roleId: currentUser.roleId,
  }))
)
