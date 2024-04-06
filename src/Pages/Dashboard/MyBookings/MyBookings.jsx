import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import DashboardTitle from '../../Shared/DashboardTitle/DashboardTitle';
import { useQuery } from 'react-query';


const MyBookings = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()

    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['myBookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings/${user?.email}`)
            refetch()
            return res.data;
        }

    })

    return (
        <div>
            <DashboardTitle heading={'My All Bookings'}  ></DashboardTitle>

            <div className='bg-base-100 px-3 py-5 md:w-11/12 mx-auto'>
                <h2 className='text-2xl py-2 font-semibold'>Total bookings: {bookings.length} </h2>

                {/* cart table  */}
                <div className="overflow-x-auto mb-7">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='uppercase text-white bg-[#D1A054]'>
                                <th>#</th>
                                <th>Service</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>TransactionId</th>
                                <th>date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((book, index) => <tr key={book._id}>
                                    <td className='font-bold'>{index + 1}</td>
                                    <td className='text-gray-500'>{book.service_name}</td>
                                    <td className='text-gray-500 font-semibold'>{book.email}</td>
                                    <td className='text-gray-500 font-semibold'>${book.price}</td>
                                    <td className='text-gray-500 font-semibold'>{book.transactionId}</td>
                                    <td className='text-gray-500 font-semibold'>{book.date}</td>
                                    <td className='text-yellow-500 font-semibold'>{book.status}</td>


                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;