import React, { useState, useEffect } from 'react';
import Feed from '../components/Homepage/Feed';
import api from '../api/axios';
import useAuth from '../hooks/useAuth';


const Home = () => {

  const [ propData, setPropData ] = useState([]);
  const { auth } = useAuth();


  console.log(auth);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get('/homepage/feed');
        setPropData(response.data);
        
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers); 
        } else { 
          console.log(`Error: ${err.stack}`)
        }
      }
    }

    fetchProperties();
  }, [])

  return (
    <main className=''>
      
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

// h-[calc(100vh-100px)]