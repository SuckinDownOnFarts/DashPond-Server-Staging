import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';

import api from '../../api/axios';

const Education = () => {

  const { id } = useParams();

  const educationPath = generatePath('/education/:id', {
    id: id
  })

  const [ educationData, seteducationData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetcheducationData = async () => {
      try {
        const educationResponse = await api.get(educationPath);
        seteducationData(educationResponse.data);
        setLoading(false);
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

    fetcheducationData();
  }, [])

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap justify-center pt-3 pb-10'>
        <p className='font-bold text-5xl' >
          <span>Education & Employement Insights</span>
        </p>
      </div>
    </div>
  )
}

export default Education