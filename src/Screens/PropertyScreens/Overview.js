import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';
import { Title, Tab, TabList, Block, Metric, Text } from "@tremor/react";
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

import api from '../../api/axios';

import KeyFacts from '../../components/Dashboards/Overview/KeyFacts';
import IndustryFacts from '../../components/Dashboards/Overview/IndustryFacts';
import EducationFacts from '../../components/Dashboards/Overview/EducationEmploymentFacts';
import HouseholdIncomeFacts from '../../components/Dashboards/Overview/HouseholdIncomeFacts';
import GrowthRate from '../../components/Dashboards/Population/GrowthRate';
import AgesBreakdown from '../../components/Dashboards/Population/AgesBreakdown';
import AditionalAges from '../../components/Dashboards/Population/AdditionalAges';
import MalesFemales from '../../components/Dashboards/Population/MalesFemales';


const Overview = () => {

  const { id } = useParams();
  const overviewPath = generatePath('/overview/:id', {
    id: id
  });

  const addressPath = generatePath('/address/:id', {
    id: id
  });

  const tsPath = generatePath('/timeseries/:id', {
    id: id
})

  const [data, setData] = useState([]); //Stays
  const [pLoading, setPLoading] = useState(true); //Stays
  const [address, setAddress] = useState(); //Stays
  const [aLoading, setALoading ] = useState(true); //Stays
  const [selectedView, setSelectedView] = useState(1);
  const [timeSeries, setTimeSeries] = useState([]);
  const [tLoading, setTLoading] = useState(true);



  //Fetch the census data property results 
  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
          const response = await api.get(overviewPath);
          setData(response.data);
          setPLoading(false);
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


  //Fetch property address  
  useEffect(() => {
    const fetchAddress = async () => {
      try {
          const response = await api.get(addressPath);
          setAddress(response.data);
          setALoading(false);
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

    fetchAddress();
  }, [])

  //Fetch Time series Data
  useEffect(() => {
    const queryTimeSeries = async () => {
        try {
            const response = await api.get(tsPath);
            setTimeSeries(response.data);
            setTLoading(false);
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
    queryTimeSeries()
}, [])

  // !aLoading ? console.log(address[0].county) : console.log('gay');;
  

  return (
    <main className='md:px-16 sm:px-2 xs:px-4 my-8'>
      <Block>
        {!aLoading ? <Metric marginTop='mt-6'>{address[0].address}</Metric> : <></>}
        <Title marginTop='mt-2'>Demographic Insights</Title>
        <Text>For a 3 Mile, 5 Mile, and 10 Mile Radius </Text> 
      </Block>
      

      <TabList defaultValue={ 1 } value={selectedView} onValueChange={ (value) => setSelectedView(value) } marginTop="mt-8">
        <Tab value={ 1 } text="At a Glance" />
        <Tab value={ 2 } text="Population Insights" />
        <Tab value={ 3 } text="Income & Employment Insights" />
        <Tab value={ 4 } text="Housing Insights" />
        <Tab value={ 5 } text="Education Facts" />
        <Tab value={ 6 } text="Map Views" />
      </TabList>

      { selectedView === 1 ? (
        <>
          {!pLoading ? 
            <KeyFacts 
              data={data}
              setSelectedView={setSelectedView}
            /> : <></>}
          
          {!pLoading ? 
            <EducationFacts 
              data={data}
              setSelectedView={setSelectedView}
            /> : <></>}

          {!pLoading && !aLoading ? 
            <HouseholdIncomeFacts 
              data={data}
              county={address[0].county}
            /> : <></>}

          {!pLoading ? 
            <IndustryFacts 
              data={data}
              setSelectedView={setSelectedView}
            /> : <></>}

        </>
      ) : selectedView === 2 ? (
        <>
          {!pLoading && !tLoading ? 
            <GrowthRate 
              data={data}
              timeData={timeSeries}
            /> : <></>}

          {!pLoading && !tLoading ? 
            <AgesBreakdown 
              data={data}
              timeData={timeSeries}
            /> : <></>}

          {!pLoading && !tLoading ? 
            <AditionalAges
              data={data}
              timeData={timeSeries}
            /> : <></>}

          {!pLoading && !tLoading ? 
            <MalesFemales
              data={data}
              timeData={timeSeries}
            /> : <></>}
        </>
      ) : selectedView === 3 ? (
        <>
          <div>
            Economic Facts Go Here
          </div>
        </>
      ) : selectedView === 4 ? (
        <>
          <div>
            Housing Facts Go Here
          </div>
        </>
      ) : selectedView === 5 ? (
        <>
          <div>
            Employment Facts Go Here
          </div>
        </>
      ) : selectedView === 6 ? (
        <>
          <div>
            Education Details Go Here
          </div>
        </>
      ) : selectedView === 7 ? (
        <>
          <div>
            Maps Go Here
          </div>
        </>
      ) : <></>}


    </main>
  )
}

export default Overview