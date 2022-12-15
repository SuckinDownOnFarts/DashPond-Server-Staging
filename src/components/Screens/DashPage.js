import React, { useState, useEffect } from 'react';
import { useParams, generatePath } from 'react-router-dom';
import api from '../../api/axios';


const DashPage = () => {
  const { id } = useParams();
  const [ dashData, setDashData ] = useState([]);
  
 

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

  return (
    <>
      {dashData.map(post => (
        <div>
          <h1 key={post.id}>Total Households: {post.DP02_0001E}</h1>
          {/* <h1 key={post.id}>{post.id}</h1>
          <h1 key={post.id}>{post.price}</h1>
          <h1 key={post.id}>{post.prop_type}</h1>
          <h1 key={post.id}>{post.sale_type}</h1> */}

        </div>
      ))}
      
    </>
  );
};


export default DashPage