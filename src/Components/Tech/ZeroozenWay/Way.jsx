import React from 'react';
import zeroozenWay from '../../../assets/GIF/The ZerooZen Way.gif';

const Way = () => {
    return (
        <div className='way mb-10 md:mb-40' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500">
            <img src={zeroozenWay} alt="zeroozen-way" className='m-auto' />
            <p className='text-white text-lg md:text-3xl text-center mx-2'>Unlocks the way of charging "ZEROOZEN 30 mins"</p>
        </div>
    );
};

export default Way;