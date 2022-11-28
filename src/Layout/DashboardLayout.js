import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../Hooks/UseAdmin';
import UseBuyer from '../Hooks/UseBuyer';
import UseSeller from '../Hooks/UseSeller';
import { AuthContext } from '../Pages/Contexts/Context';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email)
    const [isBuyer] = UseBuyer(user?.email)

    return (
        <div>

            <Navbar></Navbar>
           <div className='text-end'>
           <ul className="menu menu-horizontal bg-neutral text-neutral-content mb-2">
                {
                    isBuyer && 
                    <li><Link to='/dashboard'>My Orders</Link></li>

                }
                {
                    isAdmin && 
                    <>
                    <li><Link to='/dashboard/users'>All Users</Link></li>
                       <li><Link to='/dashboard/wishList'>Reported Items</Link></li>
                    <li><Link to='/dashboard/mySellers'>My Sellers</Link></li>
                    </>
                }
                {
                    isSeller && 
                    <>
                    <li><Link to='/dashboard/addAnItem'>Add Item</Link></li>
                    <li><Link to='/dashboard/postedItems'>My Posted Items</Link></li>
                    </>
                }
                
            
            </ul>


           <div className='text-center'>
            <Outlet></Outlet>
           </div>
           </div>

            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;