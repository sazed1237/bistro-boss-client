import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionsTitle from '../../../components/SectionsTitle/SectionsTitle';

const Category = () => {
    return (
        <section className='md:w-10/12 mx-auto'>

            <SectionsTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionsTitle>

            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='pb-16 -mt-16 uppercase text-white font-thin text-center text-3xl'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='pb-16 -mt-16 uppercase text-white font-thin text-center text-3xl'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='pb-16 -mt-16 uppercase text-white font-thin text-center text-3xl'>soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='pb-16 -mt-16 uppercase text-white font-thin text-center text-3xl'>desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='pb-16 -mt-16 uppercase text-white font-thin text-center text-3xl'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='pb-16 -mt-16 uppercase text-white font-thin text-center text-3xl'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='pb-16 -mt-16 uppercase text-white font-thin text-center text-3xl'>salads</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;