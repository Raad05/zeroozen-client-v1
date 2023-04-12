import React from 'react';
import './TechIntro.css';

const TechIntro = () => {
    return (
        <div className='tech-intro text-white text-center pt-60 mb-20' data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <h3 className='text-8xl py-3 text-yellow-500 font-bold'>EVs. ARE. AWESOME.</h3>
            <p className='text-3xl py-3'>
                ZEEROZEN fast charging is ensured by managing turbulence within the cell when energy flows.
            </p>
        </div >
    );
};

export default TechIntro;