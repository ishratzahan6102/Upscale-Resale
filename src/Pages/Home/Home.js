import React from 'react';
import Advertise from './Advertise/Advertise';
import Ad from './Advertisement/Ad';
import Banner from './Banner/Banner';
import BigBanner from './BigBanner/BigBanner';


import Cards from './Cards/Cards';
import ExclusiveCollection from './ExclusiveCollection/ExclusiveCollection';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import WideBanner from './WideBanner/WideBanner';

const Home = () => {
    return (
        <div className=' lg:text-start text-center'>
            <Banner></Banner>
            <Services></Services>
            <Cards></Cards>
            <ExclusiveCollection></ExclusiveCollection>
            <BigBanner></BigBanner> 
            <Ad></Ad>
            <WideBanner></WideBanner>
            
        </div>
    );
};

export default Home;