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
import Footer from '../Users/Footer';
import Uniqe from '../home/Uniqe';


const Home = () => {
    return (
        <div className='text-[#46007f] bg-[#ead6fc]'>
            <Slider></Slider>
            {/* <Featured></Featured> */}
            <Tranding></Tranding>
            <Promotion></Promotion>
            <Review></Review>
            <Blog></Blog>
            <Uniqe></Uniqe>
            <News></News>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;