import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import ContentItem from '../components/ContentItem';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const SearchScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const productsLists = useSelector(state => state.listProducts);
  const { loading, products, error } = productsLists;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);
  return (
    <Container>
      <Row>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox error={error} />
        ) : products.length <= 0 ? (
          <h2 className="text-center mt-3">No products</h2>
        ) : (
          products.map((val, idx) => (
            <Col
              xs="12"
              sm="6"
              md="3"
              xl="3"
              key={idx}
              style={{
                display: 'flex ',
              }}
            >
              <ContentItem products={val} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default SearchScreen;
