import React from 'react';
import sense from '../../../assets/GIF/Sense.gif';
import process from '../../../assets/GIF/Process.gif';
import adapt from '../../../assets/GIF/adapt.gif';

const Operations = () => {
    return (
        <div className='operations mb-20 mx-5 md:mx-60'>
            <div className="md:flex justify-around items-center mb-10">
                <h3 className='text-white text-2xl md:text-3xl font-bold text-center md:text-left md:w-1/2 mt-20 md:mt-0'>Sense</h3>
                <div className='op-details md:w-1/2'>
                    <img src={sense} alt="sense" />
                    <p className='text-lg md:text-2xl text-center text-gray-300'>
                        Sense each cell accurately to understand physical battery state 8x better.
                    </p>
                </div>
            </div>
            <div className="md:flex justify-around items-center mb-10">
                <h3 className='text-white text-2xl md:text-3xl font-bold text-center md:text-left md:w-1/2 mt-20 md:mt-0'>Process</h3>
                <div className="op-details md:w-1/2">
                    <img src={process} alt="process" />
                    <p className='text-lg md:text-2xl text-center text-gray-300'>
                        Our ZEN Algorithm creates current profile according to cell needs that allows smooth flow of energy.
                    </p>
                </div>
            </div>
            <div className="md:flex justify-around items-center mb-10">
                <h3 className='text-white text-2xl md:text-3xl font-bold text-center md:text-left md:w-1/2 mt-20 md:mt-0'>Adapt</h3>
                <div className='op-details md:w-1/2'>
                    <img src={adapt} alt="adapt" />
                    <p className='text-lg md:text-2xl text-center text-gray-300'>
                        Faster active cell balancing and 10x better thermal management allows us to deliver maximum safety, infinite performance and longer life.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Operations;