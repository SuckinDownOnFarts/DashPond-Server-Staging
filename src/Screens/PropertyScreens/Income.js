import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';

import api from '../../api/axios';

const Income = () => {

  const { id } = useParams();

  const incomePath = generatePath('/income/:id', {
    id: id
  })

  const [ incomeData, setIncomeData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        const incomeResponse = await api.get(incomePath);
        setIncomeData(incomeResponse.data);
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

  return (
  <div className='mt-12'>
    <div className='flex flex-wrap justify-center pt-3 pb-10'>
      <p className='font-bold text-5xl' >
        <span>Key Income Insights</span>
      </p>
    </div>
  </div>
  )
}

export default Income