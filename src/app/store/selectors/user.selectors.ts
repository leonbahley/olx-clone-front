import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IUserState } from '../state/user.state';

const selectUser = (state: IAppState) => state.user;

export const selectError = createSelector(
  selectUser,
  (state: IUserState) => state.error
);

export const selectEmail = createSelector(
  selectUser,
  (state: IUserState) => state.email
);
