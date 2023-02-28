import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoPersonCircleOutline } from 'react-icons/io5';

import NavProfile from '../NavbarDropdowns/NavProfile';
import LoggedOutNavProfile from '../NavbarDropdowns/LoggedOutNavProfile';
import useAuth from '../../hooks/useAuth';
import Logo from '../Globals/Logo'


const GlobalNavbar = () => {
  const [profileActive, setProfileActive ] = useState(false);
  
  const handleProfileClick = () => setProfileActive((profileActive) => !profileActive);

  const { auth } = useAuth();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // useEffect(() => {
  //   const handleResize = () => setScreenSize(window.innerWidth);

  //   window.addEventListener('resize', handleResize);

  //   handleResize();

  //   return () => window.removeEventListener('resize', handleResize)
  // }, []);

  // useEffect(() => {
  //   if(screenSize <= 900) {
  //     setActiveMenu(false);
  //   } else {
  //     setActiveMenu(true);
  //   }
  // }, [screenSize]);

  
  return (
    
    auth.accessToken ? (
      <nav className='mx-0'>
        <div className=' pl-7 mx-0 flex sticky top-0 z-50 justify-between p-2 bg-white border-b-1'>
          <div className='flex items-center'>
            <Link to='/'>
              <div>
                <Logo />
              </div>
            </Link>
          </div>
          <div className="pr-7 flex items-center">
            <div className="hidden w-full md:block md:w-auto">
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0
              md:bg-white">
                <li>
                  <a href={`${BASE_URL}/documentation`} className="block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:border-0 md:p-0
                  ">Docs</a>
                </li>
                <li>
                  <a href={`${BASE_URL}/create`} className="block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:border-0 md:p-0
                  ">Create Dashboard</a>
                </li>
                <li>
                  <a href={`${BASE_URL}/contact`} className="block py-2 pl-3 pr-4 text-sm text-gray-500 rounded  md:hover:bg-transparent hover:text-blue-700 md:border-0 md:p-0
                  ">Contact</a>
                </li>
              </ul>  
            </div>
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleProfileClick()}>
              <img className='rounded-full w-8 h-8' src='/images/office1.jpg' alt='profile'/>
              <p>
                <span className='text-gray-400 text-14'>Hi, </span> {' '}
                <span className='text-gray-400 font-bold ml-1 text-14'>{auth.user}</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-500 text-14'/>
              {profileActive && <NavProfile 
                user={auth.user}
              />}
            </div>
          </div>  
        </div>    
      </nav>
    ) : ( 
      <nav>
        <div className='flex sticky top-0 z-50 justify-between p-2 bg-white border-b-1'>
          <div className='pl-7 flex items-center'>
            {/* {location.pathname.includes('dashpage') ? 
              <NavButton 
                title={!activeMenu ? 'Sidebar' : 'Close Sidebar'}
                customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
                
                icon={<AiOutlineMenu />} 
              /> : */}
            <Link to='/'>
              <div>
                <Logo />
              </div>
            </Link>
          </div>
          <div className="flex items-center pr-7">
            <div className="hidden w-full md:block md:w-auto">
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0
              md:bg-white">
                <li>
                  <a href={`${BASE_URL}/documentation`} className="block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0
                  ">Docs</a>
                </li>
                <li>
                  <a href={`${BASE_URL}/pricing`} className="block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0
                  ">Pricing</a>
                </li>
                <li>
                  <a href={`${BASE_URL}/contact`} className="block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0
                  ">Contact</a>
                </li>
                <li>
                  <a href={`${BASE_URL}/login`} className="block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0
                  ">Login</a>
                </li>
                <li>
                  <a href={`${BASE_URL}/register`} className="block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0
                  ">Register</a>
                </li>
              </ul>  
            </div>
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleProfileClick()}>
              {/* <img className='rounded-full w-8 h-8' src='/images/user.jpg'/> */}
              <IoPersonCircleOutline className='w-8 h-8 text-gray-500'/>
              {/* <p>
                <span className='text-gray-400 text-14'>Hi, </span> {' '}
                <span className='text-gray-400 font-bold ml-1 text-14'>{auth.user}</span>
              </p> */}
              <MdKeyboardArrowDown className='text-gray-400 text-14'/>
              {profileActive && <LoggedOutNavProfile />}
            </div>
          </div>  
        </div>   
      </nav> 
    )
  )
}
export default GlobalNavbar
