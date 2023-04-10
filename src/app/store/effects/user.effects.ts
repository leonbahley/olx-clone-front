import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/services/user.service';
import {
  AuthError,
  EUserActions,
  LoginUser,
  LoginUserSuccess,
  SignUpUser,
} from '../actions/user.actions';
import { catchError, map, of, repeat, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  email!: string;

  SignUpUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType<SignUpUser>(EUserActions.SignUpUser),
      map((action) => action.payload),
      tap((creds) => {
        this.email = creds.email!;
      }),
      switchMap((creds) => this.userService.signUp(creds)),
      switchMap((res: { token: string }) =>
        of(new LoginUserSuccess({ ...res, email: this.email }))
      ),
      tap((res) => localStorage.setItem('user', JSON.stringify(res.payload))),
      catchError((error) => of(new AuthError(error))),
      repeat()
    )
  );

  LoginUser$ = createEffect(() =>
    this._actions$.pipe(
      ofType<LoginUser>(EUserActions.LoginUser),
      map((action) => action.payload),
      tap((creds) => {
        this.email = creds.email!;
      }),
      switchMap((creds) => this.userService.signIn(creds)),

      switchMap((res: { token: string }) =>
        of(new LoginUserSuccess({ ...res, email: this.email }))
      ),
      tap((res) => localStorage.setItem('user', JSON.stringify(res.payload))),
      catchError((error) => of(new AuthError(error))),
      repeat()
    )
  );

  authRedirect$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(EUserActions.LoginUserSuccess),
        tap(() => {
          this.router.navigate(['']);
        })
      );
    },
    { dispatch: false }
  );
  constructor(
    private userService: UserService,
    private _actions$: Actions,
    private router: Router
  ) {}
}
