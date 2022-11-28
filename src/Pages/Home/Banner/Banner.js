import React from 'react';
import './Banner.css'
import Slide from './Slide';
const Banner = () => {
    const bannerData = [
        {
            image: "https://www.mobilepoint.com.bd/wp-content/uploads/2022/11/vivo-x80.png",
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: "https://www.mobilepoint.com.bd/wp-content/uploads/2022/11/realmi.jpg",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: "https://www.mobilepoint.com.bd/wp-content/uploads/2022/11/oppo-f19-pro.png",
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: "https://www.mobilepoint.com.bd/wp-content/uploads/2022/11/xiaomi-redmi-note-11-pro.png",
            prev: 3,
            id: 4,
            next: 1
        },
    ]
    return (
        <div className="carousel w-full py-10">
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