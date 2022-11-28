import React from 'react';
import Review from './Review';
import ReviewImage from './ReviewImage';

const Reviews = () => {
    return (
       <div className='my-40'>
       
         <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6  '>
            <ReviewImage></ReviewImage>
            <Review></Review>
        </div>
       </div>
    );
};

export default Reviews;