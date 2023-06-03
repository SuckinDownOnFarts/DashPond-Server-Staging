import React, { useEffect, useState, useRef } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { profileSidebar } from '../../../data/Data';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

import useLogout from './../../../hooks/useLogout';
import api from './../../../api/axios';
import useAuth from './../../../hooks/useAuth';
import Sidebar from './Sidebar';

const ProfileLayout = () => {

    const logout = useLogout();
    const navigate = useNavigate();
    const { auth } = useAuth();

    // const toast = useRef(null);

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userChangedInfo, setUserChangedInfo] = useState(false)

    const signout = async () => {
        await logout();
        navigate('/');
    }

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await api.post('/profileinfo', {
                    id: auth.id
                });
                setUserData(response.data);
                setLoading(false);
                setUserChangedInfo(false);
            } catch (err) {
                if (err.response) {
                  console.log(err.response.data);
                  console.log(err.response.status);
                  console.log(err.response.headers); 
                } else { 
                  console.log(`Error: ${err.message}`);
                }
            }
        };
        fetchUserInfo();
    }, [userChangedInfo]);

    const confirmLogout = () => {
        confirmDialog({
          message: `Are you sure you want to logout?` ,
          header: 'Logout?',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: `Successfully Logged Out`, life: 3000 });
            signout();
          },
        });
      };


  return (
    <div className='flex flex-row'>
        <div className='fixed flex flex-col bg-white'>
            {/* <ul className='flex flex-col space-y-4 p-4 text-end'>
                {profileSidebar.map((item) => (
                    <NavLink 
                        key={item.title} 
                        to={item.link}
                        className={({ isActive, isPending }) =>
                        isPending ? "text-blue-400" : isActive ? "text-blue-700" : ""}
                    >
                        {item.title}
                    </NavLink>
                ))}

                {/* <Toast ref={toast} /> 
                <ConfirmDialog /> 

                <button className='text-end' onClick={confirmLogout}>
                    Logout
                </button>
            </ul> */}

            <Sidebar />

        </div>
        <div className='px-8 py-6 ml-[129px] min-h-[calc(100vh-68px)] w-[calc(100%-129px)]'>
            {!loading ? 
            <Outlet context={[userData, setUserChangedInfo]}/>
            : <></>}
        </div>
    </div>
  )
}

export default ProfileLayout
