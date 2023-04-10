import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ILikedProductsState } from '../state/likedProducts.state';
const selectProducts = (state: IAppState) => state.likedProducts;

export const selectLikedProductList = createSelector(
  selectProducts,
  (state: ILikedProductsState) => state.products
);
