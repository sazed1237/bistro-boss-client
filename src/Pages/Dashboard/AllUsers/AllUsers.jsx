import React from 'react';
import DashboardTitle from '../../Shared/DashboardTitle/DashboardTitle';
import { FaTrashAlt, FaUser, FaUsers } from 'react-icons/fa';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }

    })

    const handleMakeAdmin = user => {
        console.log(user)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't make Admin",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data)

                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Successful",
                                text: `${user.name} is an Admin Now!`,
                                icon: "success"
                            });
                        }

                        refetch()
                    })

            }
        });

    }


    const handleDeleteUser = id => {
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

                axiosSecure.delete(`/users/${id}`)
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
            <DashboardTitle heading={'Manage All Users'} subHeading={'How Many??'} ></DashboardTitle>

            <div className='bg-base-100 px-3 py-5'>
                <h2 className='text-2xl py-2 font-semibold'>Total Users: {users.length} </h2>

                {/* cart table  */}
                <div className="overflow-x-auto mb-7">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='uppercase text-white bg-[#D1A054]'>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <td className='font-bold'>{index + 1}</td>
                                    <td className='text-gray-500'>{user.name}</td>
                                    <td className='text-gray-500 font-semibold'>{user.email}</td>

                                    <td>
                                        {user.role === 'admin'
                                            ? 'Admin'
                                            : <button className='btn btn-sm bg-[#D1A054]' onClick={() => handleMakeAdmin(user)}>
                                                <FaUsers className='text-xl text-white'></FaUsers>
                                            </button>}
                                    </td>

                                    <th>
                                        <button onClick={() => handleDeleteUser(user._id)}>
                                            <FaTrashAlt className='text-xl text-red-600'></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;