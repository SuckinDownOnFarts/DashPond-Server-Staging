import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import NavProfile from '../NavbarDropdowns/NavProfile';

import { useStateContext } from '../../Context/ContextProvider';
import useAuth from '../../hooks/useAuth';

const NavButton = ({ title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button 
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray hover:dark:bg-secondary-dark-bg'
    >
      <span 
        style={{ background: dotColor}}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, profileActive, handleProfileClick, screenSize, setScreenSize, currentColor, setCurrentMode, currentMode } = useStateContext();

  const { auth } = useAuth();

  const baseURL = 'http://localhost:3000'

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  // useEffect(() => {
  //   const currentMode = localStorage.getItem('themeMode');
  //   if (currentMode) {
  //   setCurrentMode(currentMode)
  //   };
  // }, [])

  return (
    auth.user ? (
      <div className='flex justify-between sticky top-0 z-50 p-2 md:mx-6 dark:bg-main-dark-bg bg-light-gray'>
        <NavButton 
          title="Menu" 
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
          color={currentColor}
          icon={<AiOutlineMenu />} 
          />
          <div className="flex items-center">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0
            md:bg-white dark:bg-main-dark-bg">
              <li>
                <a href={`${baseURL}/about`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                md:hover:text-blue-700 md:p-0 dark:text-white">About</a>
              </li>
              <li>
                <a href={`${baseURL}/create`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                md:hover:text-blue-700 md:p-0 dark:text-white">Create Dashboard</a>
              </li>
              <li>
                <a href={`${baseURL}/contact`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                md:hover:text-blue-700 md:p-0 dark:text-white">Contact</a>
              </li>
            </ul>  
          </div>
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray hover:dark:bg-secondary-dark-bg rounded-lg' onClick={() => handleProfileClick()}>
              <img className='rounded-full w-8 h-8' src='/images/office1.jpg'/>
              <p>
                <span className='text-gray-400 text-14'>Hi, </span> {' '}
                <span className='text-gray-400 font-bold ml-1 text-14'>Daniel</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            </div>
          {profileActive && <NavProfile />}
        </div>
      </div>
      ) : (
        <div className='flex justify-between sticky top-0 z-50 p-2 md:mx-6 dark:bg-main-dark-bg bg-gray-50  border-b-1'>
          <NavButton 
            title="Menu" 
            customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
            color={currentColor}
            icon={<AiOutlineMenu />} 
          />
          <div className="flex items-center">
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0
              md:bg-white dark:bg-main-dark-bg ">
                <li>
                  <a href={`${baseURL}/About`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  md:hover:text-blue-700 md:p-0 dark:text-white">About</a>
                </li>
                <li>
                  <a href={`${baseURL}/pricing`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  md:hover:text-blue-700 md:p-0 dark:text-white">Pricing</a>
                </li>
                <li>
                  <a href={`${baseURL}/contact`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  md:hover:text-blue-700 md:p-0 dark:text-white">Contact</a>
                </li>
                <li>
                  <a href={`${baseURL}/login`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  md:hover:text-blue-700 md:p-0 dark:text-white">Login</a>
                </li>
                <li>
                  <a href={`${baseURL}/register`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 
                  md:hover:text-blue-700 md:p-0 dark:text-white">Register</a>
                </li>
              </ul>  
            </div>
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleProfileClick()}>
              <img className='rounded-full w-8 h-8' src='/images/office1.jpg'/>
              <p>
                <span className='text-gray-400 text-14'>Hi, </span> {' '}
                <span className='text-gray-400 font-bold ml-1 text-14'>Daniel</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14'/>
              {profileActive && <NavProfile />}
            </div>
          </div>
        </div>  
      )
    )
  }

export default Navbar