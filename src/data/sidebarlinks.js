import React from 'react';

import { AiOutlineCalendar } from 'react-icons/ai';
import { BsHouseDoor, BsPeople, BsBinoculars, BsBriefcase } from 'react-icons/bs';
import { IoSchoolOutline } from 'react-icons/io5';
import { FaRegMoneyBillAlt } from 'react-icons/fa';





const links = [
    {
      title: 'Key Insights',
      links: [
        {
          name: 'overview',
          icon: <BsBinoculars />,
        },
      ],
    },
  
    {
      title: 'Demographic Insights',
      links: [
        {
          name: 'population',
          icon: <BsPeople />,
        },
        {
          name: 'housing',
          icon: <BsHouseDoor />,
        },
        {
          name: 'income',
          icon: <FaRegMoneyBillAlt />,
        },
        {
          name: 'education',
          icon: <IoSchoolOutline />,
        },
        {
          name: 'employement',
          icon: <BsBriefcase />,
        },
      ],
    },
    {
      title: 'Property Details',
      links: [
        {
          name: 'information',
          icon: <AiOutlineCalendar />,
        },
      ],
    },
  ];

  export default links 