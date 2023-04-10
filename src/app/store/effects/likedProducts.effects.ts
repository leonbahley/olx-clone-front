import { Injectable } from '@angular/core';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, repeat, switchMap, tap } from 'rxjs/operators';
import {
  AddLikedProduct,
  AddLikedProductSuccess,
  DeleteLikedProduct,
  DeleteLikedProductSuccess,
  ELikedProductsActions,
  GetLikedProducts,
  GetLikedProductsSuccess,
} from '../actions/likedProducts.actions';
import { LikedProductsService } from 'src/app/services/likedProducts.service';
import { ILikedProduct } from 'src/app/interface/likedProduct.interface';

@Injectable()
export class LikedProductsEffects {
  idToDelete!: number;

  GetLikedProducts$ = createEffect(() =>
    this._actions$.pipe(
      ofType<GetLikedProducts>(ELikedProductsActions.GetLikedProducts),
      switchMap(() => this.likedProductsService.getAll()),
      switchMap((productHttp: { cartData: ILikedProduct[] }) =>
        of(new GetLikedProductsSuccess(productHttp.cartData))
      ),
      catchError((err) => EMPTY),
      repeat()
    )
  );

  AddLikedProduct$ = createEffect(() =>
    this._actions$.pipe(
      ofType<AddLikedProduct>(ELikedProductsActions.AddLikedProduct),
      map((action) => action.payload),

      switchMap((prod) => this.likedProductsService.addProduct(prod)),
      switchMap((productHttp: { ItemToAdd: ILikedProduct }) =>
        of(new AddLikedProductSuccess(productHttp.ItemToAdd))
      ),
      catchError((err) => EMPTY),
      repeat()
    )
  );

  DeleteLikedProduct$ = createEffect(() =>
    this._actions$.pipe(
      ofType<DeleteLikedProduct>(ELikedProductsActions.DeleteLikedProduct),
      map((action) => action.payload),
      tap((id) => (this.idToDelete = id)),
      switchMap((id) => this.likedProductsService.deleteProduct(id)),
      switchMap(() => of(new DeleteLikedProductSuccess(this.idToDelete))),
      catchError((err) => EMPTY),
      repeat()
    )
  );

  constructor(
    private likedProductsService: LikedProductsService,
    private _actions$: Actions
  ) {}
}
