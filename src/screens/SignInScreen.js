import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SignIn from '../components/SignIn';

const SignInScreen = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <SignIn />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInScreen;
