import React from 'react';
import partner from '../../../assets/BGs/partner.png';

const Partner = () => {
    return (
        <div id='partner-section' className='partner my-0 md:my-40 w-2/3 md:w-1/2 m-auto'>
            <img src={partner} alt="partner-with-us" className='rounded-xl' />
        </div>
    );
};

export default Partner;