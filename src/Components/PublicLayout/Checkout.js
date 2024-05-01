import React from 'react'
import { Col, Row } from "react-bootstrap";
import valuepouch from '../../Assets/Images/10.jpg';
import StarIcon from '@mui/icons-material/Star';
import cardimg from '../../Assets/Images/paymentall1.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const Checkout = () => {
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');

    const selectCountry = (val) => {
        setCountry(val);
    };

    const selectRegion = (val) => {
        setRegion(val);
    };

    return (
        <section className='checkout-section'>
            <div className='coustom_container'>
                <Row>
                    <Col lg={12}>
                        <div className='check-upper'>
                            <h2>Billing Details </h2>
                        </div>

                    </Col>
                    <Col xl={4} lg={4}>
                        <div className='check-summary'>
                            <h4>Summary</h4>
                            <div className='check-sum-content'>
                                <div className='check-sub-total'>
                                    <span>Sub-Total</span>
                                    <span>$</span>
                                </div>
                                <div className='delivery-charge'>
                                    <span>Delivery Charges</span>
                                    <span>$</span>
                                </div>
                                <div className='total-amt'>
                                    <b>Total Amount</b>
                                    <b>$</b>
                                </div>
                            </div>
                            <div className='checkout-product'>
                                <div className='product-inner'>
                                    <div className='product-pic'>
                                        <img src={valuepouch} alt='pouch' />
                                    </div>
                                    <div className='product-pic-detail'>
                                        <h6>Dates Value Pack Pouch</h6>
                                        <div className='product-rating'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        <span>$</span>
                                    </div>
                                </div>
                                <div className='product-inner'>
                                    <div className='product-pic'>
                                        <img src={valuepouch} alt='pouch' />
                                    </div>
                                    <div className='product-pic-detail'>
                                        <h6>Smoked Honey Spiced Nuts</h6>
                                        <div className='product-rating'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        <span>$</span>
                                    </div>
                                </div>
                                <div className='product-inner'>
                                    <div className='product-pic'>
                                        <img src={valuepouch} alt='pouch' />
                                    </div>
                                    <div className='product-pic-detail'>
                                        <h6>Dates Value Pack Pouch</h6>
                                        <div className='product-rating'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        <span>$</span>
                                    </div>
                                </div>
                                <div className='product-inner'>
                                    <div className='product-pic'>
                                        <img src={valuepouch} alt='pouch' />
                                    </div>
                                    <div className='product-pic-detail'>
                                        <h6>Smoked Honey Spiced Nuts</h6>
                                        <div className='product-rating'>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                        <span>$</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xl={8} lg={8}>
                        <div className='returning'>
                            <div className='return-inner'>
                                <h4>Billing Details</h4>
                                <form>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <lable>First Name</lable>
                                                <input type='text' className='form-control' placeholder='Enter your first name' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <lable>Last Name</lable>
                                                <input type='text' className='form-control' placeholder='Enter your last name' />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className='form-email'>
                                                <label>Address</label>
                                                <input type='text' className='form-control' placeholder='Enter your address' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <label>City</label>
                                                <input type='text' className='form-control' placeholder='Enter your city' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <label>Post Code</label>
                                                <input type='number' className='form-control' placeholder='Post code' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <label>Country</label>
                                                <div>
                                                    <CountryDropdown
                                                        value={country}
                                                        onChange={(val) => selectCountry(val)} className='form-control' />

                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='form-email'>
                                                <label>State</label>
                                                <div>
                                                    <RegionDropdown
                                                        country={country}
                                                        value={region}
                                                        onChange={(val) => selectRegion(val)} className='form-control' />
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={4} md={6}>
                        <div className='delivery-methods'>
                            <h4>Delivery Method</h4>
                            <p>Please select the preferred shipping method to use on this order.</p>
                            <div className='ratio-mark'>
                                <div className='fre-ship'>
                                    <span>Free Shipping</span>
                                    <span className='ship-radio'>
                                        <input type='radio' name="fav_language" className='in-radio' />
                                        <label>Rate - $</label>
                                    </span>
                                </div>
                                <div className='flat-rates'>
                                    <span>Flat Rate</span>
                                    <span className='ship-radio'>
                                        <input type='radio' name="fav_language" className='in-radio' />
                                        <label>Rate - $</label>
                                    </span>
                                </div>
                            </div>
                            <div className='un-commt'>
                                <span>Add Comments About Your Order</span>
                                <textarea name='your-comment' placeholder='Comment'></textarea>
                            </div>
                        </div>
                    </Col>
                    <Col xl={8} lg={8} md={6}>
                        <div className='payment-method'>
                            <h4>Payment Method</h4>
                            <p>Please select the preferred payment method to use on this order.</p>
                            <div className='pay-method'>
                                <span className='cash-on'>
                                    <input type='radio' name="fav_language" className='in-radio' />
                                    <label>Cash On Delivery</label>
                                </span>
                                <span className='cash-on'>
                                    <input type='radio' name="fav_language" className='in-radio' />
                                    <label>UPI</label>
                                </span>
                                <span className='cash-on'>
                                    <input type='radio' name="fav_language" className='in-radio' />
                                    <label>Bank Transfer</label>
                                </span>
                            </div>
                            <div className='pic-card'>
                                <img src={cardimg} alt='card' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className='checkin-buttons'>
                            <Link to='#'>Place Order</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Checkout;