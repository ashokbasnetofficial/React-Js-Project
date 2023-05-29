import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
const NavBars = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">React-Router</Navbar.Brand>
      <Nav className="me-auto">
         <Nav.Link ><NavLink className='text-decoration-none text-white' to='/'>Home</NavLink></Nav.Link>
         <Nav.Link><NavLink className='text-decoration-none text-white' to='/featuresproducts'>FeaturesProduct</NavLink></Nav.Link>
         <Nav.Link ><NavLink className='text-decoration-none text-white' to='/newproducts'>New Products</NavLink></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBars