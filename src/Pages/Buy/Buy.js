import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Home/Cards/Cards';
import BookingModal from './BookingModal/BookingModal';
import PhoneCard from './PhoneCard';

const Buy = () => {
    const categories = useLoaderData()

    
    return (
        <div className='max-w-[1200px] p-6 md:p-0 pt-32 mx-auto  '>
            
            <h1 className='text-4xl font-bold text-center text-white'>Astor ipad Pro 2023</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                   {
                    categories.map(category => <PhoneCard
                    key={category._id}
                    category={category}
                    >
                    </PhoneCard>)
                   }
            </div>

           
                
        </div>
    );
};

export default Buy;