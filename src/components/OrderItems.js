import React from 'react';
import { Table } from 'react-bootstrap';

const Order = ({ carts, total }) => {
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
          </tr>
        </thead>
        <tbody>
          {carts.map(cart => (
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
              <td className="align-middle text-center">{cart.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <h5>
          Total:
          <strong>${total}</strong>
        </h5>
      </div>
    </>
  );
};

export default Order;
