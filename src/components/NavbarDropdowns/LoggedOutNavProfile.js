import React from 'react';
import Button from '../Globals/Button';
import { MdOutlineCancel } from 'react-icons/md';

const LoggedOutNavProfile = () => {
  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 border border-color">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src='/images/office1/jpg'
          alt="user-profile"
        />
      </div>
    </div>
  );
};


export default LoggedOutNavProfile