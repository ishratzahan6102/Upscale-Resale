import React from 'react';

const AdvertiseCard = ({ad}) => {
    const {img,itemName } = ad
    return (
        <div className="hero bg-white text-white">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <img src={img} className='shadow-lg'/>
                    <p className='text-2xl font-bold '>{itemName}</p>
                    </div>
                </div>
        </div>
            
                
    );
};

export default AdvertiseCard;