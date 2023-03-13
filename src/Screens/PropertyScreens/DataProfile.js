import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';



const DataProfile = () => {
  
  const [bufferSize, setBufferSize] = useState(0)

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