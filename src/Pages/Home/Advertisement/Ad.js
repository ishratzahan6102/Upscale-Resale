import { useQuery } from '@tanstack/react-query';
import React from 'react';
import banner from '../../../assets/Phones/Nokia/long-img.png'
import Card from './Card.css';
import w1 from '../../../assets/Exclusive/f1.png'
import w2 from '../../../assets/Exclusive/f2.jpg'
import w3 from '../../../assets/Exclusive/f3.png'
import w4 from '../../../assets/Exclusive/f4.jpg'


const Ad = () => {
    // const { data: advertised = [], refetch, isLoading } = useQuery({
    //     queryKey: ['advertised'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://astor-server-ochre.vercel.app/advertised`)
    //         const data = await res.json()
    //         console.log(data)
    //         return data
    //     }
    // })
    return (
        <div className='py-28 text-center max-w-[1100px] mx-auto  px-6 lg:px-0'>
            <h1 className='text-black font-bold text-3xl lg:text-4xl'>Check Your Desired <br/>Collection</h1>
           
            <div className='flex  flex-col lg:flex-row gap-2 mt-20 '>
                <div className='w-full lg:w-2/6'>
                    <img className='w-full' src={banner} />
                </div>
                <div className='w-full lg:w-5/6 '>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-14 overflow-hidden'>
                        <div className="card mx-auto p-4 w-full  lg:w-60 ">
                            <img src={w1} className=' relative mx-auto ' alt="Shoes" />
                            <div className="p-4 product-card lg:text-start">
                                <p className="text-black text-xl lg:text-sm">Astor watch series 4</p>
                                <p className='text-gray-700 text-sm '>$999.00</p>
                            </div>
                        </div>
                        <div className="card mx-auto p-4 w-full  lg:w-60 ">
                            <img src={w2} className=' relative mx-auto' alt="Shoes" />
                            <div className="p-4 product-card lg:text-start">
                                <p className="text-black text-xl lg:text-sm">Astor watch series 5</p>
                                <p className='text-gray-700 text-sm '>$999.00</p>
                            </div>
                        </div>
                        <div className="card mx-auto p-4 w-full  lg:w-60 ">
                            <img src={w3} className=' relative mx-auto' alt="Shoes" />
                            <div className="p-4 product-card lg:text-start">
                                <p className="text-black text-xl lg:text-sm">Gold watch series2</p>
                                <p className='text-gray-700 text-sm '>$999.00</p>
                            </div>
                        </div>
                        <div className="card mx-auto p-4 w-full  lg:w-60 ">
                            <img src={w4} className=' relative mx-auto' alt="Shoes" />
                            <div className="p-4 product-card lg:text-start">
                                <p className="text-black text-xl lg:text-sm">Astor watch series 3</p>
                                <p className='text-gray-700 text-sm '>$999.00</p>
                            </div>
                        </div>
                        <div className="card mx-auto p-4 w-full  lg:w-60 ">
                            <img src={w2} className=' relative mx-auto' alt="Shoes" />
                            <div className="p-4 product-card lg:text-start">
                                <p className="text-black text-xl lg:text-sm">Astor watch series 4</p>
                                <p className='text-gray-700 text-sm '>$999.00</p>
                            </div>
                        </div>
                        <div className="card mx-auto p-4 w-full  lg:w-60 ">
                            <img src={w3} className=' relative mx-auto' alt="Shoes" />
                            <div className="p-4 product-card lg:text-start">
                                <p className="text-black text-xl lg:text-sm">Astor watch series 3</p>
                                <p className='text-gray-700 text-sm '>$999.00</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Ad;