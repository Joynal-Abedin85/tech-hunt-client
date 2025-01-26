import React from 'react';
import Navbar from './Navbar';
import Banner from '../../components/Banner';
import Featured from '../../components/Featured';
import Slider from '../../components/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Featured></Featured>
        </div>
    );
};

export default Home;