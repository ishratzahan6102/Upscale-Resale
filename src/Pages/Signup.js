import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import UseToken from '../Hooks/UseToken';

import { AuthContext } from './Contexts/Context';

const Signup = () => {


    const {user} = useContext(AuthContext)
    // don't be scared it's going to be fine

    const { createUser, updateUser, googleSignIn } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()

    // signup error message 
    const [signUpError, setSignUpError] = useState('')

    // token verify kortesi moira jaite mon chay 
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = UseToken(createdUserEmail)




    // user sign up korar pore koi jabe
    const navigate = useNavigate();


    if (token) {
        navigate('/')
    }


    const handleSignup = data => {
        console.log(data)
        setSignUpError('')

        createUser(data.email, data.password, data.account)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast.success('User created successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.account)
                    })
                    .catch(error => console.log(error))
            })
            .catch((error) => {
                console.log(error)
                setSignUpError(error)
            });
 
    }

    const handleGoogle = data => {
        setSignUpError('')
        googleSignIn()
        .then((result) =>{
            const user  = result.user
            console.log(user)
            toast.success(`Welcome back to Astor ${user.displayName}.`)
            saveUser(user.displayName, user.email, "buyer")
        })
        .catch((error) => { 
            console.log(error)
            setSignUpError(error)
        })
       
    }




    const saveUser = (name, email, account) => {
        const user = { name, email, account }
        fetch(`https://astor-server-ochre.vercel.app/users`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log("saveUser", data)
                 navigate('/')
                setCreatedUserEmail(email)

            })
    }

    return (
        <div className='h-[800px] flex justify-center pt-20'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl font-bold uppercase'>Sign up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text' className='input input-bordered' {...register("name", { required: "Name is required" })} />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text">Choose account type</span>
                        </label>
                        <select  className='w-full p-4 bg-black text-white' {...register("account")}>
                            <option defaultValue="buyer ">Buyer</option>
                            <option value="seller">Seller</option>
                        </select>

                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='text' className='input input-bordered' {...register("email", { required: "Email address is required" })} />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' className='input input-bordered' {...register("password", {
                            required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9]).{8}/, message: "Password must be uppercase number & special characters" }
                        })} />

                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                        <label className="label">
                            <span className="label-text">Forget Password ?</span>
                        </label>
                    </div>

                    {/* <p>{data}</p> */}
                    <input className='btn btn-primary text-white w-full' value='Sign up' type="submit" />
                    {signUpError && <p className='text-error'>{signUpError}</p>}
                    <Toaster />
                    <p>Already have an account ?<Link className='text-black font-bold' to='/login'> Login here.</Link></p>
                     <div className='divider'>OR</div>
                <input  onClick={handleGoogle} className='btn btn-primary w-full' value='Continue with Goggle' />
                </form>

            </div>


        </div>
    );
};

export default Signup;