import React from 'react';
import './TechIntro.css';

const TechIntro = () => {
    return (
        <div className='tech-intro text-white text-center pt-20 md:pt-60 md:mb-20' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <h3 className='text-2xl md:text-8xl py-3 text-yellow-500 font-bold'>EVs. ARE. AWESOME.</h3>
            <p className='text-md md:text-3xl py-3 mx-2'>
                ZEEROZEN fast charging is ensured by managing turbulence within the cell when energy flows.
            </p>
        </div >
    );
};

export default TechIntro;