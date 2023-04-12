import React from 'react';
import zeroozenWay from '../../../assets/GIF/The ZerooZen Way.gif';

const Way = () => {
    return (
        <div className='way mb-40' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <img src={zeroozenWay} alt="zeroozen-way" className='m-auto' />
            <p className='text-white text-3xl text-center'>Unlocks the way of charging "ZEROOZEN 30 mins"</p>
        </div>
    );
};

export default Way;