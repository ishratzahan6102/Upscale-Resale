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
        <div className='my-10 mb-60 flex flex-col items-center px-6'>
            <h1 className='text-2xl font-bold text-white mt-10 mb-4'>Add Your Product</h1>
           
            <form onSubmit={handleSubmit(handleAddDoctor)}>
            <label className="label">
                <span className="label-text text-xl">Information</span>
            </label>
                <div className="form-control w-96 mb-1">

                    <input type='text' placeholder="Product Name" className='input input-bordered' {...register("name", { required: "Name is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-96 mb-1">

                    <input type='text' placeholder="Email" className='input input-bordered' defaultValue={user?.email} readOnly {...register("email",)} />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                </div>


                <div className="form-control w-96 mb-1">

                    <input type='text' placeholder="Price" className='input input-bordered' {...register("price", { required: "Name is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-96 mb-1">

                    <input type='text' placeholder="Phone Number" className='input input-bordered' {...register("phoneNumber", { required: "Name is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-96 mb-1">

                    <input placeholder="Location" type='text' className='input input-bordered' {...register("location", { required: "Name is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-96 mb-1">

                    <input type='text' placeholder="Description" className='input input-bordered' {...register("description", { required: "Name is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-96 mb-1">

                    <input placeholder="Year of Purchase" type='text' className='input input-bordered' {...register("year", { required: "Name is required" })} />
                    {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                </div>




                <div className="form-control w-96 mb-1 pb-6">


                    <div className="form-control w-96 mb-1 my-1">
                        <label className="label">
                            <span className="label-text text-xl">Category</span>
                        </label>
                        <select className='w-96 mb-1 bg-black text-white' {...register("category")}>
                            <option value="Nokia">Nokia</option>
                            <option value="LG">Lg</option>
                            <option value="Iphone">Iphone</option>
                        </select>

                    </div>



                    <div className="form-control w-96 mb-1 my-1">
                        <label className="label">
                            <span className="label-text text-xl">Product Condition</span>
                        </label>
                        <select className='w-96 mb-1 bg-black text-white' {...register("condition")}>
                            <option value="buyer">excellent</option>
                            <option value="buyer">good</option>
                            <option value="seller">fair</option>
                        </select>

                    </div>


                    <div className="form-control w-96 mb-1">
                        <label className="label">
                            <span className="label-text text-xl">Upload Image</span>
                        </label>
                        <input type='file' className='input input-bordered py-2' {...register("img", { required: "Photo is required" })} />
                        {errors.img && <p className='text-error'>{errors.img?.message}</p>}
                    </div>


                </div>


                <input className='btn btn-primary w-96 mb-1' value='Add Product' type="submit" />
                <Toaster />
            </form>

        </div>

    );
};

export default AddAnItem;