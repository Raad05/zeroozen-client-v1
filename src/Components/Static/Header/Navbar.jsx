import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logos/white-logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar nav-section px-40 sticky top-0 bg-black z-10">
            <div className="flex-1">
                <Link to='/'><img className="btn btn-ghost w-auto border-none" src={logo} alt="Zeroozen" /></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-2 py-2 text-white">
                    <Link to='/' className='px-5 py-2 text-lg hover:text-yellow-500 ease-in-out duration-300'>HOME</Link>
                    <Link to='/tech' className='px-5 py-2 text-lg hover:text-yellow-500 ease-in-out duration-300'>TECH</Link>
                    <a href='#team-section' className='px-5 py-2 text-lg hover:text-yellow-500 ease-in-out duration-300'>ABOUT</a>
                    <a href='#faq-section' className='px-5 py-2 text-lg hover:text-yellow-500 ease-in-out duration-300'>FAQ</a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;