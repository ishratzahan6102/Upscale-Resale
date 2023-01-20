import React, { useEffect, useState } from 'react';
import PhoneCard from '../../Buy/PhoneCard';
import Card from './Card';

const Cards = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        fetch(`https://astor-server-ochre.vercel.app/allPhones`)
        .then(res => res.json())
        .then(data => setPhones(data))

    }, [phones])




    return (
        <div className='py-20 text-center max-w-[1100px] mx-auto px-6 lg:px-0'>
             <h1 className='text-black font-bold text-3xl lg:text-4xl mb-2'>New Collection</h1>
            <p className='text-gray-600 '>Check out the categories</p>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-6 mt-10' >
                {
                    phones.map(card => <Card
                        key={card._id}
                        card={card}
                        ></Card>)
                }
                
            </div>
            
        </div>
    );
};

export default Cards;