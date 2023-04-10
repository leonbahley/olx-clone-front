import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuth } from '../interface/auth.interface';

const BASE_URL = 'https://olx-clone-back-production.up.railway.app';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  signUp = (creds: IAuth) =>
    this.http.post<{ token: string; name: string }>(
      `${BASE_URL}/auth/sign-up`,
      creds
    );

  signIn = (creds: IAuth) =>
    this.http.post<{ token: string }>(`${BASE_URL}/auth/log-in`, creds);
}
