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
    const { data: wishLists = [], isLoading, refetch } = useQuery({
        queryKey: ['wishList'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://astor-server-ochre.vercel.app/wishList`, {
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


    const handleDeleteWish = (wish) => {
        console.log(wish)
        fetch(`https://astor-server-ochre.vercel.app/wishList/${wish._id}`, {
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
        <div className='my-10 mb-60 text-start px-6'>
            <h1 className='text-2xl  font-bold  text-black mt-10'>Admin, {user?.displayName}</h1>
            <h1 className='text-gray-500 text-sm font-bold mb-2'>{wishLists?.length} items reported by the customers.</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                            
                        </tr>
                    </thead>
                    <tbody className=' my-4'>

                        {   wishLists && 
                            wishLists?.map((wish, i) =>
                                <tr key={wish._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12">
                                            <img src={wish.img}  alt="photo"/>
                                        </div>
                                    </div></td>
                                    <td>{wish.itemName}</td>
                                    <td>{wish.userName}</td>
                                    <td>{wish.price}</td>
                    
                                    <td>
                                        <label className="text-gray-300">Noted</label>
                                    </td>
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
    );
};

export default WishList;