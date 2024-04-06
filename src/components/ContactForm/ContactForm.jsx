import React from 'react';
import SectionsTitle from '../SectionsTitle/SectionsTitle';
import { FaSuperscript } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <section className='md:w-10/12 mx-auto'>
            <SectionsTitle heading={'contact form'} subHeading={'Send Us a Message'} ></SectionsTitle>


            <div className="hero min-h-screen">
                <div className="card w-full shadow-2xl bg-base-200 rounded-none">
                    <form className="card-body">
                        <div className='grid md:grid-cols-2 md:gap-7'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name*</span>
                                </label>

                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email*</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone*</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message*</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className=" mx-auto mt-6 ">
                            <input className="btn btn-sm rounded-none bg-yellow-600 border-none btn-w-sm btn-primary hover:bg-gray-400 text-white" type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default ContactForm;