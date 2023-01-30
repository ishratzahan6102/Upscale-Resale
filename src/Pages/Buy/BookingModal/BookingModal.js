import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/Context';

const BookingModal = ({ phone, setPhone, refetch, setBooked }) => {

    const { user } = useContext(AuthContext)
    const { id, resale_price, original_price, brand, version_name, seller_name, location, published_date, years_of_use, picture } = phone

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const buyerName = form.name.value;
        const location = form.address.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;


        const booking = {
            buyerName: buyerName,
            itemName: version_name,
            location: location,
            email: email,
            phoneNumber: phoneNumber,
            price: resale_price,
            picture: picture
        }

        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setPhone(null)
                    toast.success('Order Confirmed')
                    setBooked(true)
                    refetch()
                }
                else {
                    toast.error(data.message)
                }


            })


    }

    return (
        <div className='text-white'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn bg-primary btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-3xl text-center pt-10 font-bold">Request an order </h3>
                    <form onSubmit={handleBooking} className='mt-10 '>

                        <input type="text" name='item' defaultValue={version_name} disabled placeholder="Item Name" className="input  w-full rounded-sm mb-4 input-bordered " /><br />

                        <input type="text" name='price' defaultValue={resale_price} disabled placeholder="Price" className="input w-full rounded-sm mb-4 input-bordered " /> <br />

                        <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="Your Name" className="input w-full rounded-sm mb-4 input-bordered " /> <br />

                        <input type="text" name='email' defaultValue={user?.email} readOnly placeholder="Email Address" className="input w-full rounded-sm mb-4 input-bordered " /> <br />

                        <input type="text" name='address' placeholder="Address" className="input w-full rounded-sm mb-4 input-bordered " /> <br />

                        <input type="text" name='phoneNumber' placeholder="Phone Number" className="input w-full rounded-sm mb-4 input-bordered " /> <br />

                        <input type="Submit" value="Submit" className="input w-1/2  bg-primary text-white rounded-sm mb-4  " />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;