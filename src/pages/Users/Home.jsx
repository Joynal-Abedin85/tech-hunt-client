import React from 'react';
import Navbar from './Navbar';
// import Banner from '../../components/Banner';
import Featured from '../../components/Featured';
import Slider from '../../components/Slider';
import Tranding from './Tranding';
import Promotion from '../home/Promotion';
import Review from '../home/Review';
import News from '../home/News';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Featured></Featured>
            <Tranding></Tranding>
            <Promotion></Promotion>
            <Review></Review>
            <News></News>
        </div>
    );
};

export default Home;