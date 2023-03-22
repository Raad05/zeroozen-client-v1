import React from 'react';
import batteryPack from '../../../assets/Products/battery-pack.svg';
import eclipse5 from '../../../assets/BGs/Ellipse 5.svg';

const Monetize = () => {
    return (
        <div className='monetize py-10 relative'>
            <img src={eclipse5} alt="eclipse-5" className='absolute left-0' />
            <img src={batteryPack} alt="battery-pack" className='w-1/2 m-auto' />
            <h3 className='text-white text-center text-5xl py-10'>Can it be monetized to dollars?</h3>
        </div>
    );
};

export default Monetize;