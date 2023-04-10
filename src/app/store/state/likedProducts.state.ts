import { ILikedProduct } from 'src/app/interface/likedProduct.interface';

export interface ILikedProductsState {
  products: ILikedProduct[];
}

export const initialLikedProductsState: ILikedProductsState = {
  products: [],
};
