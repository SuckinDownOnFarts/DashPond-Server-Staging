import GlobalNavbar from './GlobalNavbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='h-screen'>
      <GlobalNavbar />

      <Outlet />
      
      <Footer />
    </div>
  )
}

export default Layout