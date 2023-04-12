import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { profileSidebar } from '../../data/Data';
import useLogout from '../../hooks/useLogout';
import api from '../../api/axios';
import useAuth from '../../hooks/useAuth';


const ProfileLayout = () => {

    const logout = useLogout();
    const navigate = useNavigate();
    const { auth } = useAuth();

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userChangedInfo, setUserChangedInfo] = useState(false)

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
        }

        fetchUserInfo()
    }, [userChangedInfo])

    const signout = async () => {
        await logout();
        navigate('/');
    }

  return (
    <div className='flex flex-row'>
        <div className='flex flex-col w-[129px] bg-white h-[calc(100vh-68px)]'>
            <ul className='flex flex-col space-y-4 p-4 text-end'>
                {profileSidebar.map((item) => (
                    <NavLink 
                        key={item.title} 
                        to={item.link}
                        className={({ isActive, isPending }) =>
                        isPending ? "text-blue-400" : isActive ? "text-blue-700" : ""
                      }
                    >
                        {item.title}
                    </NavLink>
                ))}

                <button className='text-end' onClick={signout}>
                    Logout
                </button>
            </ul>

        </div>
        <div className='p-8 h-[calc(100vh-68px)] w-[calc(100%-129px)]'>
            {!loading ? 
            <Outlet context={[userData, setUserChangedInfo]}/>
            : <></>}
        </div>
    </div>
  )
}

export default ProfileLayout
