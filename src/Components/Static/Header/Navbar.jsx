import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logos/white-logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar nav-section bg-base-100 py-10">
            <div className="flex-1">
                <Link to='/'><img className="btn btn-ghost w-auto" src={logo} alt="Zeroozen" /></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-2 py-5">
                    <Link className='px-5 py-2 text-lg hover:text-yellow-500 text-white ease-in-out duration-300' to='/'>HOME</Link>
                    <Link className='px-5 py-2 text-lg hover:text-yellow-500 ease-in-out duration-300' to='/about'>ABOUT</Link>
                    <Link className='px-5 py-2 text-lg hover:text-yellow-500 ease-in-out duration-300' to='/career'>CAREER</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;