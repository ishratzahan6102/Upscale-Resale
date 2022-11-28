import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Pages/Contexts/Context';
import Loading from '../../Pages/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const {data : users = [], refetch, isLoading} = useQuery({
        queryKey : ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            const data = await res.json()
            return data;
        }
    })

    const {user} = useContext(AuthContext)
    const [deletingDoctor, setDeletingDoctor] = useState(null)


    const closeModal = () => {
        setDeletingDoctor(null)
    }
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

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
          method: "PUT",
          headers : {
            authorization : `bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(res => res.json())
        .then(data => {
        if(data.modifiedCount > 0){
          toast.success("User Added To Admin Panel")
          refetch()
        }
        })
      }

      if(isLoading){
        return <Loading></Loading>
      }
  
    return (
        <div className='my-10 mb-60 text-start' >
            <h1 className='text-4xl  font-bold  text-white my-10'>All Users</h1>
            <div className="overflow-x-auto text-gray-300">
                <table className="table text-center  w-full">
                    <thead >
                        <tr>
                            
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Take Action</th>
                            <th>Delete</th>
                           
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => 
                            <tr key={user._id}>
                            <td>{i+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.account}</td>
                            <td>{
                                user?.role !== "admin" && 
                                <button onClick={() => handleMakeAdmin(user._id)}  className='btn btn-xs btn-success'>Make Admin</button>
                                }
                                {
                                user?.role === "admin" && 
                                <button   className='btn btn-xs btn-accent'> Admin</button>
                                }
                           
                            
                            </td>
                            <td>{
                                user?.role !== "admin" && 
                                <label  onClick={() => setDeletingDoctor(users)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
                                }
                                {
                                user?.role === "admin" && 
                                <p></p>
                                }
                           
                            
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

export default AllUsers;