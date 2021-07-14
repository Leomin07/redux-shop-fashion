import { combineReducers } from 'redux';
import { listProductsReducer, productDetailReducer } from './productReducer';
import { userRegisterReducer, userSigninReducer } from './userReducer';
import { cartReducer } from './cartReducer';
import { orderReducer } from './orderReducer';

const rootReducer = combineReducers({
  listProducts: listProductsReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  order: orderReducer,
  userRegister: userRegisterReducer,
  userSign: userSigninReducer,
});

export default rootReducer;
