import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import mango from '../../Assets/Images/mango.jpeg'
import { Link } from 'react-router-dom';
import _fetch from '../../config/api';
import { api_url } from '../../config/config';

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
        <div className='cart'>
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
                                    return(
                                        <>
                                   
                                    <tr>

                                        <td>
                                            <Link to="/" className='product'>
                                                {/* <img src={mango} /> */}
                                                <p>{item?.title}</p>
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
                {/* <div className='submit-btn'>
                    <Link to="/checkout">Buy Now</Link>
                </div> */}
            </div>

        </div>
    )
}

export default AddtoCart