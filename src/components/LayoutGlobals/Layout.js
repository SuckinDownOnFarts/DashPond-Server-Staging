import Navbar from './Navbar';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  return (
    <div className='flex flex-col flex-container min-h-screen bg-gradient-to-br from-slate-50 to-gray-200'>
      {location.pathname.includes('getstarted') ? <></> : 
        <Navbar />
      }

      <div className='min-h-[calc(100vh-60px)]'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout