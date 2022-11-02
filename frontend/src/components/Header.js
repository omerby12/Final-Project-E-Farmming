import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.navbar}>
      <Navbar
        className={classes.navbar}
        variant='dark'
        expand='lg'
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href='#home'>E-Farming</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'> </i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
