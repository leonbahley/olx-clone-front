import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { productsReducers } from './products.reducers';
import { userReducers } from './user.reducers';
import { LikedProductsReducers } from './likedProducts.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  products: productsReducers,
  user: userReducers,
  likedProducts: LikedProductsReducers,
};
