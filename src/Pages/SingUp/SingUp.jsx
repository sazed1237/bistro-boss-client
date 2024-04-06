import React, { useContext, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png';
import loginBG from '../../assets/others/authentication.png';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SingUp = () => {

    const axiosPublic = useAxiosPublic()

    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const { createUser, updateUserProfile } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';


    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)

                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        console.log('user profile if updated')



                        // create user and entry in the database
                        const userIfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userIfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added in data base')

                                    Swal.fire({
                                        title: "Successful",
                                        text: "Your Account is Created ",
                                        icon: "success"
                                    });

                                    reset()

                                    navigate(from, { replace: true })
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sing up</title>
            </Helmet>

            <section style={{ backgroundImage: `url(${loginBG})` }} className='w-full   flex items-center'>
                <div className="md:w-10/12 mx-auto hero my-24 bg-base-200">

                    <div style={{ backgroundImage: `url(${loginBG})` }} className="hero-content flex-col lg:flex-row-reverse gap-10 md:m-5 md:shadow-xl shadow-gray-500">
                        <div className="flex items-center">
                            <img src={loginImg} alt="" />
                        </div>

                        <div className="card shrink-0 w-full md:max-w-md ">
                            <h1 className="text-2xl text-center mt-3 font-bold">Sing up</h1>

                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>

                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        // aria-invalid={errors.name ? "true" : "false"}
                                        placeholder="Name"
                                        className="input input-bordered rounded"
                                    />
                                    {errors.name?.type === "required" && (
                                        <p role="alert" className='text-red-400'>Name is required</p>
                                    )}

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        name='email'
                                        placeholder="email"
                                        className="input input-bordered rounded"
                                    />
                                    {errors.email?.type === "required" && (
                                        <p role="alert" className='text-red-400'>Email is required</p>
                                    )}

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input
                                        type="password"
                                        {...register("password", { required: true })}
                                        name='password'
                                        placeholder="Enter Your Password"
                                        className="input input-bordered rounded"
                                    />
                                    {errors.password?.type === "required" && (
                                        <p role="alert" className='text-red-400'>Password is required</p>
                                    )}

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>

                                    <input
                                        type="text"
                                        {...register("photoUrl", { required: true })}
                                        // aria-invalid={errors.name ? "true" : "false"}
                                        placeholder="PhotoURL"
                                        className="input input-bordered rounded"
                                    />
                                    {errors.photoUrl?.type === "required" && (
                                        <p role="alert" className='text-red-400'>PhotoUrl is required</p>
                                    )}

                                </div>


                                <div className="form-control mt-6">
                                    <input className='btn bg-[#D1A054] bg-opacity-60 hover:bg-[#D1A054] text-white' type="submit" value="Sing Up" />
                                    <span className='text-center my-2 text-[#D1A054]'>Already Have an Account? <Link to={'/login'}>Login</Link></span>
                                </div>
                                <div>
                                    <SocialLogin></SocialLogin>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingUp;