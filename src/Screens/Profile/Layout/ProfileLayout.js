import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './ProfileSidebar';

const ProfileLayout = () => {
    const [active, setActive] = useState(2);

  return (
    <div className='flex flex-row w-full'>
        <div className='flex flex-col'>
            <Sidebar 
                active={active}
                setActive={setActive}
            />
        </div>

        <div className='min-h-[calc(100vh-60px)] w-full'>
            <Outlet context={{ setActive }} />
        </div>
    </div>
  )
}

export default ProfileLayout
