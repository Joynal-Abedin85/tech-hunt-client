import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import img1 from '../assets/home/01.jpg'
// import img2 from '../assets/home/02.jpg'
// import img3 from '../assets/home/03.png'
// import img4 from '../assets/home/04.jpg'
// import img5 from '../assets/home/05.png'
// import img6 from '../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel>
        <div className='h-full'>
            <img className='h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjw26Q5KohKK5OOU9thutXuJlIG6wSCdwlUg&s' />
        </div>
        <div className='h-full'>
            <img className='h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASg29HDgq2ilJH2-UZ86lYbwXZX1Fl0pFwA&s' />
        </div>
        <div className='h-full'>
            <img className='h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqqWkQDs2w1NH03uZg7GUyEE3PrZtmZsrbw&s' />
        </div>
        <div className='h-full'>
            <img  className='h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6sItk8TtfAe42gQtQYCjZHNgChABju8IMQ&s' />
        </div>
        <div className='h-full'>
            <img className='h-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdW5hz9UC925f6yqmfE43PUIWuHeQTSGUMqn98HCCd2p3W7H3fVaM6QNU0LIaUPxXWRHY&usqp=CAU' />
        </div>
        
    </Carousel>
    );
};

export default Banner;