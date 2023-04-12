import React from 'react';
import fastCharge from '../../../assets/GIF/fast-charge.gif';
import product from '../../../assets/GIF/product.gif';

const Product = () => {
    return (
        <div id='product-section' className='product mb-20 mx-5 md:mx-20'>
            <h3 className='text-yellow-500 text-xl md:text-5xl text-center font-bold' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Meet</h3>
            <div className='flex justify-around items-center my-0 md:my-5'>
                <div className='details' data-aos="fade-right" data-aos-delay="1000" data-aos-duration="1000">
                    <h3 className='text-white text-md md:text-3xl font-bold my-5'>Small battery packs = Higher affordability</h3>
                    <p className='text-white text-sm md:text-xl'>- 35% smaller batteries.</p>
                    <p className='text-white text-sm md:text-xl'>- Increase affordability for consumers.</p>
                    <p className='text-white text-sm md:text-xl'>- 30 min rapid charge.</p>
                </div>
                <img src={fastCharge} alt="gif" className='w-1/2 md:w-1/3' data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000" />
            </div>
            <div className='flex justify-around items-center my-0 md:my-5'>
                <img src={product} alt="fast-charge" className='rounded-lg w-28 md:w-1/4' data-aos="fade-right" data-aos-delay="1500" data-aos-duration="1000" />
                <div className='details ml-5 md:ml-0' data-aos="fade-left" data-aos-delay="1500" data-aos-duration="1000">
                    <h3 className='text-white text-md md:text-3xl font-bold my-5'>Less charge time = High network profitability</h3>
                    <p className='text-white text-sm md:text-xl'>- Fastest Active Balancing BMS.</p>
                    <p className='text-white text-sm md:text-xl'>- 6x voltage sensing accuracy.</p>
                    <p className='text-white text-sm md:text-xl'>- 10x better thermal management.</p>
                </div>
            </div>
        </div>
    );
};

export default Product;