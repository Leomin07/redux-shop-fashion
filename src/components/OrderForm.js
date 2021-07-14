import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createOrder } from '../actions/orderAction';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const OrderForm = ({ total, carts }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);
  const handlerSubmit = e => {
    e.preventDefault();
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    let order = {
      id: uuidv4(),
      name: name,
      phone: phone,
      address: address,
      cartItems: carts,
      createAt: today,
      total: total,
      status: 'Success',
    };
    dispatch(createOrder(order));
    history.push('/order/history');
  };
  return (
    <>
      <Form onSubmit={handlerSubmit} className="mt-3">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone"
            onChange={e => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            onChange={e => setAddress(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default OrderForm;
