import React from 'react';
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper';
import './Banner.css'
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import MovingText from 'react-moving-text'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


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
        <div className="carousel w-full pt-0 md:pt-10  max-w-[1100px] mx-auto  md:px-0">
            {/* {
                bannerData.map(slide => <Slide 
                    key={slide.id}
                    slide={slide}
                ></Slide>)
           } */}

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,


                }}
                navigation={false}
                modules={[Autoplay, Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div className='carousel-img'>
                    <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/mone_750x.jpg?v=1643881956" className="w-full banner-img  " />
                </div>

                    <div className='flex '>



                        <div className='text-start hidden md:flex ' >


                            <div className="absolute transform -translate-y-1/2 w-4/5 md:w-3/5 md:left-52 left-10 md:top-44 top-20">
                             
                                    <h1 className='text-3xl  md:text-5xl  md:text-black  text-white font-bold '>
                                        <span className='text-teal-300'>Welcome</span> to
                                    </h1>
                               

                                <span className='text-3xl  md:text-5xl font-bold md:text-black  text-white'>Astor</span>
                            </div>

                            <div className="absolute transform  md:text-black  text-white  -translate-y-1/2 w-2/5 md:left-52  left-10 md:top-72 top-52 ">
                                <button className="btn bg-teal-300 rounded uppercase  md:text-black  text-white mr-4  border-none ">
                                    Shop Now
                                </button>

                            </div>
                        </div>


                    </div></SwiperSlide>
                <SwiperSlide><div className='carousel-img mx-auto'>
                    <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/yuy_750x.jpg?v=1643868865" className="w-full banner-img  " />
                </div>

                    <div className='flex '>



                        <div className='text-start hidden md:flex ' >

                            <div className="absolute transform -translate-y-1/2 w-4/5 md:w-3/5 md:left-52 left-10 md:top-44 top-20">

                                <h1 className='text-3xl  md:text-5xl  md:text-black  text-white font-bold '>
                                <span className='text-orange-300'>Gadgets</span> at
                                </h1>
                                <span className='text-3xl  md:text-5xl font-bold md:text-black  text-white'>Low price</span>
                            </div>

                            <div className="absolute transform  md:text-black  text-white  -translate-y-1/2 w-2/5 md:left-52  left-10 md:top-72 top-52 ">
                                <button className="btn bg-orange-400  uppercase rounded  md:text-black  text-white mr-4  border-none ">
                                    Shop Now
                                </button>

                            </div>
                        </div>



                    </div></SwiperSlide>
                <SwiperSlide><div className='carousel-img mx-auto'>
                    <img src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/ttytyt_750x.jpg?v=1643868414" className="w-full banner-img  " />
                </div>

                    <div className='flex'>



                        <div className='text-start hidden md:flex ' >

                            <div className="absolute transform -translate-y-1/2  md:w-3/5 md:left-52 left-10 md:top-44 top-20">
                                <h1 className='text-3xl  md:text-5xl  md:text-black  text-white font-bold '>
                                    <span className='text-violet-400'>Check</span> latest
                                </h1>
                                <span className='text-3xl  md:text-5xl font-bold text-black'> <span className= 'md:text-black text-white'  >collection</span></span>
                            </div>

                            <div className="absolute transform  md:text-black  text-white  -translate-y-1/2 w-2/5 md:left-52  left-10 md:top-72 top-52 ">
                                <button className=" bg-violet-400 uppercase rounded  btn md:text-black  text-white mr-4  border-none ">
                                    Shop Now
                                </button>

                            </div>
                        </div>



                    </div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;