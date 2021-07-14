import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const userSign = useSelector(state => state.userSign);
  const { userInfo } = userSign;
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [history, userInfo]);
  return (
    <>
      <h4 className="mt-3">Sign in</h4>
      <Form onSubmit={handlerSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <p>
          New customer.{' '}
          <Link to="/register" style={{ textDecoration: 'none' }}>
            Create new account?
          </Link>{' '}
        </p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignIn;
