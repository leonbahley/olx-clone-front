import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, repeat, switchMap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import {
  EProductsActions,
  GetProductItem,
  GetProductItemSuccess,
  GetProducts,
  GetProductsSuccess,
  SearchByName,
  SearchByNameSuccess,
} from '../actions/products.actions';
import { IProduct } from 'src/app/interface/product.interface';

@Injectable()
export class ProductsEffects {
  getProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetProducts>(EProductsActions.GetProducts),
      switchMap(() => this.productsService.getAll()),
      switchMap((productHttp: { products: IProduct[] }) =>
        of(new GetProductsSuccess(productHttp.products))
      ),
      catchError((err) => EMPTY),
      repeat()
    )
  );

  getProductsItem$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetProductItem>(EProductsActions.GetProductItem),
      map((action) => action.payload),
      switchMap((id) => this.productsService.getSingleProduct(id)),
      switchMap((productHttp: IProduct) =>
        of(new GetProductItemSuccess(productHttp))
      ),
      catchError((err) => EMPTY),
      repeat()
    )
  );

  seachByName$ = createEffect(() =>
    this._actions$.pipe(
      ofType<SearchByName>(EProductsActions.SearchByName),
      map((action) => action.payload),
      switchMap((name) => this.productsService.getByName(name)),
      switchMap((productHttp: { products: IProduct[] }) =>
        of(new SearchByNameSuccess(productHttp.products))
      ),
      catchError((err) => EMPTY),
      repeat()
    )
  );

  constructor(
    private productsService: ProductsService,
    private _actions$: Actions
  ) {}
}
