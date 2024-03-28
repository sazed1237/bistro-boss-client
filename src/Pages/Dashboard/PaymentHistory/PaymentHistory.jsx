import React from 'react';
import DashboardTitle from '../../Shared/DashboardTitle/DashboardTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from 'react-query';

const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()


    const { data: payments = [], isLoading, refetch } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            console.log(res.data)
            return res.data;
        }

    })

    return (
        <div>
            <DashboardTitle heading={'Payment History'} subHeading={'All Payments'} ></DashboardTitle>

            <div className='bg-base-100 px-3 py-5'>
                <h2 className='text-2xl py-2 font-semibold'>Total Payment: {payments.length} </h2>

                {/* cart table  */}
                <div className="overflow-x-auto mb-7">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='uppercase text-white bg-[#D1A054]'>
                                <th>#</th>
                                <th>Email</th>
                                <th>Transaction Id</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th>Payment Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((payment, index) => <tr key={payment._id}>
                                    <td className='font-bold'>{index + 1}</td>
                                    <td className='text-gray-500'>{payment.email}</td>
                                    <td className='text-gray-500 font-semibold'>{payment.transactionId}</td>
                                    <td className='text-gray-500 font-semibold'>{payment.price}</td>
                                    <td className='text-gray-500 font-semibold'>{payment.status}</td>
                                    <td className='text-gray-500 font-semibold'>{payment.date}</td>


                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;