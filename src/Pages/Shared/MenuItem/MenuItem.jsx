import React from 'react';

const MenuItem = ({ item }) => {

    const { name, recipe, image, price } = item
    return (
        <div className='flex md:space-x-4 space-x-2'>
            <img className='md:w-24 md:h-20 w-16 h-14' style={{ borderRadius: '0 200px 200px 200px' }} src={image} alt="" />
            <div>
                <h1 className='uppercase font-semibold'>{name}</h1>
                <small>{recipe}</small>
            </div>
            <p className='text-yellow-500 '>${price}</p>
        </div>
    );
};

export default MenuItem;