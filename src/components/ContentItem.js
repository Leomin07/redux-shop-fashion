import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GrFormView } from 'react-icons/gr';

const ContentItem = ({ products }) => {
  return (
    <Card className="mt-4">
      <Link to={`/product/${products.id}`}>
        <Card.Img variant="top" src={`${products.image}`} />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${products.id}`}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Card.Title as="div">
            <h3>{products.title}</h3>
          </Card.Title>
        </Link>
        <Card.Text as="h3">${products.price}</Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item className="mx-auto">
          <Link
            to={`/product/${products.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <GrFormView size="2em" />
            View Detail...
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ContentItem;
