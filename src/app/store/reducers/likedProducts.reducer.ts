import {
  ELikedProductsActions,
  LikedeProductsActions,
} from '../actions/likedProducts.actions';
import {
  ILikedProductsState,
  initialLikedProductsState,
} from '../state/likedProducts.state';

export const LikedProductsReducers = (
  state = initialLikedProductsState,
  action: LikedeProductsActions
): ILikedProductsState => {
  switch (action.type) {
    case ELikedProductsActions.GetLikedProductsSuccess: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case ELikedProductsActions.AddLikedProductSuccess: {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }

    case ELikedProductsActions.DeleteLikedProductSuccess: {
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
