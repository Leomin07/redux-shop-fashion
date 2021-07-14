import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCT_DETAIL_REQUEST,
  FETCH_PRODUCT_DETAIL_SUCCESS,
  FETCH_PRODUCT_DETAIL_ERROR,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  FILTER_PRODUCT_BY_SIZE,
  FILTER_PRODUCT_BY_BRAND,
} from '../constants/productConstants';
import axios from 'axios';

export const listProducts = title => async dispatch => {
  dispatch({
    type: FETCH_PRODUCTS_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `https://fake-api-721.herokuapp.com/product?q=${title}`
    );
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCTS_ERROR,
      payload: err.message,
    });
  }
};
export const fetchProductDetail = id => async dispatch => {
  dispatch({
    type: FETCH_PRODUCT_DETAIL_REQUEST,
  });
  try {
    const { data } = await axios.get(
      `https://fake-api-721.herokuapp.com/product/${id}`
    );
    dispatch({
      type: FETCH_PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_PRODUCT_DETAIL_ERROR,
      payload: err.message,
    });
  }
};
export const filterProductBySize = (products, size) => async dispatch => {
  dispatch({
    type: FILTER_PRODUCT_BY_SIZE,
    payload: {
      size: size,
      items:
        size === 'ALL'
          ? products
          : products.filter(x => x.availableSizes.indexOf(size) >= 0),
    },
  });
};
export const filterProductByBrand = (products, brand) => async dispatch => {
  dispatch({
    type: FILTER_PRODUCT_BY_BRAND,
    payload: {
      brand: brand,
      items:
        brand === 'ALL' ? products : products.filter(x => x.brand === brand),
    },
  });
};

export const addProduct = product => async dispatch => {
  const { data } = await axios.post(
    `https://fake-api-721.herokuapp.com/product`,
    product
  );
  dispatch({
    type: ADD_PRODUCT,
    payload: data,
  });
};
export const updateProduct = (id, product) => async dispatch => {
  const { data } = await axios.put(
    `https://fake-api-721.herokuapp.com/product/${id}`,
    product
  );
  dispatch({
    type: UPDATE_PRODUCT,
    payload: data,
  });
};

export const deleteProduct = id => async dispatch => {
  axios.delete(`https://fake-api-721.herokuapp.com/product/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
    payload: id,
  });
};
