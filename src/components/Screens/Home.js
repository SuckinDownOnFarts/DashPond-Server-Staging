import React, { useState, useEffect } from 'react';
import Feed from '../Homepage/Feed';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Container from 'react-bootstrap/Container';




const Home = () => {

  const api = axios.create({
    baseURL: 'https://localhost:5000'
  });

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

  console.log(propData.length);


  return (
    <>

    {propData.length ? (
        <Feed posts={propData} />
    ) : (
        <p style={{ marginTop: "2rem" }}>
            Whoops.. Server Error!
        </p>
    )}
   
    </>
  )
}

export default Home