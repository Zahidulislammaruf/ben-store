import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const PrivateRoute = ({children}) => {
   const {user,loading} = useContext(AuthContext)
   
   
   if (loading) {
       return <>
       
<span className="loading loading-spinner text-error"></span>
       </>
    }
   if (user) {
        return children;
    }
   return <Navigate to="/login" ></Navigate>
};

export default PrivateRoute;