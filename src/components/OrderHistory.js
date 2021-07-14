import React from 'react';
import { Table } from 'react-bootstrap';

const OrderHistory = ({ order }) => {
  return (
    <>
      <Table className="mt-3">
        <thead className="mt-3 bg-dark text-white ">
          <tr>
            <td>Id order</td>
            <td>CreateAt</td>
            <td>Total price</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {order.map(val => (
            <tr key={val.id}>
              <td>{val.id} </td>
              <td>{val.createAt} </td>
              <td>{val.total} </td>
              <td>{val.status} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default OrderHistory;
