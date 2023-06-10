import React from 'react';
import { Outlet } from 'react-router-dom';



const DataProfile = () => {

  return (
    <div>
      <div className='flex relative z-10'>
        <div className='bg-slate-50 min-h-screen w-full'>
          <Outlet />
        </div>     
      </div>     
    </div>
  );
};

export default DataProfile