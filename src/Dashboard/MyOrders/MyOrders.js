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
            const res = await fetch(url, {
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
        fetch(`http://localhost:5000/bookings/${booking._id}`, {
            method: "DELETE",
            // headers : {
            //     authorization : `bearer ${localStorage.getItem("accessToken")}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success("Deleted Successfully")
                }

            })
    }




    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="py-10  text-start px-6">

            <div>
                <h1 className='text-4xl font-bold text-black md:text-white mb-10'>ORDER</h1>

                <div className="overflow-x-auto ">
                    <table className="table text-center  table-compact w-full">
                        <thead>
                            <tr>
                                <th className=' '>Index</th>
                                <th className=' '>Image</th>
                                <th className=' '>Name</th>
                                <th className=' '>Price</th>
                                <th className=' '>Payment</th>
                                <th className=' '>Delete</th>

                            </tr>
                        </thead>
                        <tbody className='text-white'>
                            {bookings &&
                                bookings?.map((booking, i) =>
                                    <tr key={booking._id}>
                                        <th>{i + 1}</th>
                                        <td className='w-16 avatar'>
                                            <div className="">
                                                <img className='w-20 mx-auto' src={booking.picture} alt='' />
                                            </div>
                                        </td>
                                        <td>{booking.itemName}</td>


                                        <td>{booking.price}</td>
                                        <td>
                                            <label className="btn btn-sm text-black bg-green-500">Pay Now</label>
                                        </td>
                                        <td>
                                            <label onClick={() => setDeletingDoctor(booking)} htmlFor="confirmation-modal" className="btn btn-sm btn-info">Delete</label>
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
        </div>
    );
};

export default MyOrders;