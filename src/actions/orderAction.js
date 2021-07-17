import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
} from '../constants/orderConstants';
import { EMPTY_CART } from '../constants/cartConstants';
import axios from 'axios';
export const createOrder = order => async dispatch => {
  dispatch({ type: ORDER_CREATE_REQUEST });
  try {
    const { data } = await axios.post(
      'https://fake-api-721.herokuapp.com/order',
      order
    );
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: EMPTY_CART,
    });
    localStorage.removeItem('cartItems');
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: error.message,
    });
  }
};

export const detailsOrder = () => async dispatch => {
  dispatch({ type: ORDER_DETAILS_REQUEST });
  try {
    const { data } = await axios.get(
      `https://fake-api-721.herokuapp.com/order`
    );
    dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORDER_DETAILS_FAIL, payload: error.message });
  }
};
