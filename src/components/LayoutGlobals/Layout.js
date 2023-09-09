import { useEffect } from 'react';
import api from '../../api/axios';
import Navbar from './Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { useLayoutStyles as useStyles } from './LayoutStyles/LayoutStyles';

const Layout = () => {
    const location = useLocation();
    const { classes, theme } = useStyles();

    useEffect(() => {
        const sendLog = async () => {
            const persist = JSON.parse(localStorage.getItem('persist'))
            try {
                const response = await api.post('/receive', {
                    logs: persist
                })
            } catch (err) {
                console.log(err.message);
            }
        }
        sendLog()
    }, [])

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