import { createBrowserRouter } from "react-router-dom";
import AddAnItem from "../Dashboard/AddAnItem/AddAnItem";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import MySellers from "../Dashboard/MySellers/MySellers";
import MyOrders from "../Dashboard/MyOrders/MyOrders";
import PostedItems from "../Dashboard/PostedItems/PostedItems";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/MainLayout";
import Buy from "../Pages/Buy/Buy";
import Home from "../Pages/Home/Home";
import Journals from "../Pages/Journals/Journals";
import Login from "../Pages/Login";
import PageNotFound from "../Pages/PageNotFound";
import Signup from "../Pages/Signup";

import MyBuyers from "../Dashboard/MyBuyers/MyBuyers";
import AdminRoute from "./AdminRoute/AdminRoute";
import SellerRoute from "./SellerRoute/SellerRoute";
import WishList from "../Dashboard/WishList/WishList";
import PrivateRoute from "./PrivateRoute";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import Dashboard from "../Dashboard/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <Buy></Buy>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            },
             
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/journals',
                element: <Journals></Journals>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            },
            

            
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
            },
            {
                path: '/dashboard/mySellers',
                element: <AdminRoute><MySellers></MySellers></AdminRoute>,
            },
            {
                path: '/dashboard/myBuyers',
                element:  <AdminRoute><MyBuyers></MyBuyers></AdminRoute>
            },
            {
                path: '/dashboard/wishList',
                element:  <AdminRoute><WishList></WishList></AdminRoute>,
            },
            {
                path: '/dashboard/postedItems',
                element: <SellerRoute><PostedItems></PostedItems></SellerRoute>,
            },
            {
                path: '/dashboard/addAnItem',
                element: <SellerRoute><AddAnItem></AddAnItem></SellerRoute>,
            },
        ]
    }
    
])