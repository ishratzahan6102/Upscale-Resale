import React from 'react';
import img from "../assets/Phones/Nokia/404.png"

const PageNotFound = () => {
    return (
        <div className='lg:m-72 sm:m-40 align-middle'>
            <h1 className='lg:text-4xl sm:text-2xl text-white font-bold'>Sorry, page not found!</h1>
           <img className='' src={img} alt="" /> 
        </div>
    );
};

export default PageNotFound;