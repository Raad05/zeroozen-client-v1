import React from 'react';
import fastCharge from '../../../assets/GIF/fast-charge.gif';
import product from '../../../assets/GIF/product.gif';

const Product = () => {
    return (
        <div className='product'>
            <h3 className='text-yellow-500 text-5xl text-center'>Our Products</h3>
            <div className='flex justify-around items-center'>
                <div>
                    <p className='text-white text-2xl'>Lorem Ipsum</p>
                    <p className='text-white text-2xl'>Lorem Ipsum</p>
                    <p className='text-white text-2xl'>Lorem Ipsum</p>
                </div>
                <img src={fastCharge} alt="gif" />
            </div>
            <div className='flex justify-around items-centerv'>
                <img src={product} alt="fast-charge" />
                <div>
                    <p className='text-white text-2xl'>Lorem Ipsum</p>
                    <p className='text-white text-2xl'>Lorem Ipsum</p>
                    <p className='text-white text-2xl'>Lorem Ipsum</p>
                </div>
            </div>
        </div>
    );
};

export default Product;