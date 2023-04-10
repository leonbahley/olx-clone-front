import { EProductsActions, ProductsActions } from '../actions/products.actions';
import { IProductsState, initialProductsState } from '../state/products.state';

export const productsReducers = (
  state = initialProductsState,
  action: ProductsActions
): IProductsState => {
  switch (action.type) {
    case EProductsActions.Loading: {
      return {
        ...state,
        loading: true,
      };
    }

    case EProductsActions.GetProductsSuccess: {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    }

    case EProductsActions.GetProductItemSuccess: {
      return {
        ...state,
        selectedProduct: action.payload,
        loading: false,
      };
    }

    case '[Products] Get Products Item By Category': {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    }

    case EProductsActions.SearchByNameSuccess: {
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};
