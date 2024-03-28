import React, { useEffect, useState } from 'react';
import SectionsTitle from '../../../components/SectionsTitle/SectionsTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import UseMenu from '../../../hooks/UseMenu';

const PopulerMenu = () => {

    // use custom hooks
    const [menuItems, loading] = UseMenu()
    // filter by category 
    const popularItems = menuItems.filter(item => item.category === "popular")


    // const [menuItems, setMenuItems] = useState([])

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             const popularItems = data.filter(item => item.category === "popular");
    //             setMenuItems(popularItems)
    //         })
    // }, [])

    // console.log(menuItems)

    return (
        <section>
            <SectionsTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            >
            </SectionsTitle>

            <div className='w-10/12 mx-auto grid md:grid-cols-2 gap-5 mb-10'>
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex items-center justify-center'>
                <button className="btn btn-outline border-0 border-b-4 btn-sm mt-4 ">View Full Menu</button>
            </div>

        </section>
    );
};

export default PopulerMenu;