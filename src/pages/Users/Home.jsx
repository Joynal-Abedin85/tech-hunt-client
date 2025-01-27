import React from 'react';
import Navbar from './Navbar';
// import Banner from '../../components/Banner';
import Featured from '../../components/Featured';
import Slider from '../../components/Slider';
import Tranding from './Tranding';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Featured></Featured>
            <Tranding></Tranding>
        </div>
    );
};

export default Home;