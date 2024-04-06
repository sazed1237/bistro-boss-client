import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import DashboardTitle from '../../Shared/DashboardTitle/DashboardTitle';
import Swal from 'sweetalert2';


const AddReview = () => {

    const { register, handleSubmit, reset } = useForm()
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()


    const onSubmit = async (data) => {
        // console.log(data)

        const reviewDetails = {
            name: user.displayName,
            image: data.image,
            rating: data.rating,
            details: data.testimonial
        }

        const res = await axiosSecure.post('/reviews', reviewDetails)
        console.log(res.data)
        if (res.data.insertedId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Your Review Added`,
                showConfirmButton: false,
                timer: 1500
            });
            reset()
        }
    }

    return (
        <section>

            <DashboardTitle heading={'Add Review'} subHeading={"What's in Your mind"} ></DashboardTitle>
            <div className="hero ">
                <div className="card shrink-0 w-full max-w-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className='grid md:grid-cols-2 gap-5'>
                            <div className="form-control">
                                <input
                                    type="text"
                                    defaultValue={user?.displayName}
                                    placeholder="Name" className="input "
                                    {...register("name", { required: true })}
                                />
                            </div>

                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Give Rating Max 5" className="input "
                                    {...register("rating", { required: true })}
                                />
                            </div>

                        </div>

                        <div className="form-control">
                            <input
                                type="text"
                                defaultValue={user?.photoURL}
                                placeholder="image Address"
                                className="input "
                                {...register("image", { required: true })}
                            />
                        </div>



                        <div className="form-control">
                            <textarea
                                type="text"
                                placeholder="Your Review"
                                className="textarea "
                                {...register("testimonial", { required: true })}
                            />
                        </div>

                        <div className="flex justify-center mt-6">
                            <button className='btn btn-md px-5 bg-yellow-500 hover:bg-yellow-600 text-white'
                            >
                                Add Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddReview;