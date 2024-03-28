import React from 'react';
import SectionsTitle from '../SectionsTitle/SectionsTitle';
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactCart = () => {
    return (
        <section className='w-10/12 mx-auto'>
            <SectionsTitle heading={"Our Location"} subHeading={"Visit Us"}></SectionsTitle>

            <div className='grid md:grid-cols-3 gap-7 mb-12'>

                <div className="card  border rounded-none pb-7">
                    <div className='bg-yellow-500 w-full '>
                        <FaPhone className='mx-auto my-2 text-white text-xl'></FaPhone>
                    </div>
                    <div className="card-body  w-5/6 bg-base-200 mx-auto items-center text-center">
                        <h2 className="card-title uppercase">Phone</h2>
                        <p>+8801000000000000</p>

                    </div>
                </div>

                <div className="card  border rounded-none pb-7">
                    <div className='bg-yellow-500 w-full '>
                        <FaMapMarkerAlt className='mx-auto my-2 text-white text-xl'></FaMapMarkerAlt >
                    </div>
                    <div className="card-body  w-5/6 bg-base-200 mx-auto items-center text-center">
                        <h2 className="card-title uppercase">Address</h2>
                        <p>Dhaka, Bangladesh</p>

                    </div>
                </div>

                <div className="card  border rounded-none pb-7">
                    <div className='bg-yellow-500 w-full '>
                        <FaClock className='mx-auto my-2 text-white text-xl'></FaClock >
                    </div>
                    <div className="card-body  w-5/6 bg-base-200 mx-auto items-center text-center">
                        <h2 className="card-title uppercase">working hours</h2>
                        <p>Mon - Fri: 08:00 - 22:00 <br />
                            Sat - Sun: 10:00 - 23:00</p>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactCart;