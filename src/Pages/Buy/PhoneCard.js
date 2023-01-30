import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/Context';
import BookingModal from './BookingModal/BookingModal';
import { FaMailBulk, FaStar, FaTruck } from 'react-icons/fa';


const PhoneCard = ({ category, handleUpdate }) => {
    const [phone, setPhone] = useState(null)
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { _id, resale_price, original_price, brand, version_name, seller_name, location, published_date, years_of_use, picture } = category




    const handleWishList = () => {

        const wishlist = {
            itemName: version_name,
            location: location,
            email: user?.email,
            used: years_of_use,
            price: resale_price,
            picture: picture,
            isWishlisted: "Yes"
        }

        console.log(wishlist)
        fetch('http://localhost:5000/wishList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishlist)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setPhone(null)
                    toast.success('Added to wishlist!')
                    navigate('/wishList')
                }
                else {
                    toast.error(data.message)
                }
            })

    }




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 ">

            <div>
                <img className='w-full h-80  mx-auto px-10 py-4 md:p-4 bg-white' src={picture} alt="" />
            </div>
            <div className="">
                <h2 className="text-2xl text-white-700 ">{version_name} </h2>
                <p className='text-white-400'>{seller_name}  </p>
                <p className='text-white-400 text-sm'>{location} </p>
                <p className='text-white-400 text-sm'>{published_date} </p>

                <div className='flex flex-row gap-4 mt-2'>
                    <div className="flex flex-row">
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                        <FaStar className='text-yellow-400'></FaStar>
                    </div>
                    <span className='text-white-400'>5 star reviews</span>
                </div>
                <p>Availability: <span className='text-green-600  font-semibold'>In stock</span></p>
                <p className='font-semibold mt-4 text-xl'>{resale_price} <span className='text-red-700'><s>{original_price}</s></span></p>
                <div className='flex flex-row text-white-700 mt-4 mb-4'>
                    <FaTruck className='mt-1 mr-2'></FaTruck>
                    <span className='mr-6'>Shipping</span>


                </div>


                <div className="card-actions justify-start mt-6">

                    <td>

                        <label className="btn btn-primary normal-case rounded-sm" onClick={() => handleWishList()}>Add To Wishlist</label>



                    </td>


                    <label onClick={() => setPhone(category)} htmlFor="booking-modal" className="btn btn-warning rounded-sm normal-case" >Order Now</label>

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



