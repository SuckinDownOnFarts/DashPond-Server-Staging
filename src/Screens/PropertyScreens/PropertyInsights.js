import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';

import api from '../../api/axios';

const PropertyInsights = () => {

  const { id } = useParams();

  const listingPath = generatePath('/listing/:id', {
    id: id
  })

  const [ listingData, setListingData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const listingResponse = await api.get(listingPath);
        setListingData(listingResponse.data);
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

    fetchListingData();
  }, [])
  return (
  <div className='mt-12'>
    <div className='flex flex-wrap justify-center pt-3 pb-10'>
      <p className='font-bold text-5xl' >
        <span>Listing Details</span>
      </p>
    </div>
  </div>
  )
}

export default PropertyInsights