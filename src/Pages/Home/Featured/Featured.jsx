import React from 'react';
import SectionsTitle from '../../../components/SectionsTitle/SectionsTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <section className='feature-items bg-fixed '>
            <div className='bg-black bg-opacity-65 mb-12 pt-16 text-white '>
                <SectionsTitle
                    heading="Frm our menu"
                    subHeading="Check it Out"
                ></SectionsTitle>

                <div className='w-10/12 mx-auto  md:flex items-center justify-center pb-20  text-white'>
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>

                    <div className='md:ml-14'>
                        <h1>March 20, 2023 <br /> WHERE CAN I GET SOME?</h1>
                        <p> <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima velit deserunt iusto ducimus architecto voluptas, adipisci magni nisi placeat vel ullam id totam ea maxime dolorem saepe quod in qui tempora ad reprehenderit cumque nemo similique. Optio ducimus aperiam tenetur sapiente laudantium voluptatem, eveniet culpa commodi, saepe hic illum.</small></p>
                        <Link to={'/order/salads'}>
                            <button className="btn text-white btn-outline border-0 border-b-4 btn-sm mt-4 ">Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;