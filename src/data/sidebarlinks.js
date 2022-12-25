import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import {  FiEdit } from 'react-icons/fi';
import { BsKanban, BsHouseDoor, BsPeople } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoSchoolOutline } from 'react-icons/io5';

import { FaRegMoneyBillAlt } from 'react-icons/fa';

import { GrOverview, GrUserWorker } from 'react-icons/gr';




const links = [
    {
      title: 'Key Insights',
      links: [
        {
          name: 'overview',
          icon: <GrOverview />,
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
          icon: <GrUserWorker />,
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
        // {
        //   name: 'kanban',
        //   icon: <BsKanban />,
        // },
        // {
        //   name: 'editor',
        //   icon: <FiEdit />,
        // },
        // {
        //   name: 'color-picker',
        //   icon: <BiColorFill />,
        // },
      ],
    },
    // {
    //   title: 'Charts',
    //   links: [
    //     {
    //       name: 'line',
    //       icon: <AiOutlineStock />,
    //     },
    //     {
    //       name: 'area',
    //       icon: <AiOutlineAreaChart />,
    //     },
  
    //     {
    //       name: 'bar',
    //       icon: <AiOutlineBarChart />,
    //     },
    //     {
    //       name: 'pie',
    //       icon: <FiPieChart />,
    //     },
    //     {
    //       name: 'financial',
    //       icon: <RiStockLine />,
    //     },
    //     {
    //       name: 'color-mapping',
    //       icon: <BsBarChart />,
    //     },
    //     {
    //       name: 'pyramid',
    //       icon: <GiLouvrePyramid />,
    //     },
    //     {
    //       name: 'stacked',
    //       icon: <AiOutlineBarChart />,
    //     },
    //   ],
    // },
  ];

  export default links 