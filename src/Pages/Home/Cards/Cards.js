import React, { useEffect, useState } from 'react';
import PhoneCard from '../../Buy/PhoneCard';
import Card from './Card';

const Cards = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/category`)
        .then(res => res.json())
        .then(data => setPhones(data))

    }, [phones])




    return (
        <div className='my-20 justify-center'>
            <small>Have a look on our</small>
            <h1 className='text-4xl  font-bold text-white mb-10 '>Categories</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-20' >
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