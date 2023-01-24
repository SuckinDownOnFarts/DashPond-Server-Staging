import React, { useState, useEffect } from 'react';
import Feed from '../components/Homepage/Feed';
import api from '../api/axios';

import useAuth from '../hooks/useAuth';



const Home = () => {

  const { auth } = useAuth();

  const [ propData, setPropData ] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get('/properties');
        setPropData(response.data);
        
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

    fetchProperties();
  }, [])

  // console.log(auth.user);


  return (
    <main className='min-h-[calc(100vh-148px)]'>
    {propData.length ? (
        <Feed posts={propData} />
    ) : (
        <p style={{ marginTop: "2rem" }}>
            Whoops.. Server Error!
        </p>
    )}
    </main>
  )
}

export default Home