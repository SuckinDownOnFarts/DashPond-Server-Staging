import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';
import DPSidebar from './DPSidebar';


import api from '../../../api/axios';

import KeyFacts from '../Components/Main/KeyFacts';
import IndustryFacts from '../Components/Main/IndustryFacts';
import EducationFacts from '../Components/Main/EducationEmploymentFacts';
import HouseholdIncomeFacts from '../Components/Main/HouseholdIncomeFacts';
import GrowthRate from '../Components/Population/GrowthRate';
import AgesBreakdown from '../Components/Population/AgesBreakdown';
import AditionalAges from '../Components/Population/AdditionalAges';
import MalesFemales from '../Components/Population/MalesFemales';

import HouseholdIncome from '../Components/Income/HouseholdIncome';

import HousingUnits from '../Components/Housing/HousingUnit';
import UnitsYear from '../Components/Housing/UnitsYear';

import Education from '../Components/Education/Education';

import Maps from '../Components/Maps/Maps';
import SexAgeTable from '../Components/Population/SexAgeTable';

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
  const [selectedView, setSelectedView] = useState('first');
  const [timeSeries, setTimeSeries] = useState([]);
  const [tLoading, setTLoading] = useState(true);
  const [version, setVersion] = useState();
  const [publicId, setPublicId] = useState();



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
          console.log(response.data);
          setAddress(response.data);
          setPublicId(response.data[0].cloudinary_public_id);
          setVersion(response.data[0].cloudinary_version);
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
    <main className='flex flex-row ml-[300px]'>
      <DPSidebar />
      {/* <div className='flex flex-row'>
        <div className=''>
          {!aLoading ? 
          <img 
            src={`https://res.cloudinary.com/djlalgsmk/image/upload/v${version}/${publicId}`} className='object-contain h-48 w-96'
          /> : <></>}
        </div>

        
        <div>
          {!aLoading 
            ? <Metric className='mt-6'>{address[0].address}</Metric> 
            : <></>
          }
          <Title className='mt-2'>Demographic Insights</Title>
          <Text>For a 3 Mile, 5 Mile, and 10 Mile Radius </Text> 
        </div>
      </div> */}
      

      {/* <Tabs defaultValue='first' onTabChange={(value) => setSelectedView(value)}>
        <Tabs.List>
          <Tabs.Tab value='first'>At a Glance</Tabs.Tab>
          <Tabs.Tab value='second'>Population Insights</Tabs.Tab>
          <Tabs.Tab value='third'>Income & Employment Insights</Tabs.Tab>
          <Tabs.Tab value='fourth'>Housing Insights</Tabs.Tab>
          <Tabs.Tab value='fifth'>Education Facts</Tabs.Tab>
          {/* <Tab value={ 6 } text="Map Views" > 
        </Tabs.List>
      </Tabs> */}

      
        {/* <> */}
          <div className='flex flex-col w-full'>
            <KeyFacts 
              // data={data}
              setSelectedView={setSelectedView} />

            <EducationFacts 
              // data={data}
              setSelectedView={setSelectedView}
            />

            <HouseholdIncomeFacts
              // county={address[0].county}
              setSelectedView={setSelectedView}
            />
            
            <div className='flex flex-row '>
              <IndustryFacts 
                data={data}
                setSelectedView={setSelectedView}
              /> 
              <IndustryFacts 
                data={data}
                setSelectedView={setSelectedView}
              /> 
            </div>
          </div>
      {/* { selectedView === 'first' ? (
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
          <div className='flex flex-row '>
            <IndustryFacts 
              data={data}
              setSelectedView={setSelectedView}
            /> 
            <IndustryFacts 
              data={data}
              setSelectedView={setSelectedView}
            /> 
            </div>
            : <></>}

        </>
      ) : selectedView === 'second' ? (
        <>
          {!pLoading && !tLoading ? 
            <SexAgeTable
              data={data}
            /> : <></>} */}

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
        {/* </>
      ) : selectedView === 'third' ? (
        <>
          {!pLoading && !tLoading ? 
            <HouseholdIncome
              data={data}
            /> : <></>}
        </>
      ) : selectedView === 'fourth' ? (
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
      ) :  selectedView === 'fifth' ? (
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
      : <></>} */}


    </main>
  )
}

export default Overview