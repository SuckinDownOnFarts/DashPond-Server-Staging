import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';
import { Title, Tab, TabList, Metric, Text } from "@tremor/react";
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

import api from '../../api/axios';

import KeyFacts from './Components/Overview/KeyFacts';
import IndustryFacts from './Components/Overview/IndustryFacts';
import EducationFacts from './Components/Overview/EducationEmploymentFacts';
import HouseholdIncomeFacts from './Components/Overview/HouseholdIncomeFacts';
import GrowthRate from './Components/Population/GrowthRate';
import AgesBreakdown from './Components/Population/AgesBreakdown';
import AditionalAges from './Components/Population/AdditionalAges';
import MalesFemales from './Components/Population/MalesFemales';

import HouseholdIncome from './Components/Income/HouseholdIncome';

import HousingUnits from './Components/Housing/HousingUnit';
import UnitsYear from './Components/Housing/UnitsYear';

import Education from './Components/Education/Education';

import Maps from './Components/Maps/Maps';
import SexAgeTable from './Components/Population/SexAgeTable';

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
            // console.log(response.data[0].length);
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
      <div className='flex flex-row'>
        <div className=''>
          <img 
            src={`/images/medical.jpg`} className='object-contain h-48 w-96'
          />
        </div>

        
        <div>
          {!aLoading 
            ? <Metric className='mt-6'>{address[0].address}</Metric> 
            : <></>
          }
          <Title className='mt-2'>Demographic Insights</Title>
          <Text>For a 3 Mile, 5 Mile, and 10 Mile Radius </Text> 
        </div>
      </div>
      

      <TabList defaultValue={ 1 } value={selectedView} onValueChange={ (value) => setSelectedView(value) } className="mt-8">
        <Tab value={ 1 } text="At a Glance" />
        <Tab value={ 2 } text="Population Insights" />
        <Tab value={ 3 } text="Income & Employment Insights" />
        <Tab value={ 4 } text="Housing Insights" />
        <Tab value={ 5 } text="Education Facts" />
        {/* <Tab value={ 6 } text="Map Views" /> */}
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
            <SexAgeTable
              data={data}
            /> : <></>}

           {/* {!pLoading && !tLoading ? 
            <GrowthRate 
              data={data}
              timeData={timeSeries}
            /> : <></>}

            {!pLoading && !tLoading ? 
            <MalesFemales
              data={data}
              timeData={timeSeries}
            /> : <></>}

          {!pLoading && !tLoading ? 
            <AditionalAges
              data={data}
              timeData={timeSeries}
            /> : <></>} */}

          {/* {!pLoading && !tLoading ? 
            <AgesBreakdown 
              data={data}
              timeData={timeSeries}
            /> : <></>}



           */}
        </>
      ) : selectedView === 3 ? (
        <>
          {!pLoading && !tLoading ? 
            <HouseholdIncome
              data={data}
            /> : <></>}
        </>
      ) : selectedView === 4 ? (
        <>
          {!pLoading ? 
            <HousingUnits
              data={data}
            /> : <></>}

          {!pLoading ? 
            <UnitsYear
              data={data}
            /> : <></>}
        </>
      ) :  selectedView === 5 ? (
        <>
          {!pLoading ? 
            <Education
              data={data}
            /> : <></>}
        </>
      ) 
      // : selectedView === 6 ? (
      //   <>
      //     {!pLoading ? 
      //       <Maps
      //         data={data}
      //       /> : <></>}
      //   </>
      // ) 
      : <></>}


    </main>
  )
}

export default Overview