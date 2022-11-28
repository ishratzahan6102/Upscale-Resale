import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseSeller from "../../Hooks/UseSeller";
import { AuthContext } from "../../Pages/Contexts/Context";
import Loading from "../../Pages/Loading/Loading";



const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isSeller, isSellerLoading] = UseSeller(user?.email)
    const location = useLocation()



    if(user && isSeller){
        return children
    }

    if(loading || isSellerLoading){
        return <Loading></Loading>
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default SellerRoute;