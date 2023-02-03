import { useEffect, useState } from 'react';
import { Link, NavLink, generatePath, useParams } from 'react-router-dom';

import { sidebarLinks } from '../../data/Data';


import api from '../../api/axios';

const Sidebar = () => {
  // const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  // const [ screenSize, setScreenSize ] = useState(undefined);
  const [ activeMenu, setActiveMenu ] = useState(true);
  const [ propData, setPropData ] = useState(['Loading']);
  const [ screenSize, setScreenSize ] = useState(undefined);

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
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

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

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md m-2 underline decoration-red-400 decoration-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 hover:bg-light-gray m-2';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pd-10 bg-white'>
      {activeMenu && (
      <>
        <div className='flex justify-between items-center'>
          <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 mx-3 mt-7 flex text-lg font-semibold tracking-tight text-gray-800'>
            <div>
              {propData[0].address}
            </div>
          </Link>
          {/* <TooltipComponent content='Menu' position='BottomCenter'>
            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className='text-xl rounded-full p-3 hover:bg-light-gray hover:dark:bg-secondary-dark-bg dark:text-white mt-4 block '>
              <MdOutlineCancel />
            </button>
          </TooltipComponent> */}
        </div>
        <div className='mt-10'>
          {sidebarLinks.map((item) => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>
              {item.links.map((link) => (
                <NavLink 
                  to={`${currentPath}/${link.link}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  // style={({ isActive }) => ({
                  //   backgroundColor: isActive ? '#f87171' : ''
                  // })}
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