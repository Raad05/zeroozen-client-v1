import React from 'react';
import './Intro.css';

const Intro = () => {
    return (
        <div id='intro-section' className='intro text-white text-center h-screen pt-60 mb-20' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <h3 className='text-8xl py-3 text-yellow-500 font-bold'>EVs. ARE. AWESOME.</h3>
            <p className='text-3xl py-3'>We are on a mission to unlock freedom for EVs in Bangladesh.</p>
        </div>
    );
};

export default Intro;