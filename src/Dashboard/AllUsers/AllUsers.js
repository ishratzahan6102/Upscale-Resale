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
            const res = await fetch(`https://astor-server-ochre.vercel.app/users`)
            const data = await res.json()
            return data;
        }
    })

    const {user} = useContext(AuthContext)
    const [deletingUsers, setDeletingUsers] = useState(null)


    const closeModal = () => {
        setDeletingUsers(null)
    }
    const handleDeleteUser = (user) => {
      console.log(user)
      fetch(`https://astor-server-ochre.vercel.app/users/${user._id}`, {
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
        fetch(`https://astor-server-ochre.vercel.app/users/admin/${id}`, {
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
        <div className='my-10 mb-60 text-start px-6' >
            <h1 className='text-2xl  font-bold  text-black mt-10'>All Users ({users.length})</h1>
            <div className="overflow-x-auto">
                <table className="table text-center  w-full">
                    <thead >
                        <tr>
                            
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            {/* <th>Take Action</th> */}
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
                            {/* <td>{
                                user?.role !== "admin" && 
                                <button onClick={() => handleMakeAdmin(user._id)}  className='btn btn-xs btn-success'>Make Admin</button>
                                }
                                {
                                user?.role === "admin" && 
                                <button   className='btn btn-xs btn-accent'> Admin</button>
                                }
                           
                            
                            </td> */}
                            <td>{
                                user?.role !== "admin" && 
                                <label  onClick={() => setDeletingUsers(user)} htmlFor="confirmation-modal" className="btn btn-xs btn-success">Delete</label>
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
                deletingUsers && <ConfirmationModal
                title={`Are you sure tou want to delete this?`}
                message={`If you delete ${deletingUsers.name} it can not be undone.`}
                closeModal={closeModal}
                successButtonName="Delete"
                successAction={handleDeleteUser}
                modalData={deletingUsers}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;