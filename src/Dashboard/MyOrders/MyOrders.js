import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Pages/Contexts/Context';
import Loading from '../../Pages/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const [deletingDoctor, setDeletingDoctor] = useState(null)


    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const handleDoctor = () => {

    }
    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
              headers: {
                authorization : `bearer ${localStorage.getItem('accessToken')}`
              }
            });

            const data = await res.json();
            return data;
        }
    })

    const handleDeleteDoctor = (booking) => {
        console.log(booking)
        fetch(`http://localhost:5000/bookings/${booking._id}`, {
            method : "DELETE",
            headers : {
                authorization : `bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch()
                toast.success("Deleted Successfully")
            }
            
        })
    }



    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-start text-white my-10'>
            <div className="indicator font-bold text-2xl">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span>My Orders</span>
            </div>
            <div className="overflow-x-auto text-white">
                <table className="table text-center table-compact w-full">
                    <thead className=''>
                        <tr>
                            <th>Index</th>
                            <th>Item Ordered</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Make Payment</th>
                            <th>Delete Order</th>
    
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img src={booking.picture} alt='' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{booking.itemName}</td>
                                    <td>{booking.price}</td>
                                    <td>
                                        <label className="btn btn-xs btn-success">Pay Now</label>
                                    </td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(booking)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>


            {
                deletingDoctor && <ConfirmationModal
                title={`Are you sure tou want to delete this?`}
                message={`If you delete ${deletingDoctor.name} it can not be undone.`}
                closeModal={closeModal}
                successButtonName="Delete"
                successAction={handleDeleteDoctor}
                modalData={deletingDoctor}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyOrders;