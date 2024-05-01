import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {
   
    return (
        <div className='header'>
            <Navbar expand="lg" className="">
                <Container fluid>
                    <Navbar.Brand href="#">E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                             navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Category</Nav.Link>
                            <div class="dropdown product-dropdown">
                                <button class="dropbtn">Products <KeyboardArrowDownIcon/> </button>
                                <div class="dropdown-content">
                                    <Link to="#">Vegitables</Link>
                                    <Link to="#">Fruits</Link>
                                    <Link to="#">Crocery</Link>
                                </div>
                            </div>
                            <Nav.Link href="#"  >
                                Pages
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex align-items-center wishlist">

                        <div class="dropdown dropdown-login">
                                <button class="dropbtn"><PersonOutlineIcon/> Account  </button>
                                <div class="dropdown-content">
                                    <Link to="#">Login</Link>
                                    <Link to="#">Register</Link>
                                </div>
                            </div>

                            <Link to="#" className='wish-link'>
                                <FavoriteBorderIcon />
                                Wishlist
                            </Link>
                            <button >
                                <ShoppingCartIcon />
                                Cart
                            </button>

              
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header