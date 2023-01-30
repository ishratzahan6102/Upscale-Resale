import React, { useContext, useState,  } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseToken from '../Hooks/UseToken';
import '../Pages/Login.css'
import { AuthContext } from './Contexts/Context';
import login from '../assets/login.jpg'

const Login = () => {

    const {register, formState : {errors}, handleSubmit, handleChange} = useForm()
        const {user, loginUser, updateUser,  googleSignIn } = useContext(AuthContext)
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
            toast.success(`Welcome back to Astor ${user.displayName}.`)
            setLoginUserEmail(data.email)
        
        })
        .catch((error) => { 
            console.log(error.message)
            setLoginError(error.message)
        });


  

    }
 
  
    const handleGoogle = data => {
        setLoginError('')
        googleSignIn()
        .then((result) =>{
            const user  = result.user
            console.log(user)
            toast.success(`Welcome back to Astor ${user.displayName}.`)
            navigate(from, {replace: true}) 
        })
        .catch((error) => { 
            console.log(error)
            setLoginError(error)
        })
       
    }



    return (
        <div className="hero  max-w-[900px] mx-auto bg-violet-200 text-black  py-6">
        <div className="hero-content flex-col-reverse lg:flex-row justify-between">
            <img src={login} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <div className='flex '>
               <div className='w-96 p-7'>
                    <h2 className='text-4xl text-black font-bold uppercase mb-4'>Log In</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>

                 <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">Email</span>
                    </label>
                    <input type='email'  className='input bg-white input-bordered' {...register("email" , {required: "Email address is required"})}  />
                    {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                </div>

                    

                 <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-black">Password</span>
                    </label>
                    <input type='password' className='input input-bordered bg-white' {...register("password", {required: "Password is required", minLength: {value : 6, message: "Password must be at least 6 characters long"}})}    />
                    {errors.password && <p className='text-error'>{errors.password?.message}</p>}

                    <label className="label">
                        <span className="label-text text-black">Forget Password ?</span>
                    </label>
                </div>
                
                {/* <p>{data}</p> */}
                <input className='btn border-none bg-gradient-to-r from-primary font-bold text-white  p-2 to-violet-600 w-full uppercase' value='Log In' type="submit" />
                {loginError && <p className='text-errors'>{loginError}</p>}
                <p className='text-black'>New to Astor ?<Link  className=' font-bold text-black mt-4' to='/signup'> Create New Account </Link></p>
                <div className='divider'>OR</div>


                        <div  onClick={handleGoogle} class="google-btn w-full  bg-gradient-to-r from-primary  to-violet-600 ">
                        <div class="google-icon-wrapper">
                            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                        </div>
                        <p class="btn-text  "><b>Sign in with google</b></p>
                        </div>


              
                </form>
               
               </div>

                 
            </div>
            </div>
        </div>
        </div>


        
    );
};

export default Login;