import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Pages/Contexts/Context';
import Loading from '../../Pages/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const WishList = () => {
    const {user} = useContext(AuthContext)
    const [deletingWish, setDeletingWish] = useState(null)


    const closeModal = () => {
        setDeletingWish(null)
    }

    const url = `http://localhost:5000/wishList?email=${user?.email}`;

    const { data: wishlist = [], isLoading, refetch } = useQuery({

        queryKey: ['wishList', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
            });

            const data = await res.json();
            return data;
        }
    })


    const handleDeleteWish = (wish) => {
        console.log(wish)
        fetch(`http://localhost:5000/wishList/${wish._id}`, {
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


    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div className='py-20 text-center max-w-[1200px] mx-auto p-10'>
            <div className='text-center'>
            <h1 className='text-4xl font-bold  text-black md:text-white mb-10'>WISHLIST</h1>
           
           <div className="overflow-x-auto">
               <table className="table w-full">

                   <thead>
                       <tr>
                           <th>Index</th>
                           <th>Image</th>
                           <th>Name</th>
                           <th>Price</th>
                           <th>Delete</th>
                           
                       </tr>
                   </thead>
                   <tbody className=' my-4'>

                       {   wishlist && 
                           wishlist?.map((wish, i) =>
                               <tr key={wish._id}>
                                   <th>{i + 1}</th>
                                   <td><div className="avatar">
                                       <div className="w-12">
                                           <img src={wish.picture}  alt="photo"/>
                                       </div>
                                   </div></td>
                                   <td>{wish.itemName}</td>
                                  
                                   <td>{wish.price}</td>
                   
                               
                                   <td>
                                       <label onClick={() => setDeletingWish(wish)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                   </td>
                               </tr>)
                       }

                   </tbody>
               </table>
           </div>
           {
               deletingWish && <ConfirmationModal
               title={`Are you sure tou want to delete this?`}
               message={`If you delete ${deletingWish.name} it can not be undone.`}
               closeModal={closeModal}
               successButtonName="Delete"
               successAction={handleDeleteWish}
               modalData={deletingWish}
               ></ConfirmationModal>
           }
          
            </div>
        </div>
    );
};

export default WishList;