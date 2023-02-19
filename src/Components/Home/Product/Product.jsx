import React from 'react';
import product from '../../../assets/GIF/product.gif';

const Product = () => {
    return (
        <div className='product pt-10 pb-20'>
            <h3 className='text-center text-3xl font-bold pb-20'>Our Product</h3>
            <div className='flex justify-around pb-20'>
                <div className='about-product'>Product</div>
                <div className='gif'>
                    <img className='rounded-lg' src={product} alt="GIF" />
                </div>
            </div>
        </div>
    );
};

export default Product;