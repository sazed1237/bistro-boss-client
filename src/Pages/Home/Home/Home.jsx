import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBoss from '../BistroBoss/BistroBoss';
import PopulerMenu from '../PopulerMenu/PopulerMenu';
import ChefRecommend from '../ChefRecommend/ChefRecommend';
import ContactNumber from '../../../components/ContactNumber/ContactNumber';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <BistroBoss></BistroBoss>
            <PopulerMenu></PopulerMenu>
            <ContactNumber></ContactNumber>
            <ChefRecommend></ChefRecommend>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;