import React from 'react';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const FoodCart = ({ item }) => {
    const { image, name, recipe, price } = item
    return (
        <section className=''>
            <div className="card  bg-base-200 shadow-xl space-x-4">
                <img src={image} alt="salad" />
                <span className='absolute right-2 mt-2 bg-slate-900 text-white px-3 rounded font-light '>${price}</span>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <AddToCartButton item={item} buttonName={"Add To Cart"}></AddToCartButton>
                </div>
            </div>
        </section>
    );
};

export default FoodCart;