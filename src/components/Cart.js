import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../actions/cartsActions';
import { VscAdd, VscChromeMinimize } from 'react-icons/vsc';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { IconButton } from '@material-ui/core';
import { Table } from 'react-bootstrap';

const Cart = ({ carts }) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const increaseQuantityHandler = key => {
    dispatch(increaseQuantity(key));
  };

  const decreaseQuantityHandler = key => {
    dispatch(decreaseQuantity(key));
  };
  return (
    <>
      <Table className="mt-3">
        <thead className="bg-dark text-white">
          <tr>
            <td className="align-middle ">Image</td>
            <td className="align-middle text-center">Brand</td>
            <td className="align-middle text-center">Product Name</td>
            <td className="align-middle text-center">Size</td>
            <td className="align-middle text-center">Price</td>
            <td className="align-middle text-center">Quantity</td>
            <td className="align-middle text-center">Action</td>
          </tr>
        </thead>
        <tbody>
          {carts.length > 0 ? (
            carts.map((cart, key) => (
              <tr key={cart.id}>
                <td>
                  <img
                    src={cart.image}
                    alt={cart.title}
                    width="200px"
                    className="img-fluid "
                  />{' '}
                </td>
                <td className="align-middle text-center">{cart.brand} </td>
                <td className="align-middle text-center">{cart.title} </td>
                <td className="align-middle text-center">
                  {cart.availableSizes}{' '}
                </td>
                <td className="align-middle text-center">
                  <strong>${cart.price}</strong>{' '}
                </td>
                <td className="align-middle text-center">
                  <IconButton onClick={() => decreaseQuantityHandler(key)}>
                    <VscChromeMinimize size="1em" />
                  </IconButton>
                  {cart.quantity}
                  <IconButton onClick={() => increaseQuantityHandler(key)}>
                    <VscAdd size="1em" />
                  </IconButton>
                </td>
                <td className="align-middle text-center">
                  <IconButton onClick={() => removeFromCartHandler(cart.id)}>
                    <RiDeleteBin6Fill size="1.5em" color="#f50057" />
                  </IconButton>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                Empty Cart
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
