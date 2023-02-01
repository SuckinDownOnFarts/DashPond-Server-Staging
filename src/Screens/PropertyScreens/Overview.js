import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';

import api from '../../api/axios';


const Overview = () => {

  const { id } = useParams();

  const overviewPath = generatePath('/overview/:id', {
    id: id
  })

  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const response = await api.get(overviewPath);
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

    fetchOverviewData();
  }, [])

  return (

    <div className='mt-12'>
      <div className='flex flex-wrap justify-center pt-3 pb-10'>
        <p className='font-bold text-5xl' >
          <span>Key Facts and Insights</span>
        </p>
      </div>
      <div>
      {!loading ? 
        <div>{data[2][0].DP03_0050E}</div>
      : <></>}
      </div>
    </div>
  )
}

export default Overview