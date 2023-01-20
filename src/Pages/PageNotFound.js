import React from 'react';
import img from "../assets/Phones/Nokia/404.png"

const PageNotFound = () => {
    return (
        <div className='my-20 mb-40 align-middle'>
            <h1 className='lg:text-4xl sm:text-2xl text-white font-bold'>Sorry, page not found!</h1>
           <img className='w-1/2 mx-auto' src={img} alt="" /> 
        </div>
    );
};

export default PageNotFound;