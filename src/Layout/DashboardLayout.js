import React, { useContext } from 'react';
import { FaDatabase, FaHackerNews, FaList, FaPlus, FaProductHunt, FaRegistered, FaSellcast, FaShoppingBag, FaSign, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../Hooks/UseAdmin';
import UseBuyer from '../Hooks/UseBuyer';
import UseSeller from '../Hooks/UseSeller';
import { AuthContext } from '../Pages/Contexts/Context';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import User from '../assets/Phones/icons8-user-100.png'



const DashboardLayout = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email)
    const [isBuyer] = UseBuyer(user?.email)

    return (
        <div className=''>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile  ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side shadow-md bg-white text-black">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>


                    <ul className="menu p-4 w-96  mx-auto items-center uppercase text-black">
                 
                        <>
                            <li>

                                <div className='mt-6  flex flex-col items-center mx-auto '>
                                    {
                                        user?.uid ?
                                            <>
                                                <div className="avatar mb-2 ">
                                                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                        {
                                                            user?.photoURL ?
                                                                <>
                                                                    <img src={user?.photoURL} />
                                                                </>
                                                                :
                                                                <>
                                                                    <img src={User} />
                                                                </>
                                                        }
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="avatar mb-2 mx-auto ">
                                                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">

                                                        <img src={User} />

                                                    </div>
                                                </div>
                                            </>
                                    }
                                    <p className='mt-2'>{user?.displayName}</p>
                                    <p className='mb-2 '>{user?.email}</p>
                                    {
                                        user?.uid &&

                                        <button onClick={logOut} className='btn btn-primary normal-case  btn-wide mx-auto'>Logout</button>
                                    }
                                </div>
                            </li>
                        </>
                        <li className=''>
                                    <div className='flex flex-row gap-2 items-center ' >
                                        <FaShoppingBag></FaShoppingBag>
                                        <Link to='/dashboard/myOrders'>My Orders</Link>
                                    </div>
                                </li>
                               

                    
                        {
                            isAdmin &&
                            <>
                                <li>
                                    <div className=' flex flex-row gap-2 items-center ' >
                                        <FaShoppingBag></FaShoppingBag>
                                        <Link to='/dashboard/myOrders'>Orders</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row gap-2 items-center ' >
                                        <FaUser></FaUser>
                                        <Link to='/dashboard/users'>All Users</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row gap-2 items-center ' >
                                        <FaSellcast></FaSellcast>
                                        <Link to='/dashboard/mySellers'>All Sellers</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row gap-2 items-center ' >
                                        <FaProductHunt></FaProductHunt>
                                        <Link to='/dashboard/myBuyers'>All Buyers</Link>
                                    </div>
                                </li>
                               
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                
                                <li>
                                    <div className='flex flex-row gap-2 items-center ' >
                                        <FaPlus></FaPlus>
                                        <Link to='/dashboard/addAnItem'>Add Item</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row gap-2 items-center ' >
                                        <FaProductHunt></FaProductHunt>
                                        <Link to='/dashboard/postedItems'>My Posted Items</Link>
                                    </div>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;