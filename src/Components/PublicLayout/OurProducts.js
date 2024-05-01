import React, { useEffect, useState, useContext } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom'
import _fetch from '../../config/api';
import { api_url } from '../../config/config';
import toasted from '../../config/toast';
import 'react-awesome-slider/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const OurProducts = () => {
    const Navigate = useNavigate();

    const [allData, setAllData] = useState([]);
    const [disable, setDisable] = useState(false);
    const [search, setSearch] = useState('');

    // const { transcriptValue } = useContext(speechContext);

    useEffect(() => {
        productsData();
    }, []);

    const productsData = async () => {
       let res = await _fetch(`${api_url}product/products`, 'GET', {}, {});
        if (res?.status === 'success') {
            setAllData(res?.data);
        }
        else {
            Navigate('/login');
        }
    }

    const AddtoCart = async(item) => {
        let data = {
            'title' : item?.title,
            'price' : item?.price
        }
        let res = await _fetch(`${api_url}product/addtocart`, 'POST', data, {});
        if (res?.status === 'success') {
            toasted.success(res?.message);
      
          } else {
            toasted.error(res?.message);
          }
    }
    return (
        <>
            <div className='our-product'>
                <div className='coustom_container'>
                    {/* <h3 className='popular-product'>Popular Products</h3>
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />      eiusmod tempor incididunt ut labore lacus vel facilisis.</p> */}

                    <Tabs>
                        <TabList>
                            <Tab>Products</Tab>

                        </TabList>

                        {/* All cards tabpanel */}

                        <TabPanel>
                            <div className='first-panel'>

                                <Swiper
                                    effect={'coverflow'}
                                    grabCursor={true}
                                    loop={true}
                                    centeredSlides={true}
                                    slidesPerView={'auto'}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={true}
                                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                                    className="mySwiper"
                                >
                                    {allData?.map((item, index) => (
                                        <>
                                            <SwiperSlide>
                                                <div className='first-card'>
                                                    <div className='image-div'>
                                                        <img src={`data:image/png;base64, ${item?.image}`} />
                                                        <p className='new-badge'>New</p>
                                                        <div className='add-cart-div'>

                                                            <button className='add-cart' onClick={() => AddtoCart(item)}>
                                                                <ShoppingCartIcon />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className='title'>{item?.title}</p>
                                                    <h3 className='mrp'>{item?.price ? `$${item?.price}` : ''} </h3>
                                                </div>
                                            </SwiperSlide>
                                        </>
                                    ))}
                                </Swiper>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div >
        </>
    )
}

export default OurProducts