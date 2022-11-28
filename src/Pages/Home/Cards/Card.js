import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../../Buy/BookingModal/BookingModal';

const Card = ({card}) => {
    const {brand, _id , img} = card





    return (
        <div className='text-center'>
            <div className="w-72 mx-auto py-2 text-center bg-white text-black shadow-xl">
            <figure><img className='h-60 mx-auto w-60' src={img} alt="Shoes" /></figure>
        
               
              

                <div className="card-actions my-2 justify-center">
                <h2 className="card-title ">
                    {brand}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Choose your desired collection</p>
                        <button 
                        
                        className="btn btn-primary btn-sm">
                            <Link to={`/category/${_id}`}>Show All</Link>   
                        </button>
             
                </div>
        </div>
       
        </div>
        
    );
};

export default Card;