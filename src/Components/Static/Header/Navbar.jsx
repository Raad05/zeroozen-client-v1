import React from 'react';
import logo from '../../../assets/Logos/white-logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar bg-black sticky top-0 z-10">
            <div className="navbar-start">
                <a href='/'><img className="w-28 md:w-56 border-none md:ml-10" src={logo} alt="Zeroozen" /></a>
            </div>
            <div className="navbar-center hidden md:flex md:ml-96">
                <ul className="menu menu-horizontal px-1">
                    <li className='px-5 py-2 text-xs md:text-lg text-white hover:text-yellow-500 font-bold'><a href='/' className='px-5 py-2 text-xs md:text-lg hover:text-yellow-500 ease-in-out duration-300'>HOME</a></li>
                    <li className='px-5 py-2 text-xs md:text-lg text-white hover:text-yellow-500 font-bold'><a href='/tech' className='px-5 py-2 text-xs md:text-lg hover:text-yellow-500 ease-in-out duration-300'>TECH</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost md:hidden ml-40 md:ml-0">
                    <RxHamburgerMenu className='text-white' size={30}></RxHamburgerMenu>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-black rounded w-34 ml-20 md:ml-0">
                    <li className='px-5 py-2 text-xs md:text-lg text-white hover:text-yellow-500 font-bold'><a href='/' className='px-5 py-2 text-xs md:text-lg hover:text-yellow-500 ease-in-out duration-300'>HOME</a></li>
                    <li className='px-5 py-2 text-xs md:text-lg text-white hover:text-yellow-500 font-bold'><a href='/tech' className='px-5 py-2 text-xs md:text-lg hover:text-yellow-500 ease-in-out duration-300'>TECH</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;