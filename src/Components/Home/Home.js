import React from 'react';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products></Products>
            <Experience></Experience>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;