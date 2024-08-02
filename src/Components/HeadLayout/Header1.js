
import React, { useEffect, useState } from "react";
import { Menu } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Accordion, Dropdown } from "react-bootstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseIcon from '@mui/icons-material/Close';
import apple from '../../Assets/Images/apple.png';
import _fetch from "../../config/api";
import { api_url } from "../../config/config";
import 'react-responsive-modal/styles.css';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';

const Header1 = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open2, setonOpenModal2] = useState(false);
  const onOpenModal2 = () => setonOpenModal2(true);
  const onCloseModal2 = () => setonOpenModal2(false);
  const [allData, setAllData] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (location.pathname === "/contact") {
      document.body.setAttribute("contact-attribute", "true");
    } else {
      document.body.removeAttribute("contact-attribute");
    }

    if (location.pathname === "/team") {
      document.body.setAttribute("team-attribute", "true");
    } else {
      document.body.removeAttribute("team-attribute");
    }

    if (location.pathname === "/blog") {
      document.body.setAttribute("blog-attribute", "true");
    } else {
      document.body.removeAttribute("blog-attribute");
    }

    if (location.pathname === "/services") {
      document.body.setAttribute("service-attribute", "true");
    } else {
      document.body.removeAttribute("service-attribute");
    }

    if (location.pathname === "/wordpress") {
      document.body.setAttribute("wordpress-attribute", "true");
    } else {
      document.body.removeAttribute("wordpress-attribute");
    }

    if (location.pathname === "/email-hosting") {
      document.body.setAttribute("emailhosting-attribute", "true");
    } else {
      document.body.removeAttribute("emailhosting-attribute");
    }
  }, [location.pathname]);

  useEffect(() => {
    const headerScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY >= 645) {
        document.body.setAttribute("header-attribute", "true");
      } else {
        document.body.removeAttribute("header-attribute");
      }
    };

    window.addEventListener("scroll", headerScroll);

    return () => {
      window.removeEventListener("scroll", headerScroll);
    };
  }, []);

  const checkAuth = async () => {
    let res = await _fetch(`${api_url}product/products`, 'GET', {}, {});
    if (res?.status === 'success') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }

  useEffect(() => {
    checkAuth();
    getproductsData();
  }, []);

  const getproductsData = async () => {
    let res = await _fetch(`${api_url}product/getproducts`, 'GET', {}, {});
    if (res?.status === 'success') {
      setAllData(res?.data);
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
    Navigate('/login');
  }

  return (
    <>
      <div className="top-header">
        <div className="container-layout">
          <div className="left-t-header">
          </div>
        </div>
      </div>

      <header>
        <div className="container-layout">
          <div className="left-header">
            <Link to="/" className="navbar-logo">E-Commerce</Link>
            <button onClick={onOpenModal2} type="button" className="btn toggle-button"><Menu /></button>
          </div>
          <div className="right-header">
            <ul className="nav ">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/all-products" className="nav-link">All Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">Shop</Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/cart" className="nav-link">Cart</Link>
              </li> */}
              {/* <li className="nav-item">
                {isAuthenticated ? (
                  <a href="#" onClick={handleLogout} className="nav-link">Logout</a>
                ) : (
                  <Link to="/login" className="nav-link">Login</Link>
                )}
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">Search</Link>
              </li> */}
            </ul>
          </div>
          <div className="navs-icons">
            <div className="search-input">
              <input type="search" placeholder="Search" />
              <SearchIcon className="search-icon" />
            </div>

            <div className="center-header d-flex">
              <div className="whistlist-icon">
                <FavoriteBorderIcon />
              </div>

              <Link to="/cart"><ShoppingCartIcon /></Link>
              {/* <div className="logout-button">
                <LogoutIcon className="log-out-btn" />
              </div> */}
              <span>{allData?.length}</span>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="cart-body">
                    <div className="add-cart-product">
                      <div className="first-product">
                        <div className="image-apple">
                          <img src={apple} alt="apple" />
                          <CloseIcon className="closs-icon" />
                        </div>
                        <div className="title-div">
                          <h5>Red Hot Tomato</h5>
                          <p> 1 X $65.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Offcanvas.Body>
                <div className="off-canvas-footer">
                  <div className="sub-total">
                    <h4>Subtotal:</h4>
                    <p>$310.00</p>
                  </div>
                </div>
              </Offcanvas>
            </div>
          </div>
        </div>
      </header>

      <Modal open={open2} onClose={onCloseModal2}
        classNames={{
          modal: "new_modal_sidebar",
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
        }}>
        <div className="phone-view-header">
          <p>More Services</p>
          <ul className="nav flex-column">
            <Accordion defaultActiveKey="0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/all-products" className="nav-link">All Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">Shop</Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">Cart</Link>
              </li>
              <li className="nav-item">
                {isAuthenticated ? (
                  <a href="#" onClick={handleLogout} className="nav-link">Logout</a>
                ) : (
                  <Link to="/login" className="nav-link">Login</Link>
                )}
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">Search</Link>
              </li>
            </Accordion>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default Header1;




