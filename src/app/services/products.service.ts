import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product.interface';

const BASE_URL = 'https://dummyjson.com/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll = () => this.http.get<{ products: IProduct[] }>(BASE_URL);

  getSingleProduct = (id: number) =>
    this.http.get<IProduct>(`${BASE_URL}/${id}`);

  getByCategorie = (category: string) =>
    this.http.get<{ products: IProduct[] }>(`${BASE_URL}/category/${category}`);

  getByName = (name: string) =>
    this.http.get<{ products: IProduct[] }>(`${BASE_URL}/search?q=${name}`);
}
