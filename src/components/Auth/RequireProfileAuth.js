import { useLocation, Navigate, Outlet, useParams } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { useEffect } from "react";

const RequireProfileAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    const { id } = useParams();

    // console.log(auth);
    
    return (
        auth?.id == id 
            ? <Outlet /> 
            : auth?.accessToken 
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireProfileAuth;