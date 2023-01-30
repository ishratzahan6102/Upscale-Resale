import React from 'react';
import banner from '../../../assets/Exclusive/bigbanner.jpg'
import banner2 from '../../../assets/Exclusive/IPHONE.gif'
import AdSlider from './AdSlider';



const BigBanner = () => {
    return (
        <div className='max-w-[1200px] mx-auto ' >
            <div className='grid grid-cols-1 gap-2 items-start '>
            
           <div>
           <img className='w-full ' src={banner2}/>
           </div>
           
        </div>
        </div>
    );
};

export default BigBanner;