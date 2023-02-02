import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from '../../components/Globals/Sidebar';
// import GlobalNavbar from '../components/LayoutGlobals/GlobalNavbar';
// import { useStateContext } from '../Context/ContextProvider';


const DashPage = () => {

  // const { activeMenu } = useStateContext();
    const activeMenu = true
  return (
    <div>
      <div className='flex relative'>
        {activeMenu ? (
          <div className='w-72 fixed sidebar bg-white'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0'>
          </div>
        )}
        <div className={activeMenu ? 'bg-slate-50 min-h-screen md:ml-72 w-full' : 'dark:bg-main-dark-bg bg-main-bg min-h-screen w-full flex-2'}>
          <Outlet />
        </div>     
      </div>     
    </div>
  );
};

export default DashPage