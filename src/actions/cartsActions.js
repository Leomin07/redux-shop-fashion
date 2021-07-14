import {
  ADD_TO_CART,
  LIST_CARTS,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from '../constants/cartConstants';

export const listCarts = () => async (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  dispatch({
    type: LIST_CARTS,
    payload: { cartItems },
  });
};

export const addToCart = product => async (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      brand: product.brand,
      availableSizes: product.availableSizes,
      quantity: 1,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const increaseQuantity = payload => (dispatch, getState) => {
  dispatch({
    type: INCREASE_QUANTITY,
    payload,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const decreaseQuantity = payload => (dispatch, getState) => {
  dispatch({
    type: DECREASE_QUANTITY,
    payload,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = id => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
