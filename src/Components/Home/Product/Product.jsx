import React from 'react';
import fastCharge from '../../../assets/GIF/fast-charge.gif';
import product from '../../../assets/GIF/product.gif';
import charger from '../../../assets/images/Charger.png';
import bat from '../../../assets/images/bat.jpg';

const Product = () => {
    return (
        <div id='product-section' className='product mb-20 mx-12 md:mx-20'>
            <h3 className='text-yellow-500 text-xl md:text-5xl font-bold my-5 md:my-5 ml-0 md:ml-36' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500">Meet</h3>
            <div className='md:flex justify-around items-center' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                <div className='flex md:w-1/2 justify-center items-center mx-16'>
                    <img src={fastCharge} alt="gif" className='w-44 md:w-1/2' />
                    <img src={product} alt="fast-charge" className='rounded-lg w-32 md:w-1/3 ml-5 md:ml-0' />
                </div>
                <div className='detail md:w-1/2 md:mx-20'>
                    <p className='text-white text-md md:text-5xl my-5 text-center'>Any EV with our ∞pack can fully charge in 30 min only with our superzen charger.</p>
                </div>
            </div>
            <div className='md:flex flex-row-reverse justify-between items-center mx-10' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                <img src={charger} alt="charger" className='w-full md:w-1/3 mx-auto' />
                <div className='details md:w-1/2 md:mx-20'>
                    <p className='text-white text-md md:text-5xl my-5 text-center md:text-left'>Most advanced adaptive charger.</p>
                </div>
            </div>
            <div className='md:flex justify-between items-center mx-10' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1000">
                <img src={bat} alt="charger" className='w-full md:w-1/3 mx-auto rounded my-10' />
                <div className='details md:w-1/2 md:mx-20'>
                    <p className='text-white text-md md:text-4xl my-5 text-center md:text-left'>Our Superzen charger and ∞pack together simplifies flow of energy and allows:</p>
                    <ul className='ml-10 my-10'>
                        <li className='text-white text-md md:text-xl list-disc'>Affordable Charging</li>
                        <li className='text-white text-md md:text-xl list-disc'>High network profitability</li>
                        <li className='text-white text-md md:text-xl list-disc'>Higher affortability</li>
                        <li className='text-white text-md md:text-xl list-disc'>Better financing</li>
                    </ul>
                </div>
            </div>
            <p className='text-white text-md md:text-3xl text-center mx-5 md:mx-0 my-10' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1000">This unlocks freedom for Electric Vehicles in Bangladesh.</p>
        </div>
    );
};

export default Product;