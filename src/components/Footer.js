import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FOOTER = styled.div`
  margin-top: 20px;
  background: #212529;
  color: #fff;
`;

const Footer = () => {
  return (
    <footer>
      <FOOTER>
        <Container>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; Tranminhsvp@gmail.com
            </Col>
          </Row>
        </Container>
      </FOOTER>
    </footer>
  );
};

export default Footer;
