import { useEffect, useState } from 'react';
import { Link, NavLink, generatePath, useParams } from 'react-router-dom';

import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsHouseDoor, BsPeople, BsBinoculars } from 'react-icons/bs';
import { IoSchoolOutline } from 'react-icons/io5';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../../data/Data';
import { useStateContext } from '../../Context/ContextProvider';
import api from '../../api/axios';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const [ propData, setPropData ] = useState(['Loading']);

  const links = [
    {
      title: 'Key Insights',
      links: [
        {
          name: 'overview',
          link: 'overview',
          icon: <BsBinoculars />,
        },
      ],
    },
  
    {
      title: 'Demographic Insights',
      links: [
        {
          name: 'population',
          link: 'population',
          icon: <BsPeople />,
        },
        {
          name: 'housing',
          link: 'housing',
          icon: <BsHouseDoor />,
        },
        {
          name: 'income',
          link: 'income',
          icon: <FaRegMoneyBillAlt />,
        },
        // {
        //   name: 'education & employement',
        //   link: 'education+employement',
        //   icon: <IoSchoolOutline />,
        // },
        // {
        //   name: 'employement',
        //   icon: <BsBriefcase />,
        // },
      ],
    },
    {
      title: 'Property Details',
      links: [
        {
          name: 'information',
          link: 'information',
          icon: <AiOutlineCalendar />,
        },
      ],
    },
  ];

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:hover:bg-main-dark-bg dark:text-gray-200  hover:bg-light-gray m-2';

  const { id } = useParams();
  const currentPath = generatePath('/dashpage/:id', {
    id: id
  });
  const pathProperty = generatePath('/properties/:id', {
    id: id
  })

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  useEffect(() => {
    const fetchPropData = async () => {
      try {
        const propDataResponse = await api.get(pathProperty)
        setPropData(propDataResponse.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers); 
        } else { 
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchPropData();
  }, [])

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10'>
      {activeMenu && (
      <>
        <div className='flex justify-between items-center'>
          <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <div>
              {propData[0].address}
            </div>
          </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray hover:dark:bg-secondary-dark-bg dark:text-white mt-4 block '>
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>
              {item.links.map((link) => (
                <NavLink 
                  to={`${currentPath}/${link.link}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : ''
                  })}
                  className={({ isActive }) => isActive ? activeLink : normalLink} 
                  // className='hover:dark:bg-main-dark-bg'
                >
                  {link.icon}
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar