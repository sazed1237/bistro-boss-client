import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaInbox, FaList, FaListAlt, FaMailBulk, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
import DashboardHead from '../components/DashboardHead/DashboardHead';

const Dashboard = () => {

    const [cart] = useCart()

    const [isAdmin] = useAdmin();
    // console.log(isAdmin)

    // const isAdmin = false;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Page content here */}
                {/* Dashboard content */}
                <DashboardHead></DashboardHead>
                <div className='flex-1 md:px-8 bg-base-200 '>
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet></Outlet>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
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

                                        <li><NavLink to={'/dashboard/AddReview'}>
                                            <FaAd></FaAd>
                                            ADD Review
                                        </NavLink></li>

                                        <li><NavLink to={'/dashboard/myBookings'}>
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

                </div>

            </div>
        </div>
    );
};

export default Dashboard;

