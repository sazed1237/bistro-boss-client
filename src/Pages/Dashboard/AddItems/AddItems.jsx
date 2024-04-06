import React from 'react';
import DashboardTitle from '../../Shared/DashboardTitle/DashboardTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';



const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {

    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-Type': 'multipart/form-data'
            }
        })
        const imgDisplayUrl = res.data.data.display_url;

        if (res.data.success) {
            // now send the items data to the server with the image url
            const itemDetails = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: imgDisplayUrl

            }
            // now send data to database
            const itemRes = await axiosSecure.post('/menus', itemDetails);
            console.log(itemRes.data)
            if (itemRes.data.insertedId) {

                Swal.fire({
                    title: "Item Added",
                    text: "You are added new item Successfully",
                    icon: "success"
                });
                reset()
            }
        }

        // console.log(imgDisplayUrl)
    }

    return (
        <section>
            <DashboardTitle heading={'Add An Item'} subHeading={`What's new`}></DashboardTitle>


            <div className="card md:w-5/6 mx-auto shadow-2xl bg-base-200 rounded-none mb-20">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Name*</span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Recipe Name"
                            className="input input-bordered w-full max-w-xs md:max-w-full"
                        />
                    </div>

                    <div className='grid md:grid-cols-2 gap-7'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>

                            <select
                                {...register("category", { required: true })}
                                className="select select-bordered w-full max-w-xs"
                                defaultValue='default'
                            >
                                <option disabled value='default'>Category</option>
                                <option value='salad'>Salad</option>
                                <option value='pizza'>Pizza</option>
                                <option value='soup'>Soup</option>
                                <option value='desert'>Desert</option>
                                <option value='drinks'>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Details*</span>
                        </label>
                        <textarea
                            {...register("recipe", { required: true })}
                            placeholder="Details"
                            className="textarea textarea-bordered textarea-md w-full "
                        ></textarea>

                    </div>

                    <div className="form-control">
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className="file-input md:file-input-md file-input-sm w-full max-w-xs md:max-w-full"
                        />
                    </div>


                    <div className=" mx-auto mt-6 ">
                        <button className="btn btn-sm rounded-none bg-yellow-600 border-none btn-w-sm btn-primary hover:bg-gray-400 text-white">Add Item <FaUtensils></FaUtensils></button>
                        {/* <input type="submit" value="Add Item" /> */}
                    </div>
                </form>
            </div>

        </section>
    );
};

export default AddItems;