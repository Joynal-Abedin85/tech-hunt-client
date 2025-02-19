import React from 'react';
import Navbar from './Navbar';
// import Banner from '../../components/Banner';
import Featured from '../../components/Featured';
import Slider from '../../components/Slider';
import Tranding from './Tranding';
import Promotion from '../home/Promotion';
import Review from '../home/Review';
import News from '../home/News';
import Blog from '../home/Blog';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            {/* <Featured></Featured> */}
            <Tranding></Tranding>
            <Promotion></Promotion>
            <Review></Review>
            <Blog></Blog>
            <News></News>
        </div>
    );
};

export default Home;