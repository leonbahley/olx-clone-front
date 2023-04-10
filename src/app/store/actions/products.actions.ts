import { Action } from '@ngrx/store';
import { IProduct } from 'src/app/interface/product.interface';

export enum EProductsActions {
  GetProducts = '[Products] Get Products',
  GetProductsSuccess = '[Products] Get Products Success',
  GetProductItem = '[Products] Get Products Item',
  GetProductItemSuccess = '[Products] Get Products Item Success',
  SearchByName = '[Products] Search By Name',
  SearchByNameSuccess = '[Products] Search By Name Success',
  Loading = '[Loading] Loading started',
}

export class Loading implements Action {
  public readonly type = EProductsActions.Loading;
}

export class GetProducts implements Action {
  public readonly type = EProductsActions.GetProducts;
}

export class GetProductsSuccess implements Action {
  public readonly type = EProductsActions.GetProductsSuccess;
  constructor(public payload: IProduct[]) {}
}

export class GetProductItem implements Action {
  public readonly type = EProductsActions.GetProductItem;
  constructor(public payload: number) {}
}

export class GetProductItemSuccess implements Action {
  public readonly type = EProductsActions.GetProductItemSuccess;
  constructor(public payload: IProduct) {}
}

export class GetProductsByCategorySuccess implements Action {
  readonly type = '[Products] Get Products Item By Category';
  constructor(public payload: IProduct[]) {}
}

export class SearchByName implements Action {
  public readonly type = EProductsActions.SearchByName;
  constructor(public payload: string) {}
}

export class SearchByNameSuccess implements Action {
  public readonly type = EProductsActions.SearchByNameSuccess;
  constructor(public payload: IProduct[]) {}
}

export type ProductsActions =
  | GetProductsSuccess
  | GetProductItemSuccess
  | GetProductsByCategorySuccess
  | SearchByNameSuccess
  | Loading;
