import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import mango from '../../Assets/Images/mango.jpeg'
import { Link } from 'react-router-dom';
import _fetch from '../../config/api';
import { api_url } from '../../config/config';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container, Row, Col } from 'react-bootstrap';
import tamatoImg from '../../Assets/Images/Cherry-Tomato_grande.webp';

const AddtoCart = () => {
    const [counter, setCounter] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [allData, setAllData] = useState([]);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleDecrement = () => {
        // Ensure the counter doesn't go below zero
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10) || 1;
        setQuantity(newQuantity);
    };

    const totalPrice = counter * quantity;

    useEffect(() => {
        getproductsData();
    }, []);

    const getproductsData = async () => {
        let res = await _fetch(`${api_url}product/getproducts`, 'GET', {}, {});
        if (res?.status === 'success') {
            setAllData(res?.data);
        }
    }

    return (

        <>
            {/* <div className='cart'>
                <div className='head-section'>
                    <div className='coustom_container'>
                        <div className='cart-home'>
                            <h3>Cart</h3>
                            <p><Link>Home</Link><span>/</span>Cart</p>
                        </div>
                    </div>
                </div>

                <div className='coustom_container'>
                    <div className='table-section'>
                        <div className='table-main-div'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Price</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {allData?.map((item) => {
                                        return (
                                            <>

                                                <tr>

                                                    <td>
                                                        <Link to="/" className='product'>
                                                            {/* <img src={mango} /> */}
            {/* <p>{item?.title}</p>
                                                        </Link>
                                                    </td>

                                                    <td>${item?.price}</td>
                                                </tr>
                                            </>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div> */}

            {/* <div className="available-card-sec">
                <Container>
                    <div className="cart-prouct-sec">
                        <table>
                            <thead>
                                <tr>
                                    <th>Prodcut</th>
                                    <th>Unit Price </th>
                                    <th>Comfirm </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        tamato
                                    </td>
                                    <td> 12 / kg </td>
                                    <td> <button> Buy Now </button> </td>
                                </tr>

                            </tbody>

                        </table>
                    </div>
                </Container>
            </div> */}

          <div className='available-card-sec'>
          <div className="container my-4">
                <div className="table-responsive">
                    <table className="table table-custom">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Unit price</th>
                                <th scope="col">Confirm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={tamatoImg}
                                            className="img-fluid rounded-circle me-2 product-img"
                                            alt="Product"
                                        />
                                        <span>Tamato</span>
                                    </div>
                                </td>
                                <td>$30</td>
                                <td>
                                    <button className="btn btn-buy">Buy Now</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={tamatoImg}
                                            className="img-fluid rounded-circle me-2 product-img"
                                            alt="Product"
                                        />
                                        <span>Tamato</span>
                                    </div>
                                </td>
                                <td>$30</td>
                                <td>
                                    <button className="btn btn-buy">Buy Now</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={tamatoImg}
                                            className="img-fluid rounded-circle me-2 product-img"
                                            alt="Product"
                                        />
                                        <span>Tamato</span>
                                    </div>
                                </td>
                                <td>$30</td>
                                <td>
                                    <button className="btn btn-buy">Buy Now</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={tamatoImg}
                                            className="img-fluid rounded-circle me-2 product-img"
                                            alt="Product"
                                        />
                                        <span>Tamato</span>
                                    </div>
                                </td>
                                <td>$30</td>
                                <td>
                                    <button className="btn btn-buy">Buy Now</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={tamatoImg}
                                            className="img-fluid rounded-circle me-2 product-img"
                                            alt="Product"
                                        />
                                        <span>Tamato</span>
                                    </div>
                                </td>
                                <td>$30</td>
                                <td>
                                    <button className="btn btn-buy">Buy Now</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={tamatoImg}
                                            className="img-fluid rounded-circle me-2 product-img"
                                            alt="Product"
                                        />
                                        <span>Tamato</span>
                                    </div>
                                </td>
                                <td>$30</td>
                                <td>
                                    <button className="btn btn-buy">Buy Now</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

          </div>
   

            <div className="main-cart">
                <Container>
                    <Row>
                        <div className="fav-icon-sec">
                            <div className="fav-icon">
                                <ShoppingCartIcon className='f-icon' />
                            </div>
                            <div className="fav-icon-heading">
                                <h3> No items found in Cart.</h3>
                            </div>

                        </div>
                        <div className="back-home">
                            <Link to="/" className='back-to-home '>  <KeyboardBackspaceIcon /> Continue Shoping </Link>
                        </div>
                    </Row>
                </Container>

            </div>
        </>


    )
}

export default AddtoCart