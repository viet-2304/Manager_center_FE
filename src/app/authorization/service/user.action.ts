import {CurrentUser} from './../models/Login.model'
export class SetCurrentUser {
  public static readonly type = '[currentUser] Get currentUser';
  constructor(public currentUser: CurrentUser){}
}
