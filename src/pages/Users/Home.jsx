import React from 'react';
import Navbar from './Navbar';
import Banner from '../../components/Banner';
import Featured from '../../components/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
        </div>
    );
};

export default Home;