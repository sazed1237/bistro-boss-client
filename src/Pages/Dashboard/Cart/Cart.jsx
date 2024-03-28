import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import DashboardTitle from '../../Shared/DashboardTitle/DashboardTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Cart = () => {

    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure()

    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2)

    const handleDelete = id => {
        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                        refetch()
                    })

            }
        });



    }

    return (
        <div>

            <DashboardTitle heading={"Wanna add more?"} subHeading={'My Cart'}></DashboardTitle>

            <div className='flex justify-evenly'>
                <h2 className='text-2xl font-semibold'>Total Order: {cart.length}</h2>
                <h2 className='text-2xl font-semibold' >Total Price: ${totalPrice}</h2>
                {cart.length ? <Link to='/dashboard/payment'><button className='btn btn-sm hover:text-black bg-[#D1A054] text-white'>Pay</button></Link>
                    : <button disabled className='btn btn-sm hover:text-black bg-[#D1A054] text-white'>Pay</button>
                }

            </div>

            {/* cart table  */}
            <div className="overflow-x-auto my-7">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='uppercase text-white bg-[#D1A054]'>
                            <th>#</th>
                            <th>Item image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td className='font-bold'>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                    </div>

                                </td>
                                <td className='text-gray-500'>{item.name}</td>
                                <td className='text-gray-500 font-semibold'>${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)}>
                                        <FaTrashAlt className='text-xl text-red-600'></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;