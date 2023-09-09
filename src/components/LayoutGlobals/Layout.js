import { useEffect } from 'react';
import api from '../../api/axios';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useLayoutStyles as useStyles } from './LayoutStyles/LayoutStyles';
import useAuth from '../../hooks/useAuth';

const Layout = () => {
    const { classes } = useStyles();
    const { auth } = useAuth();

    const persist = JSON.parse(localStorage.getItem('persist'))
    
    useEffect(() => {
        const sendLog = async () => {
            
            try {
                const response = await api.post('/receive', {
                    logs: persist,
                    auth: auth.accessToken
                })
            } catch (err) {
                console.log(err.message);
            }
        }
        sendLog();
    }, [auth, persist])

    console.log();

    return (
        <div className={classes.main}>
            <Navbar />

            <div className='min-h-[calc(100vh-60px)]'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout

// flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-gray-200