import React from 'react';
import logo1 from '../../../assets/Phones/icons8-open-box-50.png'
import logo2 from '../../../assets/Phones/icons8-coins-50.png'
import logo3 from '../../../assets/Phones/icons8-campaign-customer-50.png'

const Services = () => {
    return (
        <div className='max-w-[1100px] mx-auto my-4 px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-6 py-10'>
            <div className='text-center flex flex-col gap-6 items-center' >
                <div className="avatar">
                    <div className="w-16 ">
                    <img src={logo1} />
                    </div>
                </div>
                <p className='text-black font-semibold text-xl'>Free delivery</p>
                <p className='text-gray-500 text-base'>And free returns. See checkout <br/> for delivery dates.</p>
            </div>
            <div className='text-center flex flex-col gap-6 items-center' >
                <div className="avatar">
                    <div className="w-16 ">
                    <img src={logo2} />
                    </div>
                </div>
                <p className='text-black font-semibold text-xl'>Pay monthly at 0% APR</p>
                <p className='text-gray-500 text-base'>Choose to check out with Apple <br/> Card Monthly Installments.</p>
            </div>
            <div className='text-center flex flex-col gap-6 items-center' >
                <div className="avatar">
                    <div className="w-16 ">
                    <img src={logo3} />
                    </div>
                </div>
                <p className='text-black font-semibold text-xl'>Personalize it</p>
                <p className='text-gray-500 text-base'>Engrave your device with your <br/> name or a personal note.</p>
            </div>

           
        </div>
    );
};

export default Services;