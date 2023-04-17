import React from 'react';
import normalCharging from '../../../assets/GIF/Normal Charging.gif';
import fastCharging from '../../../assets/GIF/Typical Fast Charging.gif';
import './Charging.css';


const Charging = () => {
    return (
        <div className='charging md:flex md:justify-center md:items-center mb-20'>
            <div className="normal-charging" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500">
                <img src={normalCharging} alt="Normal Charge" className='normal' />
                <div className='bullet-points flex justify-center' >
                    <ul>
                        <li className='text-white text-md md:text-xl list-disc'>Lower Temperature</li>
                        <li className='text-white text-md md:text-xl list-disc'>Less Turbulence</li>
                        <li className='text-white text-md md:text-xl list-disc'>Longer Battery Life</li>
                    </ul>
                </div>
            </div>
            <div className="fast-charging" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500">
                <img src={fastCharging} alt="Fast Charge" className='fast' />
                <div className='bullet-points flex justify-center'>
                    <ul>
                        <li className='text-white text-md md:text-xl list-disc'>Higher Temperature</li>
                        <li className='text-white text-md md:text-xl list-disc'>More Turbulence</li>
                        <li className='text-white text-md md:text-xl list-disc'>Short Battery Life</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Charging;