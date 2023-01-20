import { createBrowserRouter } from "react-router-dom";
import AddAnItem from "../Dashboard/AddAnItem/AddAnItem";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import MySellers from "../Dashboard/MySellers/MySellers";
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
import WishList from "../Dashboard/WishList/WishList";
import PrivateRoute from "./PrivateRoute";
import MyOrders from "../Dashboard/MyOrders/MyOrders";


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
                path: '/category/:brand',
                element: <PrivateRoute><Buy></Buy></PrivateRoute>,
                loader: ({params}) => fetch(`https://astor-server-ochre.vercel.app/category/${params.brand}`)
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
                path: '/blog',
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
                path: '/dashboard/users',
                element: <AllUsers></AllUsers>,
            },
            {
                path: '/dashboard/mySellers',
                element: <MySellers></MySellers>,
            },
            {
                path: '/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/wishList',
                element: <WishList></WishList>,
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>,
            },
            {
                path: '/dashboard/postedItems',
                element:<PostedItems></PostedItems>
            },
            {
                path: '/dashboard/addAnItem',
                element:<AddAnItem></AddAnItem>
            },
        ]
    }
    
])