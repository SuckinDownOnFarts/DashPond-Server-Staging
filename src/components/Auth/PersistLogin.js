import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, persist } = useAuth();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally { 
                isMounted && setIsLoading(false);
            }
        }
        
        // Avoids unwanted call to verifyRefreshToken
        // !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false); //make sure auth state is empty
        persist ? verifyRefreshToken() : setIsLoading(false); //make sure auth state is empty
        // console.log(auth.roles);
        return () => isMounted = false;
    }, [])

    return (
        //chain ternary skips verify refresh function if persist is set to false
        <> 
            {!persist 
                ? <Outlet />
                : isLoading
                    ? <p>Loading...</p>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin