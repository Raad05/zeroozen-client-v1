import React from 'react';
import { FaTwitterSquare, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import logo from '../../../assets/Logos/white-logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-section lg:rounded-3xl lg:mb-10'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12'>
                <div className='logo w-1/2 mx-auto'>
                    <img src={logo} alt="Zeroozen" />
                    <div className='social flex my-2 ml-7'>
                        <button className='mr-3 hover:scale-125 ease-in-out duration-100 hover:text-cyan-400'><a href="/" alt="Twitter"><FaTwitterSquare size={30}></FaTwitterSquare></a></button>
                        <button className='mr-3 hover:scale-125 ease-in-out duration-100 hover:text-cyan-400'><a href="https://www.linkedin.com/company/zeroozen/" alt="LinkedIn" target="_blank" rel='noreferrer'><FaLinkedin size={30}></FaLinkedin></a></button>
                        <button className='mr-3 hover:scale-125 ease-in-out duration-100 hover:text-cyan-400'><a href="/" alt="Twitter"><FaYoutube size={30}></FaYoutube></a></button>
                        <button className='mr-3 hover:scale-125 ease-in-out duration-100 hover:text-cyan-400'><a href="/" alt="Twitter"><HiLocationMarker size={30}></HiLocationMarker></a></button>
                    </div>
                </div>
                <div className='contact w-1/2 mx-auto'>
                    <h3 className='text-3xl font-bold my-5'>Contact</h3>
                    <p className='text-xl pb-10'><span className='font-bold'>Email: </span>contact@zeroozen.com</p>
                    <p className='text-xl'><span className='font-bold'>Corporate Office: </span><br></br>Fattah Plaza, 70,Green Road, Panthapath, Dhaka-1205</p>
                </div>
                <div className='newsletter w-1/2 mx-auto'>
                    <h3 className='text-3xl font-bold my-5'>Newsletter</h3>
                    <p>Subscribe to get the latest updates.
                    </p>
                    <form className='relative'>
                        <input type="text" placeholder="Email Address" className="input w-full max-w-xs bg-white my-5 rounded-md" />
                        <button type='submit' className='absolute right-4 top-8'><FiSend size={30}></FiSend></button>
                    </form>
                </div>
            </div>
            <p className='text-center pb-8 px-5'>Copyright © 2023 - All right reserved by ZEROOZEN</p>
        </div>
    );
};

export default Footer;