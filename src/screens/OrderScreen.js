import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import OrderItems from '../components/OrderItems';
import { useDispatch, useSelector } from 'react-redux';
import { listCarts } from '../actions/cartsActions';
import OrderForm from '../components/OrderForm';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.cartItems);
  useEffect(() => {
    dispatch(listCarts());
  }, [dispatch]);
  const total = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <Container>
      <Row>
        <Col xs="12" md="6">
          <OrderForm total={total} carts={carts} />
        </Col>
        <Col xs="12" md="6">
          <OrderItems carts={carts} total={total} />
        </Col>
      </Row>
    </Container>
  );
};

export default OrderScreen;
