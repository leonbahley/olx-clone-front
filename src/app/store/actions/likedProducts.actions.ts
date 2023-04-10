import { Action } from '@ngrx/store';
import { ILikedProduct } from 'src/app/interface/likedProduct.interface';
import { IProduct } from 'src/app/interface/product.interface';

export enum ELikedProductsActions {
  GetLikedProducts = '[Liked Products] Get Liked Products',
  GetLikedProductsSuccess = '[Liked Products] Get Liked Products Success',
  DeleteLikedProduct = '[Liked Products] Delete Liked Product',
  DeleteLikedProductSuccess = '[Liked Products] Delete Liked Product Success',
  AddLikedProduct = '[Liked Products] Add Liked Product',
  AddLikedProductSuccess = '[Liked Products] Add Liked Product Success',
}

export class GetLikedProducts implements Action {
  public readonly type = ELikedProductsActions.GetLikedProducts;
}

export class GetLikedProductsSuccess implements Action {
  public readonly type = ELikedProductsActions.GetLikedProductsSuccess;
  constructor(public payload: ILikedProduct[]) {}
}

export class DeleteLikedProduct implements Action {
  public readonly type = ELikedProductsActions.DeleteLikedProduct;
  constructor(public payload: number) {}
}

export class DeleteLikedProductSuccess implements Action {
  public readonly type = ELikedProductsActions.DeleteLikedProductSuccess;
  constructor(public payload: number) {}
}

export class AddLikedProduct implements Action {
  public readonly type = ELikedProductsActions.AddLikedProduct;
  constructor(public payload: IProduct) {}
}

export class AddLikedProductSuccess implements Action {
  public readonly type = ELikedProductsActions.AddLikedProductSuccess;
  constructor(public payload: ILikedProduct) {}
}

export type LikedeProductsActions =
  | GetLikedProductsSuccess
  | DeleteLikedProductSuccess
  | AddLikedProductSuccess;
