import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SignUp from '../components/SignUp';

const SignUpScreen = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <SignUp />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpScreen;
