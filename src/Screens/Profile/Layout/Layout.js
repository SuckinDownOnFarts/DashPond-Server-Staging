import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import api from './../../../api/axios';
import useAuth from './../../../hooks/useAuth';
import Sidebar from './Sidebar';

const ProfileLayout = () => {
    const navigate = useNavigate();
    const { auth } = useAuth();


    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userChangedInfo, setUserChangedInfo] = useState(false);
    const [active, setActive] = useState(2);

    // useEffect(() => {
    //     const fetchUserInfo = async () => {
    //         try {
    //             const response = await api.post('/profileinfo', {
    //                 id: auth.id
    //             });
    //             setUserData(response.data);
    //             setLoading(false);
    //             setUserChangedInfo(false);
    //         } catch (err) {
    //             if (err.response) {
    //               console.log(err.response.data);
    //               console.log(err.response.status);
    //               console.log(err.response.headers); 
    //             } else { 
    //               console.log(`Error: ${err.message}`);
    //             }
    //         }
    //     };
    //     fetchUserInfo();
    // }, [userChangedInfo]);

  return (
    <div className='flex flex-row'>
        <div className='fixed flex flex-col bg-white z-50'>
            <Sidebar 
                active={active}
                setActive={setActive}
            />
        </div>
        <div className='bg-slate-100 ml-[80px] min-h-[calc(100vh-60px)] w-[calc(100%-80px)]'>
            {/* {!loading ?  */}
            <Outlet context={{ setActive }} />
            {/* : <></>} */}
        </div>
    </div>
  )
}

export default ProfileLayout
