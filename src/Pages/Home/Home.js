import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';


import Cards from './Cards/Cards';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div className='my-20 mb-60 lg:text-start text-center'>
            <h1 className='text-4xl text-white font-bold'>Buy & Resale Phones</h1>
            <small className='text-gray-400'>at best price</small>
           <Banner></Banner>
            <Cards></Cards>
            <Advertise></Advertise>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;