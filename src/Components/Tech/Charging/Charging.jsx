import React from 'react';
import normalCharging from '../../../assets/GIF/Normal Charging.gif';
import fastCharging from '../../../assets/GIF/Typical Fast Charging.gif';
import './Charging.css';


const Charging = () => {
    return (
        <div className='charging flex justify-center items-center mb-20'>
            <div className="normal-charging">
                <img src={normalCharging} alt="Normal Charge" className='normal' data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" />
                <div className='bullet-points flex justify-center' data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out" >
                    <ul>
                        <li className='text-white text-xl list-disc'>Lower Temperature</li>
                        <li className='text-white text-xl list-disc'>Less Turbulence</li>
                        <li className='text-white text-xl list-disc'>Longer Battery Life</li>
                    </ul>
                </div>
            </div>
            <div className="fast-charging">
                <img src={fastCharging} alt="Fast Charge" className='fast' data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" />
                <div className='bullet-points flex justify-center' data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <ul>
                        <li className='text-white text-xl list-disc'>Higher Temperature</li>
                        <li className='text-white text-xl list-disc'>More Turbulence</li>
                        <li className='text-white text-xl list-disc'>Short Battery Life</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Charging;