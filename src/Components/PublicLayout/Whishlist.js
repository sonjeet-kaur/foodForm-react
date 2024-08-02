import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Container , Row , Col } from 'react-bootstrap';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';




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

        </>
    )
}

export default Whishlist
