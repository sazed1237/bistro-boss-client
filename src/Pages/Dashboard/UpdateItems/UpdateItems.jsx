import React from 'react';
import DashboardTitle from '../../Shared/DashboardTitle/DashboardTitle';
import { useLoaderData } from 'react-router-dom';

const UpdateItems = () => {
    const item = useLoaderData()
    console.log('in update page', item)
    return (
        <section>
            <DashboardTitle heading={'Update an item'} subHeading={'Refresh Item'} ></DashboardTitle>


        </section>
    );
};

export default UpdateItems;