import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';
import { Card, Title, Text, Tab, TabList, ColGrid, Block, Metric } from "@tremor/react";

import api from '../../api/axios';

const PropertyInsights = () => {

  const { id } = useParams();

  const listingPath = generatePath('/listing/:id', {
    id: id
  })

  const [ listingData, setListingData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [selectedView, setSelectedView] = useState(1);

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        const response = await api.get(listingPath);
        setListingData(response.data);
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
    <main className='p-10'>
        <Title>Listing Information</Title>
        {/* <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>  */}

        <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-6">
            <Tab value={ 1 } text="Overview" />
            <Tab value={ 2 } text="Tables" />
        </TabList>

        { selectedView === 1 ? (
            <>
                <ColGrid numColsMd={ 2 } numColsLg={ 3 } gapX="gap-x-6" gapY="gap-y-6" marginTop="mt-6">
                    <Card>
                        { /* Placeholder to set height */ }
                        <div className="h-28" />
                    </Card>
                    <Card>
                        { /* Placeholder to set height */ }
                        <div className="h-28" />
                    </Card>
                    <Card>
                        { /* Placeholder to set height */ }
                        <div className="h-28" />
                    </Card>
                </ColGrid>

                <Block marginTop="mt-6">
                    <Card>
                        <div className="h-96" />
                    </Card>
                </Block>
            </>
        ) : (
            <Block marginTop="mt-6">
                <Card>
                    <div className="h-96" />
                </Card>
            </Block>
        ) }
    </main>
  )
}

export default PropertyInsights