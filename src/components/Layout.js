import MainNav from './MainNav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <div className='dark:bg-main-dark-bg'>
        <MainNav />
      </div>
      
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout