import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/Context';
import BookingModal from './BookingModal/BookingModal';
import { FaMailBulk, FaStar, FaTruck } from 'react-icons/fa';


const PhoneCard = ({ category, handleUpdate }) => {
    const [phone, setPhone] = useState(null)
    const { user } = useContext(AuthContext)
    const { id, resale_price, original_price, version_name, seller_name, location, published_date, years_of_use, picture, status } =  category


    

    const handleWishList = (data) => {
        
        const items = {
            itemName: version_name,
            seller_name: seller_name,
            userName: user?.displayName,
            email: user?.email,
            price: resale_price,
            img: picture,
            wishListed: "yes"

        }

        console.log(items)

        // // post item information to the database
        fetch(`https://astor-server-ochre.vercel.app/wishList`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
               
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success(`${version_name} is added successfully`)


            })

    }


    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white py-20 ">

           <div>
           <img className='w-96 mx-auto' src={picture} alt="" />
           </div>
            <div className="">
                <h2 className="text-2xl text-gray-700">{version_name} </h2>
                <p className='text-gray-400'>{seller_name}  <span className='text-gray-400 text-sm'>{location} </span>  </p>
                <span className='text-gray-400 text-sm'>{published_date} </span>
               
                <div className='flex flex-row gap-4 mt-8'>
                <div className="flex flex-row">
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                </div>
                <span className='text-gray-400'>No reviews</span>
                </div>
                <p>Availability: <span className='text-red-600  font-semibold'>Out of stock</span></p>
                <p className='font-semibold mt-8 text-xl'>{resale_price} <span className='text-red-700'><s>{original_price}</s></span></p>
                <div className='flex flex-row text-gray-700 mt-6 mb-10'>
                    <FaTruck className='mt-1 mr-2'></FaTruck>
                    <span className='mr-6'>Shipping</span>
                    <FaMailBulk className='mt-1 mr-2'></FaMailBulk>
                    <span>Ask about this product</span>
                </div>
                <div className='flex flex-row gap-10 items-center mb-6'>
                    <span className='text-gray-600'>Quantity:</span>
                    <div>
                    <input type="number" defaultValue="1" className="input input-bordered w-full max-w-xs" />
                        <hr/>
                    </div>
                </div>

                <div className="card-actions justify-start mt-6">

<td>{
    category?.wishListed !== "yes" &&
    <label className="btn " onClick={() => handleWishList(category)}>Report</label>
}

    {
        category?.wishListed === "yes" &&
        <button className='btn btn-outline btn-wide '>Report</button>
    }
</td>


<label onClick={() => setPhone(category)} htmlFor="booking-modal" className="btn btn-outline btn-wide" >Order Now</label>

</div> 


               
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

export default PhoneCard;



