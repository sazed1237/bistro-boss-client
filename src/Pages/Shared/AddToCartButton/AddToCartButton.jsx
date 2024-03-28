import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";



const AddToCartButton = ({ buttonName, item }) => {

    const { user } = useAuth() //custom hook
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const { _id, image, name, recipe, price } = item


    const handleAddToCart = food => {
        // console.log(food, user.email)
        if (food && user) {

            console.log(food, user?.email)

            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price
            }
            // use Custom hooks Axios 
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} is Added to Cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // reFetch data 
                    refetch()
                })


        } else {
            Swal.fire({
                title: "You are Not Logged in",
                text: "Please Login to Add to Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }

    }

    return (
        <div className="mt-4">
            <button onClick={() => handleAddToCart(item)} className="btn hover:text-white hover:bg-black bg-gray-200 btn-sm  text-yellow-500 shadow-yellow-500 ">{buttonName}</button>
        </div>
    );
};

export default AddToCartButton;