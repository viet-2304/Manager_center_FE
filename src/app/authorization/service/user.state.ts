import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { Observable } from 'rxjs';
import { CurrentUser } from '../models/Login.model';
import { LoginService } from './login.service';
import { SetCurrentUser } from './user.action';

@State<CurrentUser>({
  name: 'currentUserState',
  defaults: {
    email: '',
    phoneNumber: '',
    address: '',
    userName: '',
    roleId: '',
  },
})
@Injectable()
export class UserState {

  @Selector()
  public static getCurrentUser(state: CurrentUser): CurrentUser {
    return state;
  }

  @Action(SetCurrentUser)
  public getAccount(stateContext: StateContext<CurrentUser>, action: SetCurrentUser):void {
    stateContext.patchState(action.currentUser)
  }
}
