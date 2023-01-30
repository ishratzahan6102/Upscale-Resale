import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Pages/Contexts/Context";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import tik from '../../assets/Phones/Tic.png'



const MySellers = () => {

  const {user} = useContext(AuthContext)
  const [deletingDoctor, setDeletingDoctor] = useState(null)


  const closeModal = () => {
      setDeletingDoctor(null)
  }
    const {data : sellers = [], refetch} = useQuery({
        queryKey : ['users/seller'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/seller`)
            const data = await res.json()
            return data;
        }
    })
    

    const handleVerify = (id) => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
          method: "PUT",
          headers : {
            authorization : `bearer ${localStorage.getItem("accessToken")}`
          }
        })
        .then(res => res.json())
        .then(data => {
        if(data.modifiedCount > 0){
          toast.success("Seller Verified Successfully")
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
        <div className="my-10 mb-60 text-start  px-6">
            <h1 className='text-4xl font-bold  text-black md:text-white mb-10'>SELLERS</h1>
            <div className="overflow-x-auto text-center ">
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
                            sellers?.map((seller, i) => 
                            <tr key={seller._id}>
                            <td>{i+1}</td>
                            <td className="text-start">{
                            seller?.verify=== "verified" &&
                            <>
                            <div className="avatar">
                                <div className="w-4">
                                <img src={tik} />
                                </div>
                            </div>
                            </>
                            
                            } {seller.name}</td>
                            <td>{seller.email}</td>
                            <td>{seller.account}</td>
                            {/* <td>{seller?.role !== "admin" && <button onClick={() => handleMakeAdmin(seller._id)}  className='btn btn-xs btn-success'>Make Admin</button>}</td> */}

                            
                           

                            <td>
                                            {seller?.verify !== "verified" && <button onClick={() => handleVerify(seller._id)}  className='btn btn-xs btn-success'>Unverified</button>}
                                        
                                        
                                        
                                         {seller?.verify === "verified" && <button   className='btn btn-xs btn-success'>Verified</button>}
                                        
                                        </td>
                           
                            <td>
                                 <label onClick={() => setDeletingDoctor(seller)} htmlFor="confirmation-modal" className="btn btn-xs btn-error">Delete</label>
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

export default MySellers;