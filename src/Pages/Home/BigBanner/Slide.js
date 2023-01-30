import React from 'react';


// import required modules

const Slide = ({ slide }) => {
  const { img, id, prev, next } = slide
  return (

    <div id={`slide${id}`} className="carousel-item text-white relative w-full">
      <div className='carousel-img mx-auto'>
        <img src={img} className="w-full banner-img  " />
      </div>

      <div className='flex'>

        <div className='text-start font-sans ' >
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