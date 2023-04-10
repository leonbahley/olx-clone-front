import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product.interface';
import { ILikedProduct } from '../interface/likedProduct.interface';

const BASE_URL = 'https://olx-clone-back-production.up.railway.app';

const getToken = () => {
  let token;

  if (localStorage.getItem('user')) {
    token = JSON.parse(localStorage.getItem('user')!).token;
  }

  const httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + token,
    }),
  };

  return httpOptions;
};

@Injectable({
  providedIn: 'root',
})
export class LikedProductsService {
  constructor(private http: HttpClient) {}

  getAll = () =>
    this.http.get<{ cartData: ILikedProduct[] }>(
      `${BASE_URL}/cart`,
      getToken()
    );

  addProduct = (prod: IProduct) =>
    this.http.post<{ ItemToAdd: ILikedProduct }>(
      `${BASE_URL}/cart`,
      prod,
      getToken()
    );

  deleteProduct = (id: number) =>
    this.http.delete<void>(`${BASE_URL}/cart/${id}`, getToken());
}
