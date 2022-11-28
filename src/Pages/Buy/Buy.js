import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import PhoneCard from './PhoneCard';

const Buy = () => {
    const categories = useLoaderData()
    const {_id, phones, brand} = categories


    const [phone, setPhone] = useState(null)
    


    return (
        <div className='max-w-[1100px] mx-auto my-20'>
            
            <h1 className='text-4xl font-bold text-white'>{brand} Brand Collection</h1>
            <div className='grid lg:grid-cols-2 mx-auto sm:grid-cols-1 gap-10 my-10'>
                    {phones.map(phone => <PhoneCard
                    key={phone.id}
                    phone={phone}
                    setPhone={setPhone}
                    ></PhoneCard>)}
                </div>
                {
                    phone &&
                    <BookingModal
                    phone={phone}
                    setPhone={setPhone}
                   
                    ></BookingModal>
                }
        </div>
    );
};

export default Buy;