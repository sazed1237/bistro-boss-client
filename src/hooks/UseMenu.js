// import { useEffect, useState } from "react";

import { useQuery } from "react-query";
import useAxiosPublic from "./useAxiosPublic";


const UseMenu = () => {
    const axiosPublic = useAxiosPublic()
    // const [menuItems, setMenuItems] = useState([])
    // const [loading, setLoading] = useState(true)


    // useEffect(() => {
    //     fetch('https://bistro-boss-server-iota-nine.vercel.app/menus')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenuItems(data)
    //             setLoading(false)
    //         })
    // }, [])

    const { data: menuItems = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menus')

            return res.data
        }
    })


    return [menuItems, loading, refetch];
};

export default UseMenu;