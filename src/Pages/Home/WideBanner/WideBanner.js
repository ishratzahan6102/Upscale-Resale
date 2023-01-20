import React from 'react';

const WideBanner = () => {
  return (
    <div className='flex flex-col gap-6 lg:flex-row justify-between text-white bg-gray-900 p-10 mb-0  items-center'>
      <div>
        <p className='text-2xl font-semibold'>Get Daily Offer & Deal</p>
        <p>Get the latest news and updates from Astor</p>
      </div>
      <div className="form-control text-white ">
        
        <label className="input-group">
          <span>Email</span>
          <input type="text" placeholder="info@site.com" className="input input-bordered" />
        </label>
      </div>
    </div>
  );
};

export default WideBanner;