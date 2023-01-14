import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';

import api from '../../api/axios';

import PivotTable from '../../components/PopulationCharts/PivotTable';

const Overview = () => {

  const { id } = useParams();

  const overviewPath = generatePath('/overview/:id', {
    id: id
  })

  const [ overviewData, setOverviewData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const overviewResponse = await api.get(overviewPath);
        setOverviewData(overviewResponse.data);
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

  let pivotData = [
    { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
    { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
    { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
    { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
    { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }
];

  return (

    <div className='mt-12'>
      <div className='flex flex-wrap justify-center pt-3 pb-10'>
        <p className='font-bold text-5xl' >
          <span>Key Facts and Insights</span>
        </p>
      </div>
      <div>
        <PivotTable 
          pivotData={pivotData}
        />
      </div>
    </div>
  )
}

export default Overview