import {
  ILikedProductsState,
  initialLikedProductsState,
} from './likedProducts.state';
import { IProductsState, initialProductsState } from './products.state';
import { IUserState, initialUserState } from './user.state';

export interface IAppState {
  products: IProductsState;
  user: IUserState;
  likedProducts: ILikedProductsState;
}

export const initialAppState: IAppState = {
  products: initialProductsState,
  user: initialUserState,
  likedProducts: initialLikedProductsState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
