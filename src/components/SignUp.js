import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import { Link } from 'react-router-dom';

const SingUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);

  const handlerSubmit = e => {
    e.preventDefault();
    password !== confirmPassword
      ? console.log(true)
      : dispatch(register(name, email, password));
  };

  return (
    <>
      <h4 className="mt-3">Create Account</h4>
      <Form onSubmit={handlerSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <p>
          Already have a account.{' '}
          <Link to="/login" style={{ textDecoration: 'none' }}>
            Sign In
          </Link>{' '}
        </p>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};

export default SingUp;
