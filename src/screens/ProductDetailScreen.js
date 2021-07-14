import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../actions/productActions';
import ProductDetail from '../components/ProductDetail';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const ProductScreen = ({ match }) => {
  const id = match.params.id;
  const productDetail = useSelector(state => state.productDetail);
  const { loading, error, product } = productDetail;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Row>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox />
        ) : (
          <ProductDetail product={product} />
        )}
      </Row>
    </Container>
  );
};

export default ProductScreen;
