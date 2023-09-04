import { useLocation, Navigate, Outlet, useParams, generatePath } from "react-router-dom";
import api from '../../api/axios'
import { useEffect, useState } from "react";

const CheckReportId = () => {

    const { id } = useParams();

    const [reportStatus, setReportStatus] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkForReport = async () => {
            try {
                const path = generatePath('/checkforreport/:id', {
                    id: id
                })
                const response = await api.get(path);
                setReportStatus(response.data);
                setLoading(false);
            } catch (err) {
                console.log(err.message);
            }
        }
        checkForReport()
    }, [])
    
    const location = useLocation();

    return (
        loading
            ? <Outlet /> 
            : !loading && reportStatus.length !== 0 
                ? <Outlet />
                : <Navigate to="*" state={{ from: location }} replace />
    );
}

export default CheckReportId;