import React, { useContext, useState,  } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseToken from '../Hooks/UseToken';

import { AuthContext } from './Contexts/Context';

const Login = () => {

    const {register, formState : {errors}, handleSubmit} = useForm()
        const {loginUser, googleSignIn} = useContext(AuthContext)
    // password na milar error
    const [loginError, setLoginError ] = useState('')

    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = UseToken(loginUserEmail)



    // login korle koi redirect hobe
    const location = useLocation()


    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/'


    if(token){
        navigate(from, {replace: true}) 
    }


    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        loginUser(data.email, data.password)
        .then((result) => {
            const user = result.user;
            console.log(user)
            setLoginUserEmail(data.email)
        
        })
        .catch((error) => { 
            console.log(error.message)
            setLoginError(error.message)
        });

    }
 

    return (
        <div className='h-[800px] flex justify-center items-center'>
               <div className='w-96 p-7'>
                    <h2 className='text-xl'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>

                 <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type='email'  className='input input-bordered' {...register("email" , {required: "Email address is required"})}  />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                </div>
                 <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type='password' className='input input-bordered' {...register("password", {required: "Password is required", minLength: {value : 6, message: "Password must be at least 6 characters long"}})}    />
                    {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                    <label className="label">
                        <span className="label-text">Forget Password ?</span>
                    </label>
                </div>
                
                {/* <p>{data}</p> */}
                <input className='btn btn-neutral w-full' value='submit' type="submit" />
                {loginError && <p className='text-errors'>{loginError}</p>}
                <p>New to doctors portal?<Link  className='text-secondary font-bold' to='/signup'> Create new account</Link></p>
                <div className='divider'>OR</div>
                <input   className='btn btn-outline w-full'  value='Continue with Goggle'  />
                </form>
               
               </div>

                 
            </div>
    );
};

export default Login;