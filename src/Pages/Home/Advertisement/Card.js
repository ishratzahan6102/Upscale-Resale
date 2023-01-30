import React from 'react';
import { FaHeart, FaSearch, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Card.css'


const Card = ({card}) => {
    const {img,itemName,price} =card
    return (
        <div>
            <div className="card mx-auto h-48 rounded-sm  bg-white p-2 ">
                            <img  src={img} className='w-44  relative mx-auto ' alt="Shoes" />
                            <div className="px-4 product-card lg:text-start">
                                <p className="text-gray-700 font-bold text-xl lg:text-sm">{itemName}</p>
                                <p className='text-gray-500 text-sm '>{price}</p>
                            </div>
                        </div>
        </div>
    );
};

export default Card;