import React, { useState } from 'react';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartsActions';
import { useHistory } from 'react-router-dom';

const ProductDetail = ({ product }) => {
  const history = useHistory();
  const [size, setSize] = useState(product.availableSizes[0]);
  const dispatch = useDispatch();
  const addToCartHandler = product => {
    let newProduct = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      brand: product.brand,
      availableSizes: size,
    };
    dispatch(addToCart(newProduct));
    history.push('/cart');
  };
  console.log(size);
  return (
    <>
      <Col md={6} className="mt-4">
        <Image src={`${product.image}`} rounded fluid width="600px" />
      </Col>
      <Col md={3} className="mt-4">
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h3>{product.title}</h3>
          </ListGroup.Item>
          <ListGroup.Item>{product.description}</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3} className="mt-4">
        <ListGroup>
          <ListGroup.Item>
            <Row>
              <Col>Price:</Col>
              <Col>${product.price}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Brand:</Col>
              <Col>{product.brand}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Size:</Col>
              <Col>
                {product.quantity < 1 ? (
                  <select
                    disabled
                    onChange={event => setSize(event.target.value)}
                  >
                    {product.availableSizes.map(size => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                ) : (
                  <select onChange={event => setSize(event.target.value)}>
                    {product.availableSizes.map(size => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                )}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Available:</Col>
              <Col>{product.quantity}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Status:</Col>
              <Col>
                {product.quantity < 1 ? (
                  <span className="bg-danger text-white">Out of stock</span>
                ) : (
                  <span className="bg-success text-white">In stock</span>
                )}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-center">
            {product.quantity < 1 ? (
              <Button disabled variant="danger">
                Out of stock
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={() => addToCartHandler(product)}
              >
                ADD TO CART
              </Button>
            )}
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </>
  );
};

export default ProductDetail;
