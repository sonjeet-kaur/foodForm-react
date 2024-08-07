import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Container , Row , Col } from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import tamatoImg from '../../Assets/Images/Cherry-Tomato_grande.webp';




function Whishlist() {
    return (
        <>
            <div className="main-cart">
                <Container>
                    <Row>
                        <div className="fav-icon-sec">
                            <div className="fav-icon">
                                <FavoriteBorderIcon className='f-icon' />
                            </div>
                            <div className="fav-icon-heading">
                                <h3> No items found in Whislist.</h3>
                            </div>

                        </div>
                        <div className="back-home">
                            <button className='back-to-home'>  <KeyboardBackspaceIcon /> Continue Shoping </button>
                        </div>
                    </Row>
                </Container>

            </div>

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
                                    <button className="btn btn-buy">Add To Cart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

          </div>

        </>
    )
}

export default Whishlist
