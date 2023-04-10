import { Action } from '@ngrx/store';
import { IAuth } from 'src/app/interface/auth.interface';

export enum EUserActions {
  LoginUser = '[User] Login User',
  SignUpUser = '[User] Sign Up User',
  LoginUserSuccess = '[User] Login User Success',
  AuthError = '[User] Sign Up Error',
  RefreshUser = '[User] Refresh User',
  LogOut='[User] Log Out'
}

export class AuthError implements Action {
  readonly type = EUserActions.AuthError;
  constructor(public payload: { error: { message: string } }) {}
}

export class LoginUser implements Action {
  readonly type = EUserActions.LoginUser;
  constructor(public payload: IAuth) {}
}

export class SignUpUser implements Action {
  readonly type = EUserActions.SignUpUser;
  constructor(public payload: IAuth) {}
}

export class LoginUserSuccess implements Action {
  readonly type = EUserActions.LoginUserSuccess;
  constructor(public payload: { token: string; email: string }) {}
}

export class RefreshUser implements Action {
  readonly type = EUserActions.RefreshUser;
  constructor(public payload: { token: string; email: string }) {}
}

export class LogOut implements Action {
  readonly type = EUserActions.LogOut;
  
}

export type UserActions = LoginUserSuccess | AuthError | RefreshUser| LogOut
