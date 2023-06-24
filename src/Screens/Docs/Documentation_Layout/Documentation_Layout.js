import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Documentation_Navbar';

const DocsLayout = () => {
  return (
    <div className='flex flex-row'>
      <div>
        <Navbar />
      </div>


      <div className='w-2/3 ml-[300px]'>
        <Outlet />
      </div>

    </div>
  )
}

export default DocsLayout