import React from 'react';
import fastCharge from '../../../assets/GIF/fast-charge.gif';
import product from '../../../assets/GIF/product.gif';
import charger from '../../../assets/images/Charger.png';

const Product = () => {
    return (
        <div id='product-section' className='product mb-20 mx-16 md:mx-20'>
            <h3 className='text-yellow-500 text-xl md:text-5xl text-center font-bold my-5 md:my-0' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500">Meet</h3>
            <div className='md:flex justify-around items-center' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                <div className='flex md:w-1/2 justify-center items-center'>
                    <img src={fastCharge} alt="gif" className='w-44 md:w-1/2 mx-5' />
                    <img src={product} alt="fast-charge" className='rounded-lg mx-5 w-32 md:w-1/3 ml-5 md:ml-0' />
                </div>
                <div className='detail md:w-1/2 md:mx-20'>
                    <p className='text-white text-md md:text-5xl my-5 text-center'>Any EV with our pack can fully charge in 30 min only with our superzen charger.</p>
                </div>
            </div>
            <div className='md:flex flex-row-reverse justify-between items-center mx-10' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                <img src={charger} alt="charger" className='w-full md:w-1/3 mx-auto' />
                <div className='details md:w-1/2 md:mx-20'>
                    <p className='text-white text-md md:text-5xl my-5 text-center md:text-left'>Most advanced adaptive charger.</p>
                </div>
            </div>
        </div>
    );
};

export default Product;