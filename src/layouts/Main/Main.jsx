import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Static/Footer/Footer';
import Navbar from '../../Components/Static/Header/Navbar';
import eclipse1 from '../../assets/BGs/Ellipse 1.svg';
import eclipse2 from '../../assets/BGs/Ellipse 2.svg';

const Main = () => {
    return (
        <div className='main'>
            <img src={eclipse1} alt="eclipse-1" className='absolute right-0 top-40 z-0' />
            <img src={eclipse2} alt="eclipse-2" className='absolute' />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;