import React from 'react';
import Lottie from "lottie-react";
import mobile from '../../../assets/70220-girl-is-capturing-pictures.json'
const WideBanner = () => {
  return (
    <div className='flex flex-col max-w-[1200px] gap-2 md:flex-row justify-center text-white  mx-auto  items-center'>
      <div className='w-full flex flex-row  justify-center md:justify-between md:mb-0 mb-8'>

        <div>
          <div className='text-start '>
            <p className='md:text-5xl text-3xl font-bold'>Get Daily Offer & <span className=''>Deal</span></p>
            <p>Get the latest news and updates from Astor</p>
          </div>
          <div className="form-control text-white  mt-6 ">

            <label className="input-group ">
              <span className='bg-blue-400 '>Email</span>
              <input type="text" placeholder="info@site.com" className="input  input-bordered" />
            </label>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-row justify-end'>
        <Lottie className='p-10' animationData={mobile} loop={true} />
      </div>
    </div>
  );
};

export default WideBanner;