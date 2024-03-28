import React from 'react';

const DashboardTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center my-10 mx-auto md:w-5/12'>
            <p className='text-yellow-500 italic font-semibold mb-2'>---{subHeading}---</p>
            <h3 className='text-2xl md:text-3xl uppercase border-y-4 py-2'>{heading}</h3>
        </div>
    );
};

export default DashboardTitle;