import React from 'react';
import DashboardTitle from '../../Shared/DashboardTitle/DashboardTitle';

const Reservation = () => {
    return (
        <div className='min-h-screen  pt-5 '>
            <div className='bg-base-100 pt-2'>
                <DashboardTitle heading={'Book Your Visit'} subHeading={'visit Us'}></DashboardTitle>
                <div className="hero">
                    <div className="card shrink-0 w-full max-w-xl">
                        <form className="card-body">

                            <div className='grid md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <input type="text" placeholder="First Name" className="input input-bordered text-black  " required />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Last Name" className="input input-bordered text-black  " required />
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 gap-5'>
                                <div className="form-control">
                                    <input type="email" placeholder="Email Address" className="input input-bordered text-black  " required />
                                </div>
                                <div className="form-control">
                                    <input type="number" placeholder="Mobile Number" className="input input-bordered text-black  " required />
                                </div>
                            </div>
                            <div>
                                <textarea className="textarea textarea-bordered w-full textarea-lg" placeholder="Your Message"></textarea>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button className='btn btn-md px-5 bg-yellow-600 hover:bg-yellow-500 text-white' >Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;