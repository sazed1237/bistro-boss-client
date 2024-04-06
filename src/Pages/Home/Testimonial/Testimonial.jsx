import React, { useEffect, useState } from 'react';
import SectionsTitle from '../../../components/SectionsTitle/SectionsTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import leftQuote from '../../../assets/home/left-quote.svg';

const Testimonial = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://bistro-boss-server-iota-nine.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='md:w-10/12 mx-auto my-14'>
            <SectionsTitle
                heading={"Testimonial"}
                subHeading={"What Our Client Say"}
            ></SectionsTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='md:mx-20 mx-10 flex flex-col items-center text-center'>
                            <div >
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                            <img className='md:w-[80px] w-14 my-5 ' src={leftQuote} alt="" />
                            <p className='text-sm md:text-md'>{review.details}</p>
                            <h3 className='md:text-2xl text-xl text-orange-400  mt-2'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonial;