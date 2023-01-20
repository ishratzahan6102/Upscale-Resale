import React from 'react';
import './Banner.css'

const Slide = ({ slide }) => {
  const { image, id, prev, next } = slide
  return (
    <div id={`slide${id}`} className="carousel-item text-white relative w-full">
            <div className='carousel-img mx-auto'>
                <img src={image} className="w-full  banner-img  rounded-none" />
            </div>

            <div className='flex'>

                
        
                <div className='text-start font-sans ' >
                    
                    <div className="absolute transform -translate-y-1/2 w-4/5 lg:w-3/5 lg:left-52 left-10 lg:top-52 top-32">

                        <h1 className=' text-3xl text-gray-700 font-bold '>
                            Welcome To <br /> Astor 
                        </h1>
                    </div>

                    <div className="absolute transform  text-white  -translate-y-1/2 w-2/5 lg:left-52  left-10 lg:top-72 top-52 ">
                        <button className="btn rounded-none  btn-primary text-white mr-4">
                            Shop Now
                        </button>

                    </div>
                </div>
                

                <div className="absolute hidden lg:flex justify-between justify-end transform -translate-y-1/2 left-5 right-5 bottom-28 lg:bottom-1/2">
                    <a href={`#slide${prev}`} className="btn btn-circle  btn-primary  ">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle  btn-primary ">❯</a>
                </div>
            </div>



        </div>
  );
};

export default Slide;