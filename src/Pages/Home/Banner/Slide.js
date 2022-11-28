import React from 'react';


const Slide = ({slide}) => {
    const {image,id, prev, next} = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img '>
            <img src={image} className="w-full  h-full rounded-xl" />
        </div>
        
    
    
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${prev}`} className="btn btn-circle btn-outline">❮</a> 
          <a href={`#slide${next}`} className="btn btn-circle btn-primary ml-2">❯</a>
        </div>
      </div>
    );
};

export default Slide;