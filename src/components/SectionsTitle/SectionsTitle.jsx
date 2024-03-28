import React from 'react';

const SectionsTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-10 mx-auto md:w-4/12 lg:w-3/12'>
            <p className='text-yellow-500 italic font-semibold mb-2'>---{subHeading}---</p>
            <h3 className='text-2xl md:text-3xl uppercase border-y-4 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionsTitle;