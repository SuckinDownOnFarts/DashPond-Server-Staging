import React, { useState, useEffect } from 'react';
import { useParams, generatePath, Outlet } from 'react-router-dom';
import api from '../api/axios';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';

import Sidebar from '../components/DashComponents/Sidebar';
import PropertyNavbar from '../components/DashComponents/PropertyNavbar';
import { useStateContext } from '../Context/ContextProvider';


const DashPage = () => {
  const { id } = useParams();
  const [ dashData, setDashData ] = useState([]);
  
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  const path = generatePath('/data/:id', {
    id: id
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(path);
        setDashData(response.data);
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

    fetchData();
  }, [])

  //To view DB data in browser console
  // console.log(dashData);


  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeMode && currentColor) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode)
    }
  }, [])

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
          <TooltipComponent 
            content="Settings" 
            position="Top"
          >
            <button 
              type='button' 
              className='text-3xl p-3 hover:drop-shadow hover-bg-light-grey text-white' 
              style={{ backgroundColor: 'blue', borderRadius: '50%'}}
              onClick={() => setThemeSettings(true)}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            Sidebar w-0
          </div>
        )}
        <div className={
          activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2'
        }>
            <PropertyNavbar />
            <Outlet />
        </div>
        
      </div>
      
    </div>






    // <>
    //   {dashData.map(post => (
    //     <div>
    //       <h1 key={post.id}>Total Households: {post.DP02_0001E}</h1>
    //       <h1 key={post.id}>Total Population: {post.DP05_0001E}</h1>
    //       <h1 key={post.id}>Population 16 years and Over: {post.DP03_0001E}</h1>
    //       <h1 key={post.id}>Civilian Labor Force: {post.DP03_0008E}</h1>
    //       <h1 key={post.id}>Median Household Income: {post.DP03_0062E}</h1>
    //       <h1 key={post.id}>Mean Household Income: {post.DP03_0063E}</h1>
    //       <h1 key={post.id}># of Families: {post.DP03_0075E}</h1>
    //       <h1 key={post.id}>Per Capita Income: {post.DP03_0088E}</h1>
    //       <h1 key={post.id}>{post.price}</h1>
    //       <h1 key={post.id}>{post.prop_type}</h1>
    //       <h1 key={post.id}>{post.sale_type}</h1>

    //     </div>
    //   ))}
      
    // </>
  );
};


export default DashPage