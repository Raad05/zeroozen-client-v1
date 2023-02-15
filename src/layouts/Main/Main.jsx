import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Static/Footer/Footer';
import Navbar from '../../Components/Static/Header/Navbar';

const Main = () => {
    return (
        <div className='main'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;