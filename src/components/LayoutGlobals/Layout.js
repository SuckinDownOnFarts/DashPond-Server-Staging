import GlobalNavbar from './GlobalNavbar';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {

  const location = useLocation();
  // const [screenSize, setScreenSize] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);

  //   window.addEventListener('resize', handleResize);

  //   handleResize();

  //   return () => window.removeEventListener('resize', handleResize)
  // }, []);

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-gray-200'>
      {location.pathname.includes('getstarted') ? <></> : 
        <GlobalNavbar />
      }

      <Outlet />
        
    </div>
  )
}

export default Layout