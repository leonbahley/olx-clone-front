import { IProduct } from 'src/app/interface/product.interface';

export interface IProductsState {
  products: IProduct[];
  selectedProduct: IProduct | null;
  loading: boolean;
}

export const initialProductsState: IProductsState = {
  products: [],
  selectedProduct: null,
  loading: false,
};
