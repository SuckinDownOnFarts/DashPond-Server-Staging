import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useLayoutStyles as useStyles } from './LayoutStyles/LayoutStyles';

const Layout = () => {
    const { classes } = useStyles();

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