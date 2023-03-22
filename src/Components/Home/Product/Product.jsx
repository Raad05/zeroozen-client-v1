import React from 'react';
import battery from '../../../assets/Products/battery.svg';
import charger from '../../../assets/Products/charger.svg';
import car from '../../../assets/Products/car.svg';
import eclipse3 from '../../../assets/BGs/Ellipse 3.svg';

const Product = () => {
    return (
        <div className='product relative bg-gray-800 pt-20'>
            <img src={eclipse3} alt="eclipse-3" className='absolute right-0' />
            <h3 className='text-4xl py-3 text-yellow-400 text-center pb-20'>Our Products</h3>
            <div className="flex justify-around items-center my-20">
                <img src={battery} alt="gif" className='w-1/4' />
                <div className='w-1/2 text-white'>
                    <h3 className='text-3xl py-3 text-yellow-400'>EVs. ARE. AWESOME.</h3>
                    <p className='text-xl py-3'>We are on a mission to unlock freedom for EVs in Bangladesh.</p>
                </div>
            </div>
            <div className="flex justify-around items-center my-20">
                <div className='w-1/2 text-white'>
                    <h3 className='text-3xl py-3 text-yellow-400'>EVs. ARE. AWESOME.</h3>
                    <p className='text-xl py-3'>We are on a mission to unlock freedom for EVs in Bangladesh.</p>
                </div>
                <img src={charger} alt="gif" className='w-1/6 relative' />
            </div>
            <div className="flex justify-around items-center my-20">
                <img src={car} alt="gif" className='w-1/3' />
                <div className='w-1/2 text-white'>
                    <h3 className='text-3xl py-3 text-yellow-400'>EVs. ARE. AWESOME.</h3>
                    <p className='text-xl py-3'>We are on a mission to unlock freedom for EVs in Bangladesh.</p>
                </div>
            </div>
        </div>
    );
};

export default Product;