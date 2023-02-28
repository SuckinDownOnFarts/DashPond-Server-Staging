import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';

import Button from '../Globals/Button';
import { userProfileData } from '../../data/Data';
import useLogout from '../../hooks/useLogout';
import useAuth from '../../hooks/useAuth';
// import { useStateContext } from '../../Context/ContextProvider';
// import avatar from '/images/office1';

const NavProfile = ({ user }) => {
  const { auth } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();

  const signout = async () => {
    await logout();
    navigate('/');
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  return (
    <div className="nav-item absolute right-1 top-16 bg-white p-8 rounded-lg w-80 border border-color">
      <div className="flex justify-between items-center">
        {/* <p className="font-semibold text-lg dark:text-gray-200">User Profile</p> */}
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          // bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src='/images/office1.jpg'
          alt="profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> {auth.user} </p>
          {auth.roles === 11 
          ? <p className="text-gray-500 text-sm dark:text-gray-400">Administrator </p>
            : auth.roles === 10 
            ? <p className="text-gray-500 text-sm dark:text-gray-400">Tier 1 Agent </p>
              : <p>Free Plan</p>
        }
          
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            <button
              type="button"
              onClick={handleProfileClick}
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button
          onClick={signout}
        >Logout</button>
      </div>
    </div>

  );
};

export default NavProfile