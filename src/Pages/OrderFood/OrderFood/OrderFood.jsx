import React from 'react';
import CoverBanner from '../../Shared/CoverBanner/CoverBanner';
import OrderBg from '../../../assets/shop/banner2.jpg';
import OrderTabs from '../OrderTabs/OrderTabs';
import UseMenu from '../../../hooks/UseMenu';
import { Helmet } from 'react-helmet-async';

const OrderFood = () => {

    // use custom hooks
    const [menuItems, loading] = UseMenu()
    // filter by category 
    const drinks = menuItems.filter(item => item.category === "drinks")
    const dessert = menuItems.filter(item => item.category === "dessert")
    const salad = menuItems.filter(item => item.category === "salad")
    const soup = menuItems.filter(item => item.category === "soup")
    const pizza = menuItems.filter(item => item.category === "pizza")

    return (
        <div>

            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>

            <CoverBanner coverImage={OrderBg} title={"Order Food"} text={'would you like to try a dish?'} ></CoverBanner>
            <OrderTabs
                salads={salad}
                soups={soup}
                pizzas={pizza}
                desserts={dessert}
                drinks={drinks}
            ></OrderTabs>

        </div>
    );
};

export default OrderFood;