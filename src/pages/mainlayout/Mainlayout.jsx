import React from 'react';
import Navbar from '../Users/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Users/Footer';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Mainlayout;