import React from 'react';
import useAuth from '../../hooks/useAuth';
import { FaBarsStaggered } from 'react-icons/fa6';

const DashboardHead = () => {
    const { user } = useAuth()
    return (
        <div className='flex h-10 items-center bg-base-100'>
            <p className='flex-1'></p>
            <label htmlFor="my-drawer-2" className=" cursor-pointer drawer-button lg:hidden mr-7"> <FaBarsStaggered className='text-xl'></FaBarsStaggered> </label>

        </div>
    );
};

export default DashboardHead;