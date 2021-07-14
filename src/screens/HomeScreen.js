import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import ContentItem from '../components/ContentItem';
import { Container, Row, Col } from 'react-bootstrap';
import FilterSizes from '../components/FilterSizes';
import FilterBrand from '../components/FilterBrand';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const Home = () => {
  const productsLists = useSelector(state => state.listProducts);
  const { loading, error, products } = productsLists;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(''));
  }, [dispatch]);
  return (
    <Container>
      <Row>
        <Col xs="8" sm="6">
          <FilterBrand />
        </Col>
        <Col xs="4" sm="6">
          <FilterSizes />
        </Col>
        <hr />
        <Col>
          <Row>
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox error={error} />
            ) : (
              products.map((val, idx) => (
                <Col
                  xs="12"
                  sm="6"
                  md="3"
                  xl="3"
                  key={idx}
                  className="d-flex align-items-stretch"
                >
                  <ContentItem products={val} />
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
