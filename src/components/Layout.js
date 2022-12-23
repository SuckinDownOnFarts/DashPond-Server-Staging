import MainNav from './MainNav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <MainNav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout