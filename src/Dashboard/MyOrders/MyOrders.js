import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Pages/Contexts/Context';
import Loading from '../../Pages/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyOrders = () => {

    const { user } = useContext(AuthContext)

    const url = `https://astor-server-ochre.vercel.app/bookings?email=${user?.email}`;

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
            //   headers: {
            //     authorization : `bearer ${localStorage.getItem('accessToken')}`
            //   }
            });

            const data = await res.json();
            return data;
        }
    })
  

    const handleDeleteDoctor = (booking) => {
        console.log(booking)
        fetch(`https://astor-server-ochre.vercel.app/bookings/${booking._id}`, {
            method : "DELETE",
            // headers : {
            //     authorization : `bearer ${localStorage.getItem("accessToken")}`
            // }
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
        <div className="my-10 mb-60 text-start  px-6">
           
                <h1 className='text-2xl font-bold text-black mt-10'>My orders ({bookings.length})</h1>
          
            <div className="overflow-x-auto ">
                <table className="table text-center table-compact w-full">
                    <thead className=''>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Make Payment</th>
                            <th>Delete Order</th>
    
                        </tr>
                    </thead>
                    <tbody>
                        {   bookings &&
                            bookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.itemName}</td>
                                    <td className='w-16 avatar'>
                                            <div className="">
                                                <img className='w-16 mx-auto' src={booking.picture} alt='' />
                                            </div>
                                    </td>
                                   
                                    <td>{booking.price}</td>
                                    <td>
                                        <label className="btn btn-xs btn-outline">Pay Now</label>
                                    </td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(booking)} htmlFor="confirmation-modal" className="btn btn-xs btn-primary">Delete</label>
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