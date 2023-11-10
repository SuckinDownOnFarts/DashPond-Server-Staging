import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';
import { LoadingOverlay, useMantineTheme } from "@mantine/core";

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth, persist } = useAuth();

    const theme = useMantineTheme();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err.message);
            } finally {
                isMounted && setIsLoading(false);
            }
        }

        // Avoids unwanted call to verifyRefreshToken
        !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false); //make sure auth state is empty
        return () => isMounted = false;
    }, [])

    // console.log();

    return (
        //chain ternary skips verify refresh function if persist is set to false
        <>
            {!persist
                ? <Outlet />
                : isLoading 
                    ? <div className={theme.colorScheme === 'dark' ? 'bg-[#25262b]' : 'bg-[#e9ecef]'}>
                        {/* <LoadingOverlay
                            loaderProps={{ size: 'sm', color: 'pink' }}
                            overlayOpacity={0.3}
                            overlayColor="#c5c5c5"
                            visible
                        /> */}
                    </div>
                    : <Outlet />
            }
        </>
    )
}

export default PersistLogin