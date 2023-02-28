import GlobalNavbar from './GlobalNavbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Layout = () => {

  const location = useLocation();
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return (
    <div className='min-h-screen bg-slate-50'>
      <GlobalNavbar />

      <Outlet />
      
      {location.pathname.includes('dashpage') || screenSize <= 1100  
        ? <></> :  <Footer />}
        
    </div>
  )
}

export default Layout