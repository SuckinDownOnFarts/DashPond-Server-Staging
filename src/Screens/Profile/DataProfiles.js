import React, { useState, useEffect } from 'react';
import { generatePath, useOutletContext } from 'react-router-dom';
import Feed from '../../components/Homepage/Feed';
import api from '../../api/axios'
import useAuth from '../../hooks/useAuth';
import { Card, Grid, Title, Text } from '@tremor/react';

const DataProfiles = () => {

  const [propData, setPropData] = useState([]);

  const [userData, setUserChangedInfo] = useOutletContext();

  const { auth } = useAuth();

  const fetchPath = generatePath('/userdataprofiles/feed/:id', {
    id: auth.id
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get(fetchPath)
        setPropData(response.data);
        
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

    fetchProperties();
  }, [])

  return (
    <main>
      <div className='mb-8'>
        <Title>Your Data Profiles</Title>
        <Text>A list of all your data profiles</Text>
      </div>

      <Grid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } className=" gap-x-6 gap-y-6">
        <Card className='m-auto' decoration="top" decorationColor="indigo">
          <div>
            Data Profiles
          </div>

          {propData.length ? (
            <Feed posts={propData} />
          ) : (
              <p style={{ marginTop: "2rem" }}>
                  Nothing to Display
              </p>
          )}
        </Card>
      </Grid>
    </main>
  )
}

export default DataProfiles