import React from 'react';
import logo from '../../../assets/Logos/white-logo.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar bg-black sticky top-0 z-10">
            <div className="navbar-start">
                <a href='/'><img className="btn btn-ghost w-auto border-none md:ml-10" src={logo} alt="Zeroozen" /></a>
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
        // <div className="navbar nav-section px-40 sticky top-0 bg-black z-10 hidden">
        //     <div className="flex-1">
        //         <Link to='/'><img className="btn btn-ghost w-auto border-none" src={logo} alt="Zeroozen" /></Link>
        //     </div>
        //     <div className="flex-none">
        //         <ul className="menu md:menu-horizontal px-2 py-2 text-white">
        // <Link to='/' className='px-5 py-2 text-xs md:text-lg hover:text-yellow-500 ease-in-out duration-300'>HOME</Link>
        // <Link to='/tech' className='px-5 py-2 text-xs md:text-lg hover:text-yellow-500 ease-in-out duration-300'>TECH</Link>
        // <a href='#team-section' className='px-5 py-2 text-xs md:text-lg hover:text-yellow-500 ease-in-out duration-300'>ABOUT</a>
        // <a href='#faq-section' className='px-5 py-2 text-xs md:text-lg hover:text-yellow-500 ease-in-out duration-300'>FAQ</a>
        //         </ul>
        //     </div>
        // </div>
    );
};

export default Navbar;