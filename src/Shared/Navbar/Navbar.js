import React from 'react';
import { useContext } from 'react';
import { FaBeer, FaBell, FaDatabase, FaHeart, FaInfo, FaInfoCircle, FaList, FaRegistered, FaSearch, FaShoppingBag, FaShoppingBasket, FaSignInAlt, FaStore, FaUser, FaUserAltSlash, FaUserCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseAdmin from '../../Hooks/UseAdmin';
import UseSeller from '../../Hooks/UseSeller';
import { AuthContext } from '../../Pages/Contexts/Context';
import './Navbar.css'



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email)
    const menu =
        < >
            <li><Link to='/'>HOME</Link></li>
            {/* <li><Link to='/shop'>SHOP</Link></li> */}
            <li><Link to='/blog'>BLOG</Link></li>
            <li><Link to='/dashboard'>DASHBOARD</Link></li>
            <li><Link to='/wishList'>WISHLIST</Link></li>



        </>



    return (
        <div className="navbar bg-primary text-white  lg:px-20 h-16 align-middle shadow-lg">

            <div className="navbar-start">
                {/* logo */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul tabIndex={0} className="menu rounded-none menu-compact dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>


                <Link to='/' className="font-bold text-white lg:text-5xl text-4xl">Astor</Link>

            </div>

            <div className='navbar-center hidden lg:flex'>
                {/* navbar for lg screen */}
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
                {/* navbar for lg screen */}
            </div>



            <div className="navbar-end lg:flex ">
                {/* navbar icons */}

                <button className="btn-ghost  uppercase">
                    {
                        user?.uid ?

                            <>

                                <Link><div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-square">
                                        <div className="text-xl rounded-full">
                                            <FaUser></FaUser>
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                        <li><Link onClick={logOut}>Logout</Link></li>
                                        <li><Link to="/signup">Register</Link></li>

                                    </ul>
                                </div>
                                </Link>

                            </>
                            :
                            <>
                                <Link>

                                    <div className="dropdown  dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-square">
                                            <div className="text-xl rounded-full">
                                                <FaSignInAlt></FaSignInAlt>
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                            <li><Link to="/login">Login</Link></li>
                                            <li><Link to="/signup">Register</Link></li>

                                        </ul>
                                    </div>
                                </Link>
                            </>
                    }
                </button>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-sm lg:hidden">
                
                <FaList className='text-xl '></FaList>
            
                </label>

                <span className='tooltip' data-tip="wishlist">
                    <button className="btn text-white  btn-sm  text-outline text-lg btn-ghost"  >
                        <FaInfoCircle></FaInfoCircle>
                    </button>
                </span>
            </div>
           
        </div>
    );
};

export default Navbar;