import React from 'react';
import './Intro.css';
import fastCharge from '../../../assets/Products/b1.svg';

const Intro = () => {
    return (
        <div className='intro flex justify-around items-center h-screen'>
            <div className='motto w-1/2 mb-80 text-white'>
                <h3 className='text-6xl py-3 text-yellow-400'>EVs. ARE. AWESOME.</h3>
                <p className='text-2xl py-3'>We are on a mission to unlock freedom for EVs in Bangladesh.</p>
            </div>
            <img src={fastCharge} alt="gif" className='w-1/2 mb-60' />
        </div>
    );
};

export default Intro;