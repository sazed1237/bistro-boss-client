import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaInbox, FaList, FaListAlt, FaMailBulk, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {

    const [cart] = useCart()

    const [isAdmin] = useAdmin();
    // console.log(isAdmin)

    // const isAdmin = false;

    return (
        <div className='flex'>
            {/* Dashboard side bar */}
            <div className='w-64 min-h-screen bg-[#D1A054]'>
                <div className='text-center pt-3 pb-8 text-4xl font-bold'>
                    <h1>Bistro Boss <br /> <span className='font-light '>Restaurant</span></h1>
                </div>
                <ul className='menu uppercase'>
                    { 
                        isAdmin ? <>
                            <li><NavLink to={'/dashboard/adminHome'}>
                                <FaHome></FaHome>
                                Admin Home
                            </NavLink></li>

                            <li><NavLink to={'/dashboard/addItems'}>
                                <FaUtensils></FaUtensils>
                                add items
                            </NavLink></li>

                            <li><NavLink to={'/dashboard/manageItems'}>
                                <FaList></FaList>
                                manage Items
                            </NavLink></li>

                            <li><NavLink to={'/dashboard/bookings'}>
                                <FaBook></FaBook>
                                Manage Bookings
                            </NavLink></li>


                            <li><NavLink to={'/dashboard/users'}>
                                <FaUsers></FaUsers>
                                All Users
                            </NavLink></li>


                        </>
                            :
                            <>
                                <li><NavLink to={'/dashboard/UserHome'}>
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink></li>

                                <li><NavLink to={'/dashboard/reservation'}>
                                    <FaCalendar></FaCalendar>
                                    Reservation
                                </NavLink></li>

                                <li><NavLink to={'/dashboard/cart'}>
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart ({cart.length})
                                </NavLink></li>

                                <li><NavLink to={'/dashboard/paymentHistory'}>
                                    <FaWallet></FaWallet>
                                    PAYMENT HISTORY
                                </NavLink></li>

                                <li><NavLink to={'/dashboard/review'}>
                                    <FaAd></FaAd>
                                    ADD Review
                                </NavLink></li>

                                <li><NavLink to={'/dashboard/myBooking'}>
                                    <FaList></FaList>
                                    my booking
                                </NavLink></li>
                            </>
                    }

                    {/* divider Dashboard content and Main content */}

                    <div className="divider "></div>

                    <li><NavLink to={'/'}>
                        <FaHome></FaHome>
                        Home
                    </NavLink></li>

                    <li><NavLink to={'/menu'}>
                        <FaListAlt></FaListAlt>
                        Menu
                    </NavLink></li>

                    <li><NavLink to={'/order/salads'}>
                        <FaShoppingBag></FaShoppingBag>
                        Shop
                    </NavLink></li>

                    <li><NavLink to={'/contact'}>
                        <FaEnvelope></FaEnvelope>
                        Contact
                    </NavLink></li>


                </ul>
            </div>
            {/* Dashboard content */}
            <div className='flex-1 px-8 bg-base-200 '>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;