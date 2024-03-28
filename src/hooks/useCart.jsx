
import useAxiosSecure from "./useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "react-query";


const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
  

    // console.log(user?.email)

    const { data: cart = [], refetch, isLoading } = useQuery({
        queryKey: ['cart', `${user?.email}`],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)

          
            return res.data;
        }
    })


    return [cart, refetch, isLoading]

};

export default useCart;