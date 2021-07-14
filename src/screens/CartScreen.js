import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listCarts } from '../actions/cartsActions';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom';

const CartScreen = () => {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.cartItems);
  useEffect(() => {
    dispatch(listCarts());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col xs="12" sm="12" md="12" xl="12">
          <Table>
            <tbody>
              <Cart carts={carts} />
            </tbody>
          </Table>
        </Col>
        <Col md="4">
          {carts.length > 0 ? (
            <div className=" border rounded p-3 text-center">
              <h4>
                <strong>
                  Total price: $
                  {carts
                    .reduce((a, c) => a + c.quantity * c.price, 0)
                    .toFixed(2)}
                </strong>
              </h4>
            </div>
          ) : (
            ''
          )}
        </Col>
        <Col md="8" className="text-center d-flex justify-content-center">
          <div className="p-3">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button>Continue shopping</Button>
            </Link>
          </div>
          <div className="p-3">
            <Link to="/order" style={{ textDecoration: 'none' }}>
              <Button variant="success">Checkout</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartScreen;
