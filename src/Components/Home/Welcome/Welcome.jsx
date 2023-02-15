import React from 'react';
import './Welcome.css';

const Welcome = () => {
    return (
        <div data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000" className='motto h-screen flex justify-center text-center relative'>
            <div className='absolute my-20 lg:my-0 lg:top-1/4'>
                <h1 className='text-2xl md:text-5xl lg:text-8xl pb-10 text-yellow-500'>EVs. ARE. AWESOME.</h1>
                <p className='text-lg md:text-2xl lg:text-3xl font-t lg:hin pb-10 px-5'>We are on a mission to unlock freedom for EVs in Bangladesh.</p>
                <div className='soon flex justify-center'>
                    <p className='py-10 text-xl md:text-2xl lg:text-3xl font-thin'>Coming Soon</p>
                    <div className='mt-14 lg:mt-16 mx-2 lg:mx-3'></div>
                    <div className='mt-14 lg:mt-16 mx-2 lg:mx-3'></div>
                    <div className='mt-14 lg:mt-16 mx-2 lg:mx-3'></div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;