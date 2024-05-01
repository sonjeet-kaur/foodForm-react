import React, { useEffect, useState, useContext } from "react";
import { Menu } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Accordion, Dropdown } from "react-bootstrap";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Offcanvas from 'react-bootstrap/Offcanvas';
import apple from '../../Assets/Images/apple.png'
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import _fetch from "../../config/api";
import { api_url } from "../../config/config";
import SearchIcon from '@mui/icons-material/Search';
import 'react-responsive-modal/styles.css';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const Header1 = () => {

  const Navigate = useNavigate();
  const location = useLocation();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   responsive sidebar modal states
  const [open2, setonOpenModal2] = useState(false);

  const onOpenModal2 = () => setonOpenModal2(true);
  const onCloseModal2 = () => setonOpenModal2(false);
  const [allData, setAllData] = useState();

  useEffect(() => {

    // this code contact page header work ..
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
    // checkAuth();
  }, [location.pathname]);

  // const checkAuth = async () => {
  //   let res = await _fetch(`${api_url}products/`, 'GET', {}, {});
  //   if (res?.status === 200) {
  //   }
  //   else {
  //     Navigate('/login');
  //   }
  // }

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
    }
    else {
        Navigate('/login');
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
  const HeaderData = [
    {
      LinkUrl: '/',
      dropdown: null
    },
  ];


  return (
    <>
      <div className="top-header">
        <div className="container-layout">
          {/* left top header section  */}

          <div className="left-t-header">

          </div>

          {/* right top header section */}

        </div>
      </div>

      {/* header work start.... */}

      <header>
        <div className="container-layout">
          <div className="left-header">
            <Link to="/" className="navbar-logo">
              E-Commerce
            </Link>


            <button onClick={onOpenModal2} type="button" className="btn toggle-button"><Menu /></button>
          </div>

          <div className="right-header">
            <ul className="nav align-items-center">

              {HeaderData.map((item, index) => (


                <li className="nav-item" key={index}>
                  {item.dropdown == null && <Link to={item.LinkUrl} className="nav-link">{item.LinkName} </Link>}

                  {item.dropdown && (
                    <ul className="p-0">
                      <Dropdown>
                        <Dropdown.Toggle className="bg-transparent border-0 text-black nav-link" id="dropdown-basic">
                          {item.LinkName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {item.dropdown.map((subItem) => (
                            <Link key={subItem.dropLinkName} className="dropdown-item" to={subItem.dropLinkUrl}>{subItem.dropLinkName} </Link>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="navs-icons">
            <div className="center-header">

              <Link to="/cart" ><ShoppingCartIcon /></Link>
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
                          <img src={apple} />
                          <CloseIcon className="closs-icon" />

                        </div>
                        <div className="title-div">
                          <h5>Red Hot Tomato</h5>
                          <p> 1 X $65.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="add-cart-product">
                      <div className="first-product">
                        <div className="image-apple">
                          <img src={apple} />
                          <CloseIcon className="closs-icon" />

                        </div>
                        <div className="title-div">
                          <h5>Red Hot Tomato</h5>
                          <p> 1 X $65.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="add-cart-product">
                      <div className="first-product">
                        <div className="image-apple">
                          <img src={apple} />
                          <CloseIcon className="closs-icon" />

                        </div>
                        <div className="title-div">
                          <h5>Red Hot Tomato</h5>
                          <p> 1 X $65.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="add-cart-product">
                      <div className="first-product">
                        <div className="image-apple">
                          <img src={apple} />
                          <CloseIcon className="closs-icon" />

                        </div>
                        <div className="title-div">
                          <h5>Red Hot Tomato</h5>
                          <p> 1 X $65.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="add-cart-product">
                      <div className="first-product">
                        <div className="image-apple">
                          <img src={apple} />
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

                  {/* <div className="view-cart-btn">
                    <Link to="/cart" >VIEW CART</Link>

                  </div> */}
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

              {HeaderData.map((item, index) => (

                <li className="nav-item" key={index}>
                  {item.dropdown == null && <Link to={item?.LinkUrl} className="nav-link">{item.LinkName} </Link>}

                  {item.dropdown && (
                    <ul className="p-0">

                      <Accordion.Item eventKey="">
                        <Accordion.Header> <span>{item.LinkName} </span> </Accordion.Header>
                        <Accordion.Body>
                          <ul className="p-0">
                            {item.dropdown.map((subItem) => (
                              <Link className="nav-link" key={subItem.dropLinkName} to={subItem.dropLinkUrl}>- {subItem.dropLinkName}</Link>
                            ))}
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </ul>
                  )}
                </li>
              ))}
            </Accordion>
          </ul>
        </div>
      </Modal>

    </>
  );
};

export default Header1;
