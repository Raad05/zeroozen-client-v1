import React from 'react';
import './Feature.css';
import fc from '../../../assets/GIF/fast-charge.gif';

const Feature = () => {
    return (
        <div className='feature py-10'>
            <h1 className='text-4xl text-center font-bold' data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000">SMALL BATTERY PACKS = HIGHER AFFORDABILITY</h1>
            <div className='flex justify-around items-center'>
                <ul className='text-3xl' data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="500">
                    <li className='py-3'>• Affordable and scalable</li>
                    <li className='py-3'>• 30 Min Charging time only even at 50°C</li>
                    <li className='py-3'>• 2000+ cycle life</li>
                    <li className='py-3'>• 40% smaller and with a 50% drop in charging cost</li>
                </ul>
                <div className='gif' data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-delay="1000">
                    <img src={fc} alt="Fast Charging" />
                </div>
            </div>
        </div>
    );
};

export default Feature;