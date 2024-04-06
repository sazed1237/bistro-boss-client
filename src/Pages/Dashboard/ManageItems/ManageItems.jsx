import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import DashboardTitle from '../../Shared/DashboardTitle/DashboardTitle';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import UseMenu from '../../../hooks/UseMenu';
import { Link } from 'react-router-dom';

const ManageItems = () => {


    const [menuItems, loading, refetch] = UseMenu();
    const axiosSecure = useAxiosSecure()


    const handleDelete = item => {
        console.log(item._id)

        Swal.fire({
            title: "Are you sure?",
            text: `You won't Delete ${item.name}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosSecure.delete(`/menus/${item._id}`)

                console.log(res.data)

                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                refetch()


            }
        });



    }

    return (
        <div>

            <DashboardTitle heading={"Manage All Items"} subHeading={'Hurry Up!'}></DashboardTitle>

            <h2 className='md:text-2xl font-semibold'>Total Order: {menuItems.length}</h2>

            {/* menuItems table  */}
            <div className="overflow-x-auto my-7">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='uppercase text-white bg-[#D1A054]'>
                            <th>#</th>
                            <th>Item image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menuItems.map((item, index) => <tr key={item._id}>
                                <td className='font-bold'>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className=" w-10 md:w-16 rounded">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                    </div>

                                </td>
                                <td className='text-gray-500'>{item.name}</td>
                                <td className='text-gray-500 font-semibold'>${item.price}</td>

                                <td className='text-gray-500 font-semibold'>
                                    <button>
                                        <Link to={`/dashboard/updateItems/${item._id}`}>
                                            <FaEdit className='text-xl'></FaEdit>
                                        </Link>
                                    </button>
                                </td>

                                <th>
                                    <button onClick={() => handleDelete(item)}>
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

export default ManageItems;