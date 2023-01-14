import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';

import PivotTable from '../../components/PopulationCharts/PivotTable';

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
        const dataResponse = await api.get(housingPath);
        setData(dataResponse.data);
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

  // console.log(data);

  let pivotData = []
  !loading ? pivotData = [
    { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }
  ] : pivotData = []

  return (
  <div className='mt-12 items-center'>
    <div className='flex flex-wrap justify-center pt-3 pb-10'>
      <p className='font-bold text-5xl' >
        <span>Key Household Insights</span>
      </p>
    </div>
    <div className=''>
      <PivotTable 
        pivotData={pivotData}
      />
    </div>
    {!loading ?
    <div>
      {data[2][0].DP04_0001E} 
    </div> : <></>}
  </div>
  )
}

export default Housing