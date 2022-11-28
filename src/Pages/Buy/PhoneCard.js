import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/Context';


const PhoneCard = ({ phone, setPhone, handleUpdate }) => {

    const { user } = useContext(AuthContext)
    const { id, resale_price, original_price, version_name, seller_name, location, published_date, years_of_use, picture, status } = phone


    

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
        fetch(`http://localhost:5000/wishList`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
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
        <div className="card card-side bg-primary shadow-xl">

            <figure className='p-6'><img className='h-60' src={picture} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{version_name}</h2>
                <small>Seller: {seller_name}</small>
                <small>Resale Price: {resale_price} <span className='text-red-700'><s>{original_price}</s></span></small>
                <small>Location: {location}</small>
                <small>Published on: {published_date}</small>
                <small>Years of used: {years_of_use}</small>
                <div className="card-actions justify-end mt-6">

                    <td>{
                        phone?.wishListed !== "yes" &&
                        <label className="btn btn-xs bg-green-700" onClick={() => handleWishList(phone)}>Report To Admin</label>
                    }

                        {
                            phone?.wishListed === "yes" &&
                            <button className='btn btn-xs btn-secondary'>Report To Admin</button>
                        }
                    </td>


                    <label onClick={() => setPhone(phone)} htmlFor="booking-modal" className="btn  btn-xs" >Order Now</label>

                </div>
            </div>


        </div>
    );
};

export default PhoneCard;