import React, { useEffect, useState } from 'react';
import SectionsTitle from '../../../components/SectionsTitle/SectionsTitle';
import ChefRecommendItem from '../../Shared/FoodCart/FoodCart';
import OrderFood from '../../OrderFood/OrderFood/OrderFood';
import FoodCart from '../../Shared/FoodCart/FoodCart';

const ChefRecommend = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const saladItems = data.filter(item => item.category === "salad");
                setItems(saladItems)
            })
    }, [])

    return (
        <div>
            <SectionsTitle
                heading="Chef Recommends"
                subHeading="Should Try"
            ></SectionsTitle>

            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-10'>
                {
                    items.slice(0, 3).map(item => <FoodCart
                        key={item._id}
                        item={item}
                    ></FoodCart>)
                }
            </div>



        </div>
    );
};

export default ChefRecommend;