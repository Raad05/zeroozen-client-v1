import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logos/white-logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar nav-section px-40 py-5 sticky top-0">
            <div className="flex-1">
                <Link to='/'><img className="btn btn-ghost w-auto border-none" src={logo} alt="Zeroozen" /></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-2 py-5 text-white">
                    <a className='px-5 py-2 text-lg hover:text-yellow-500 ease-in-out duration-300' href="/">HOME</a>
                    <a className='px-5 py-2 text-lg hover:text-yellow-500 ease-in-out duration-300' href="/">PRODUCT</a>
                    <a className='px-5 py-2 text-lg hover:text-yellow-500 ease-in-out duration-300' href="/">TEAM</a>
                    <a className='px-5 py-2 text-lg hover:text-yellow-500 ease-in-out duration-300' href="/">FAQ</a>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;