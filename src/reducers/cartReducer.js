import {
  ADD_TO_CART,
  LIST_CARTS,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../constants/cartConstants';

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]') },
  action
) => {
  switch (action.type) {
    case LIST_CARTS:
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.id === item.id);
      if (existItem) {
        state.cartItems.map(x => {
          if (x.id === item.id) {
            x.quantity++;
          }
          return { ...state };
        });
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
      return { ...state };

    case INCREASE_QUANTITY:
      state.cartItems[action.payload].quantity++;
      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    case DECREASE_QUANTITY:
      let quantity = state.cartItems[action.payload].quantity;
      if (quantity > 1) {
        state.cartItems[action.payload].quantity--;
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.id !== action.payload),
      };
    default:
      return state;
  }
};
