import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';

import api from '../../api/axios';

const Housing = () => {

  const { id } = useParams();

  const housingPath = generatePath('/housing/:id', {
    id: id
  })

  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchHousingData = async () => {
      try {
        const response = await api.get(housingPath);
        setData(response.data);
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

    fetchHousingData();
  }, [])

  return (
  <div className='mt-12 items-center'>

  </div>
  )
}

export default Housing