import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseBuyer from "../../Hooks/UseBuyer";

import { AuthContext } from "../../Pages/Contexts/Context";
import Loading from "../../Pages/Loading/Loading";



const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isBuyer, isBuyerLoading] = UseBuyer(user?.email)
    const location = useLocation()



    if(user && isBuyer){
        return children
    }

    if(loading || isBuyerLoading){
        return <Loading></Loading>
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default BuyerRoute;