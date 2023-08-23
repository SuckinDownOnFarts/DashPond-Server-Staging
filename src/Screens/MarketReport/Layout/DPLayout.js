import React from 'react';
import DPSidebar from './DPSidebar';
import { Outlet } from 'react-router-dom';



const DataProfile = () => {

    return (
        <div className='flex flex-row w-full'>
            <div className='flex flex-col sticky'>
                <DPSidebar />
            </div>
            <div className=' min-h-screen w-full'>
                <Outlet />
            </div>
        </div>
    );
};

export default DataProfile