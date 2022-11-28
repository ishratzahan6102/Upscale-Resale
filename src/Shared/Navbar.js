import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Pages/Contexts/Context';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)  

    const handleLogout = () => {
            logOut()
            .then(() => {})
            .catch(error => console.log(error))
    }


    const menu = <>
        <Link className="m-2 rounded-none" active to='/'>Home</Link>
        <Link className="m-2  rounded-none" to='/journals'>Blogs</Link>
        {
        user?.uid?
        <>
        <Link className="m-2  rounded-none" to='/dashboard'>Dashboard</Link>
        <Link onClick={handleLogout} className="m-2  rounded-none"  to='/login'>Logout</Link>
        </>
        :
        <Link className="m-2  rounded-none" to='/login'>Login</Link>
        }
    </>


    return (
        <div>
            <div className="navbar bg-primary text-gray-300 mb-4">

                <div className="navbar-start h-10">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                        </label>
                        <ul tabIndex={1}  className="menu menu-compact dropdown-content mt-3 p-2 bg-neutral text-neutral-content w-56 ">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl font-bold">Upscale Resale</Link>
                </div>

                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal  p-0">
                        {menu}
                    </ul>
                    
                </div>
                
                
               

            </div>
        </div>
    );
};

export default Navbar;