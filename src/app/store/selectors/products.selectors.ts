import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IProductsState } from '../state/products.state';

const selectProducts = (state: IAppState) => state.products;

export const selectProductList = createSelector(
  selectProducts,
  (state: IProductsState) => state.products
);

export const selectProductItem = createSelector(
  selectProducts,
  (state: IProductsState) => state.selectedProduct
);
export const selectLoading = createSelector(
  selectProducts,
  (state: IProductsState) => state.loading
);