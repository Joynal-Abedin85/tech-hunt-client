import React from 'react';
import Navbar from '../Users/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Users/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='relative top-20'>
            <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Mainlayout;