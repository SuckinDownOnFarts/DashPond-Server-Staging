import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const PricingRequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        allowedRoles.includes(auth.roles)
            ? <Outlet /> 
            : auth?.accessToken //changed from user to accessToken to persist login after refresh
                ? <Navigate to="/login" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default PricingRequireAuth;