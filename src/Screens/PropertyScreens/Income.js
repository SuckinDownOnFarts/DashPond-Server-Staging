import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';

import api from '../../api/axios';

const Income = () => {

  const { id } = useParams();

  const incomePath = generatePath('/income/:id', {
    id: id
  })

  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        const incomeResponse = await api.get(incomePath);
        setData(incomeResponse.data);
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

    fetchIncomeData();
  }, [])

  // console.log(data);

  return (
  <div className='mt-12'>
    <div className='flex flex-wrap justify-center pt-3 pb-10'>
      <p className='font-bold text-5xl' >
        <span>Key Income Insights</span>
      </p>
    </div>
    <div>
      {!loading ? 
        <div>{data[1][0].DP03_0060E}</div>
      : <></>}
    </div>
  </div>
  )
}

export default Income