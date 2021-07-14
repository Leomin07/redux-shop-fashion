import React, { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BiCartAlt } from 'react-icons/bi';
import { Badge } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { listCarts } from '../actions/cartsActions';
import Search from './Search';

const Header = () => {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.cartItems);
  useEffect(() => {
    dispatch(listCarts());
  }, [dispatch]);
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SHOP FASHION</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {/* <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer> */}
            </Nav>
            <Nav className="ml-auto pt-1">
              <Search />
              <LinkContainer to="/cart">
                <Nav.Link>
                  <Badge badgeContent={carts.length} color="secondary">
                    <BiCartAlt size="2em" />
                  </Badge>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/order/history">
                <Nav.Link>
                  <span>List Order</span>
                  {/* <div className="dropdown">
                  <Link
                    to="/login"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <span>Sign in</span>
                  </Link>
                  <ul className="dropdown-content">
                    <li>Order</li>
                    <li>Sign out</li>
                  </ul>
                </div> */}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
