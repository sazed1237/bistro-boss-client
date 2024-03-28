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
        <div className='w-10/12 mx-auto my-14'>
            <SectionsTitle
                heading={"Testimonial"}
                subHeading={"What Our Client Say"}
            ></SectionsTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className='mx-20 flex flex-col items-center text-center'>
                            <div >
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                            <img className='w-[80px] my-5 ' src={leftQuote} alt="" />
                            <p>{review.details}</p>
                            <h3 className='text-2xl text-orange-400  mt-2'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonial;