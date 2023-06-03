import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-gray-200'>
      {location.pathname.includes('getstarted') ? <></> : 
        <Navbar />
      }

      <Outlet />
        
    </div>
  )
}

export default Layout