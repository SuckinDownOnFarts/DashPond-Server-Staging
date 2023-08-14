import Navbar from './Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import { useLayoutStyles as useStyles } from './LayoutStyles/LayoutStyles';

const Layout = () => {
    const location = useLocation();
    const { classes, theme } = useStyles();

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