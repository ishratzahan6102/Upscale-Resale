import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Pages/Contexts/Context';
import Loading from '../../Pages/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const PostedItems = () => {
    const {user} = useContext(AuthContext)
    const [deletingDoctor, setDeletingDoctor] = useState(null)


    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const handleItems = () => {

    }
    const { data: items, isLoading, refetch } = useQuery({
        queryKey: ['addItems'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/addItems`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                const data = await res.json()
                return data

            }
            catch (errors) {

            }
        }
    })


    const handleDeleteDoctor = (item) => {
        console.log(item)
        fetch(`http://localhost:5000/addItems/${item._id}`, {
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

    const handleAdvertise = (id) => {
        fetch(`http://localhost:5000/addItems/${id}`, {
          method: "PUT",
          headers : {
            authorization : `bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(res => res.json())
        .then(data => {
        if(data.modifiedCount > 0){
          toast.success("Successfully added for advertisement!")
          refetch()
        }
        })

        
      }
      


    if(isLoading){
        return <Loading></Loading>
    }
    

    return (
        <div className='text-start my-20 mb-60 '>
            <h1 className='text-4xl  font-bold  text-secondary mt-10'>Dear, {user?.displayName}!</h1>
            <h1 className='lg:text-3xl sm:text-xl font-bold mb-10'>{items?.length} items posted by you for resale.</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Pending</th>
                            <th>Delete Post</th>
                        </tr>
                    </thead>
                    <tbody className=' my-4'>

                        {   items && 
                            items?.map((item, i) =>
                                <tr key={item._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12">
                                            <img src={item.img}  alt="doctors-photo"/>
                                        </div>
                                    </div></td>
                                    <td>{item.itemName}</td>
                                    <td>{item.price}</td>
                                    <td>Unsold</td>
                                    <td>{
                                            item?.advertise !== "advertised" && 
                                            <button onClick={() => handleAdvertise(item._id)}  className='btn btn-xs btn-success'>Advertise</button> 
                                        }
                                        
                                        {
                                          item?.advertise === "advertised" &&   
                                          <button className='btn btn-xs btn-primary'>Advertised</button> 
                                        }
                                        </td>

                                    <td>
                                        <label onClick={() => setDeletingDoctor(item)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
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

export default PostedItems;