import { EUserActions, UserActions } from '../actions/user.actions';
import { IUserState, initialUserState } from '../state/user.state';

export const userReducers = (
  state = initialUserState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.LoginUserSuccess: {
      return {
        ...state,
        error: null,
        token: action.payload.token,
        email: action.payload.email,
      };
    }

    case EUserActions.AuthError: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case EUserActions.RefreshUser: {
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
      };
    }

    case EUserActions.LogOut: {
      return {
        ...state,
        ...initialUserState,
      };
    }

    default:
      return state;
  }
};
