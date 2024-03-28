import React from 'react';

const MenuItem = ({ item }) => {

    const { name, recipe, image, price } = item
    return (
        <div className='flex space-x-4'>
            <img style={{width: '100px', height: '90px', borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h1 className='uppercase font-semibold'>{name}---------</h1>
                <small>{recipe}</small>
            </div>
            <p className='text-yellow-500 '>${price}</p>
        </div>
    );
};

export default MenuItem;