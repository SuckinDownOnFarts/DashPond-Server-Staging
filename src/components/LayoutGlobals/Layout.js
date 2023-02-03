import GlobalNavbar from './GlobalNavbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {

  const location = useLocation();

  return (
    <div className='h-screen'>
      <GlobalNavbar />

      <Outlet />
      
      {location.pathname.includes('dashpage') 
        ? <></> :  <Footer />}
        
    </div>
  )
}

export default Layout