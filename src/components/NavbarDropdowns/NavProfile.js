import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import Button from '../Globals/Button';

import useLogout from '../../hooks/useLogout';
import useAuth from '../../hooks/useAuth';

import { userProfileData } from '../../data/Data';

import { MdOutlineCancel } from 'react-icons/md';
// import avatar from '/images/office1';

const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      document.addEventListener("scroll", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
        document.removeEventListener("scroll", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}

const NavProfile = ({ user, setProfileActive }) => {
  const { auth } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();

  const ref = useRef();


  const signout = async () => {
    await logout();
    navigate('/');
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  

  useOnClickOutside(ref, () => setProfileActive(false));

  return (
    <div className="nav-item absolute right-3 top-16 bg-white p-8 rounded-lg w-80 border border-color" ref={ref}>
      <div className="flex gap-5 items-center border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src='/images/office1.jpg'
          alt="profile"
        />
        <div>
          <p className="font-semibold text-xl"> {auth.user} </p>
          {auth.roles === 11 
          ? <p className="text-gray-500 text-sm ">Administrator </p>
            : auth.roles === 10 
            ? <p className="text-gray-500 text-sm ">Tier 1 Agent </p>
              : <p>Free Plan</p>
        }
          
          <p className="text-gray-500 text-sm font-semibold "> info@shop.com </p>
        </div>
      </div>
      <div>
        {userProfileData.map((item, index) => (
          <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer ">
            <button
              type="button"
              onClick={handleProfileClick}
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-500 text-sm "> {item.desc} </p>
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