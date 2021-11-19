import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-img">
        <div className="banner-text">
            <h1>FIND YOUR DREAM CAR</h1>
            <p>
            Most definitions of cars say that they run primarily on roads, seat one-to-eight people, <br /> have four wheels and mainly transport people rather than goods.
            </p>
            <button className="btn">Learn More</button>
        </div>
    </div>
    );
};

export default Banner;