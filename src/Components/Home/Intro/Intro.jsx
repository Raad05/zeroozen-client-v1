import React from 'react';
import './Intro.css';

const Intro = () => {
    return (
        <div id='intro-section' className='intro text-white text-center h-80 md:h-screen pt-10 md:pt-60 md:mb-20' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <h3 className='text-2xl md:text-8xl py-3 text-yellow-500 font-bold'>EVs. ARE. AWESOME.</h3>
            <p className='text-md md:text-3xl py-3'>We are on a mission to unlock freedom for EVs in Bangladesh.</p>
        </div>
    );
};

export default Intro;