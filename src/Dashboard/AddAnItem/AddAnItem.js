import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Pages/Contexts/Context";


const AddAnItem = () => {
    const { user } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imgbbKey = process.env.REACT_APP_imgbb_key
    console.log(imgbbKey)

    const navigate = useNavigate()

    const handleAddDoctor = data => {

        const image = data.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const items = {
                        itemName: data.name,
                        email: user?.email,
                        phone: data.phoneNumber,
                        yearOfPurchased: data.year,
                        condition: data.condition,
                        category: data.category,
                        location: data.location,
                        price: data.price,
                        description: data.description,
                        img: imgData.data.url

                    }

                    console.log(items)

                    // post item information to the database
                    fetch(`http://localhost:5000/addItems`, {
                        method: 'POST',
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(items)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/postedItems')
                        })

                }
            })

    }


    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            
                
                    <div className='w-96 p-7 text-start my-20 mb-60 '>
                <h1 className='text-3xl font-bold'>Add an Item</h1>
                <form onSubmit={handleSubmit(handleAddDoctor)}>

                    <div className="form-control w-full max-w-xs">
                        
                        <input type='text' placeholder="Product Name" className='input input-bordered' {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        
                        <input type='text' placeholder="Email"  className='input input-bordered' defaultValue={user?.email} readOnly {...register("email",)} />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        
                        <input type='text' placeholder="Price" className='input input-bordered' {...register("price", { required: "Name is required" })} />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                       
                        <input type='text' placeholder="Phone Number" className='input input-bordered' {...register("phoneNumber", { required: "Name is required" })} />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                       
                        <input placeholder="Location" type='text' className='input input-bordered' {...register("location", { required: "Name is required" })} />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                       
                        <input type='text' placeholder="Description" className='input input-bordered' {...register("description", { required: "Name is required" })} />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        
                        <input placeholder="Year of purchase"  type='text' className='input input-bordered' {...register("year", { required: "Name is required" })} />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>




                    <div className="form-control w-full max-w-xs pb-6">


                        <div className="form-control w-full max-w-xs my-1">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select className='w-full' {...register("category")}>
                                <option value="Nokia">Nokia</option>
                                <option value="LG">Lg</option>
                                <option value="Iphone">Iphone</option>
                            </select>

                        </div>



                        <div className="form-control w-full max-w-xs my-1">
                            <label className="label">
                                <span className="label-text">Product Condition</span>
                            </label>
                            <select className='w-full' {...register("condition")}>
                                <option value="buyer">excellent</option>
                                <option value="buyer">good</option>
                                <option value="seller">fair</option>
                            </select>

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type='file' className='input input-bordered py-2' {...register("img", { required: "Photo is required" })} />
                            {errors.img && <p className='text-error'>{errors.img?.message}</p>}
                        </div>


                    </div>


                    <input className='btn btn-primary w-full' value='Add To Resale' type="submit" />
                    {/* {signUpError && <p className='text-error'>{signUpError}</p>} */}
                    <Toaster />
                </form>

            </div>
                    </div>
              
           




           
       
    );
};

export default AddAnItem;