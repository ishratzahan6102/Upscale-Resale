import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import PhoneCard from './PhoneCard';

const Buy = () => {
    const categories = useLoaderData()

    
    return (
        <div className='max-w-[1100px] p-6 mx-auto'>
            
            <h1 className='text-4xl font-bold text-white'>Brand Collection</h1>
            <div className='grid grid-cols-1 gap-10'>
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