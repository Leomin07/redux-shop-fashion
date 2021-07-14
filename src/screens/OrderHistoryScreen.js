import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import OrderHistory from '../components/OrderHistory';
import { detailsOrder } from '../actions/orderAction';
import LoadingBox from '../components/LoadingBox';

const OrderHistoryScreen = () => {
  const dispatch = useDispatch();
  const listOrders = useSelector(state => state.order);
  const { loading, order } = listOrders;
  useEffect(() => {
    dispatch(detailsOrder());
  }, [dispatch]);
  console.log(order);
  return (
    <Container>
      <Row>
        <Col>{loading ? <LoadingBox /> : <OrderHistory order={order} />}</Col>
      </Row>
    </Container>
  );
};

export default OrderHistoryScreen;
