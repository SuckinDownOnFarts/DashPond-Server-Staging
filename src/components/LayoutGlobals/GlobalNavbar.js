import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import PopupProfileMenu from '../NavbarDropdowns/PopupProfileMenu';
import useAuth from '../../hooks/useAuth';
import Logo from '../Globals/Logo'


const GlobalNavbar = () => {
  const [email, setEmail] = useState('U');
  


  const { auth } = useAuth();

  const [id, setId] = useState(auth?.id);

  useEffect(() => {
    const iconLetterSet = () => {
      if (auth.email || auth.id) {
      setEmail(auth?.email)
      setId(auth?.id)
      }
    };
    iconLetterSet();
  }, [auth]);



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
    
    //RENDER WITH USER LOGIN
    auth?.accessToken ? (
      <nav className='mx-0 sticky top-0 z-50 drop-shadow-sm '>
        <div className='pl-6 mx-0 flex sticky top-0 z-50 justify-between p-2 bg-white border-b-1 h-[68px]'>

          <div className='flex items-center'>
            <Link to='/'>
              <div>
                <Logo />
              </div>
            </Link>
          </div>

          <div className="pr-4 flex items-center">
            <div className="hidden w-full mr-2  md:block md:w-auto">
              <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0">
                <NavLink 
                  to='/documentation'
                  className={({ isActive }) => 
                    isActive ? 'text-blue-700 block py-2 pl-3 pr-4 text-sm rounded md:hover:bg-transparent md:border-0 md:p-0' 
                    : 'block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:border-0 md:p-0'             
                  }
                >
                  Documentation
                </NavLink>
                <NavLink 
                  to='/pricing'
                  className={({ isActive }) => 
                    isActive ? 'text-blue-700 block py-2 pl-3 pr-4 text-sm rounded md:hover:bg-transparent md:border-0 md:p-0' 
                    : 'block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:border-0 md:p-0'             
                  }
                >
                  Pricing
                </NavLink>
                <NavLink 
                  to='/create/address+input'
                  className={({ isActive }) => 
                    isActive ? 'text-blue-700 block py-2 pl-3 pr-4 text-sm rounded md:hover:bg-transparent md:border-0 md:p-0' 
                    : 'block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:border-0 md:p-0'             
                  }
                >
                  Create Dashboard
                </NavLink>
                <NavLink 
                  to='/contact'
                  className={({ isActive }) => 
                    isActive ? 'text-blue-700 block py-2 pl-3 pr-4 text-sm rounded md:hover:bg-transparent md:border-0 md:p-0' 
                    : 'block py-2 pl-3 pr-4 text-sm text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-blue-700 md:border-0 md:p-0'             
                  }
                >
                  Contact
                </NavLink>
              </div>  
            </div>

            <PopupProfileMenu 
              email={email}
              id={id}

            />

          </div>  
        </div>    
      </nav>


    ) : ( 

      //RENDER WITH NO USER LOGIN
      <nav className='sticky top-0 z-50 drop-shadow-md slate-50 h-[68px]'>
        <div className='flex justify-between p-2 bg-white border-b-1 '>
          <div className='pl-6 flex items-center'>
            <Link to='/'>
              <div>
                <Logo />
              </div>
            </Link>
          </div>
          <div className="flex items-center pr-4">
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
          </div>  
        </div>   
      </nav> 
    )
  )
}
export default GlobalNavbar
