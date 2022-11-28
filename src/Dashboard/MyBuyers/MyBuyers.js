import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Pages/Contexts/Context";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import tik from '../../assets/Phones/Tic.png'



const MyBuyers = () => {

  const {user} = useContext(AuthContext)
  const [deletingDoctor, setDeletingDoctor] = useState(null)


  const closeModal = () => {
      setDeletingDoctor(null)
  }
    const {data : buyers = [], refetch} = useQuery({
        queryKey : ['users/buyer'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/buyer`)
            const data = await res.json()
            return data;
        }
    })
    

    const handleVerify = (id) => {
        fetch(`http://localhost:5000/users/buyer/${id}`, {
          method: "PUT",
          headers : {
            authorization : `bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(res => res.json())
        .then(data => {
        if(data.modifiedCount > 0){
          toast.success("Buyer Verified Successfully")
          refetch()
        }
        })
      }

      const handleDeleteDoctor = (seller) => {
        console.log(seller)
        fetch(`http://localhost:5000/users/${seller._id}`, {
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

    return (
        <div className="my-10 mb-60 text-start">
            <h1 className='text-4xl  font-bold  text-white my-10'>All Buyers</h1>
            <div className="overflow-x-auto text-center text-gray-300">
                <table className="table text-center w-full">
                    <thead className=''>
                        <tr>
                            
                            <th>Index</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th>Verify</th>
                            <th>Take Action</th>
                           
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers?.map((buyer, i) => 
                            <tr key={buyer._id}>
                            <td>{i+1}</td>
                            <td className="text-start">{
                            buyer?.verify=== "verified" &&
                            <>
                            <div className="avatar">
                                <div className="w-4">
                                <img src={tik} />
                                </div>
                            </div>
                            </>
                            
                            } {buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td>{buyer.account}</td>
                            {/* <td>{seller?.role !== "admin" && <button onClick={() => handleMakeAdmin(seller._id)}  className='btn btn-xs btn-success'>Make Admin</button>}</td> */}

                            
                           

                            <td>
                                            {buyer?.verify !== "verified" && <button onClick={() => handleVerify(buyer._id)}  className='btn btn-xs btn-success'>Unverified</button>}
                                        
                                        
                                        
                                         {buyer?.verify === "verified" && <button   className='btn btn-xs btn-success'>Verified</button>}
                                        
                                        </td>
                           
                            <td>
                                 <label onClick={() => setDeletingDoctor(buyer)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
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

export default MyBuyers;