import React from 'react';
import './Banner.css'
import Slide from './Slide';
const Banner = () => {
    const bannerData = [
        {
            image: "https://cdn.shopify.com/s/files/1/0023/4104/4283/files/mone_750x.jpg?v=1643881956",
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0023/4104/4283/files/yuy_750x.jpg?v=1643868865",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: "https://cdn.shopify.com/s/files/1/0023/4104/4283/files/ttytyt_750x.jpg?v=1643868414",
            prev: 2,
            id: 3,
            next: 1
        },
       
    ]
    return (
        <div className="carousel w-full pt-0 lg:pt-10 max-w-[1100px] mx-auto  lg:px-0">
           {
                bannerData.map(slide => <Slide 
                    key={slide.id}
                    slide={slide}
                ></Slide>)
           }
        </div>
    );
};

export default Banner;