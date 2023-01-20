import React from 'react';
import Review from './Review';
import ReviewImage from './ReviewImage';

const Reviews = () => {
    return (
       <div className='my-40 text-center'>
         <h1 className='text-black font-bold text-4xl mb-2'>Feedback</h1>
            <p className='text-gray-600 '>Give us a feedback</p>
         <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6  '>
            <ReviewImage></ReviewImage>
            <Review></Review>
        </div>
       </div>
    );
};

export default Reviews;