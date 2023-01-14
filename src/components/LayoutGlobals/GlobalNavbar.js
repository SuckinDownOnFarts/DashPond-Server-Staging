import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoPersonCircleOutline } from 'react-icons/io5';

import NavProfile from '../NavbarDropdowns/NavProfile';
import LoggedOutNavProfile from '../NavbarDropdowns/LoggedOutNavProfile';

import { useStateContext } from '../../Context/ContextProvider';
import useAuth from '../../hooks/useAuth';

import Logo from '../Globals/Logo'

// const NavButton = ({ title, customFunc, icon, color, dotColor}) => (
//   <TooltipComponent content={title} position='BottomCenter'>
//     <button 
//       type='button'
//       onClick={customFunc}
//       style={{ color}}
//       className='relative text-xl rounded-full p-3 hover:bg-light-gray'
//     >
//       <span 
//         style={{ background: dotColor}}
//         className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
//       />
//         {icon}
//     </button>
//   </TooltipComponent>
// )

const GlobalNavbar = () => {
  const { activeMenu, setActiveMenu, profileActive, handleProfileClick, currentColor } = useStateContext();

  const { auth } = useAuth();

  const baseURL = 'http://localhost:3000'

  return (
    auth.user ? (
      <div className='flex sticky top-0 z-50 justify-between p-2 md:mx-6 dark:bg-main-dark-bg bg-main-bg border-b-1'>
        <div className='flex items-center'>
          <Link to='/'>
            <div>
              <Logo />
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0
            md:bg-white">
              <li>
                <a href={`${baseURL}/about`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                ">About</a>
              </li>
              <li>
                <a href={`${baseURL}/create`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                ">Create Dashboard</a>
              </li>
              <li>
                <a href={`${baseURL}/contact`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                ">Contact</a>
              </li>
            </ul>  
          </div>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleProfileClick()}>
            <img className='rounded-full w-8 h-8' src='/images/office1.jpg'/>
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>{auth.user}</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            {profileActive && <NavProfile 
              user={auth.user}
            />}
          </div>
        </div>  
      </div>    
    ) : ( 
      <div className='flex sticky top-0 z-50 justify-between p-2 md:mx-6 dark:bg-main-dark-bg bg-main-bg border-b-1'>
        <div className='flex items-center'>
          <Link to='/'>
            <div>
              <Logo />
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0
            md:bg-white">
              <li>
                <a href={`${baseURL}/About`} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                ">About</a>
              </li>
              <li>
                <a href="http://localhost:3000/pricing" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                ">Pricing</a>
              </li>
              <li>
                <a href="http://localhost:3000/contact" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                ">Contact</a>
              </li>
              <li>
                <a href="http://localhost:3000/login" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                ">Login</a>
              </li>
              <li>
                <a href="http://localhost:3000/register" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
                ">Register</a>
              </li>
            </ul>  
          </div>
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleProfileClick()}>
            {/* <img className='rounded-full w-8 h-8' src='/images/user.jpg'/> */}
            <IoPersonCircleOutline className='w-8 h-8 text-gray-700'/>
            {/* <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>{auth.user}</span>
            </p> */}
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
            {profileActive && <LoggedOutNavProfile />}
          </div>
        </div>  
      </div>    
    )
  )
}
export default GlobalNavbar


    //   <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0
    //   md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //    <li>
    //      <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
    //       dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
    //    </li>
    //    <li>
    //      <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
    //       dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
    //    </li>
    //    <li>
    //      <a href="http://localhost:3000/create" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0
    //       dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create Dashboard</a>
    //    </li>
    //    <li>
    //      <a href="http://localhost:3000/login" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
    //       md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
    //        Login</a>
    //    </li>
    //    <li>
    //      <a href="http://localhost:3000/register" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
    //       md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
    //        Register</a>
    //    </li>
    //  </ul>