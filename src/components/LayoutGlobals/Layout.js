import Navbar from './Navbar/Navbar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useLayoutStyles as useStyles } from './LayoutStyles/LayoutStyles';

const Layout = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.main}>
            <Navbar />

            <div className='min-h-[calc(100vh-60px)]'>
                <Suspense>
                    <Outlet />
                </Suspense>
            </div>
        </div>
    )
}

export default Layout