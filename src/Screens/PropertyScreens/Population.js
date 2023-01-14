import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';
import { GoPrimitiveDot } from 'react-icons/go';

import api from '../../api/axios';

import Descriptors from '../../components/PopulationCharts/Descriptors';
import Stacked from '../../components/PopulationCharts/Stacked';
import Pie from '../../components/PopulationCharts/Pie';

import { useStateContext } from '../../Context/ContextProvider';


const Population = () => {
  const { currentColor } = useStateContext();

  const { id } = useParams();

  const populationPath = generatePath('/population/:id', {
    id: id
  })

  const [ populationData, setPopulationData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const populationResponse = await api.get(populationPath);
        setPopulationData(populationResponse.data);
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

    fetchPopulationData();
  }, [])

  // console.log(populationData);


  let ageData = []
  !loading ? ageData = [
    { x: 'Under 5', y: populationData[0].DP05_0005E},
    { x: '5 to 9', y: populationData[0].DP05_0006E },
    { x: '10 to 14', y: populationData[0].DP05_0007E },
    { x: '15 to 19', y: populationData[0].DP05_0008E },
    { x: '20 to 24', y: populationData[0].DP05_0009E },
    { x: '25 to 34', y: populationData[0].DP05_0010E },
    { x: '35 to 44', y: populationData[0].DP05_0011E },
    { x: '45 to 54', y: populationData[0].DP05_0012E },
    { x: '55 to 59', y: populationData[0].DP05_0013E },
    { x: '60 to 64', y: populationData[0].DP05_0014E },
    { x: '65 to 74', y: populationData[0].DP05_0015E },
    { x: '75 to 84', y: populationData[0].DP05_0016E },
    { x: '85+', y: populationData[0].DP05_0017E },
  ] : ageData=[]

  let raceData = []
  !loading ? raceData = [
    { x: 'American', y: populationData[0].DP02_0125E},
    { x: 'Arab', y: populationData[0].DP02_0126E },
    { x: 'Czech', y: populationData[0].DP02_0127E },
    { x: 'Danish', y: populationData[0].DP02_0128E },
    { x: 'Dutch', y: populationData[0].DP02_0129E },
    { x: 'English', y: populationData[0].DP02_0130E },
    { x: 'French', y: populationData[0].DP02_0131E },
    { x: 'French Canadian', y: populationData[0].DP02_0132E },
    { x: 'German', y: populationData[0].DP02_0133E },
    { x: 'Greek', y: populationData[0].DP02_0134E },
    { x: 'Hungarian', y: populationData[0].DP02_0135E },
    { x: 'Irish', y: populationData[0].DP02_0136E },
    { x: 'Italian', y: populationData[0].DP02_0137E },
    { x: 'Lithuanian', y: populationData[0].DP02_0138E },
    { x: 'Norwegian', y: populationData[0].DP02_0139E },
    { x: 'Polish', y: populationData[0].DP02_0140E },
    { x: 'Portuguese', y: populationData[0].DP02_0141E },
    { x: 'Russian', y: populationData[0].DP02_0142E },
    { x: 'Scotch-Irish', y: populationData[0].DP02_0143E },
    { x: 'Scottish', y: populationData[0].DP02_0144E },
    { x: 'Slovak', y: populationData[0].DP02_0145E },
    { x: 'Subsharan African', y: populationData[0].DP02_0146E },
    { x: 'Swedish', y: populationData[0].DP02_0147E },
    { x: 'Swiss', y: populationData[0].DP02_0148E },
    { x: 'Ukrainian', y: populationData[0].DP02_0149E },
    { x: 'Welsh', y: populationData[0].DP02_0150E },
    { x: 'West Indian', y: populationData[0].DP02_0151E },
  ] : raceData=[]

  let maritalData = []
  !loading ? maritalData = [
      { x: 'Males 15 and Over Population', y: populationData[0].DP02_0025E},
      { x: 'Never Married', y: populationData[0].DP02_0026E},
      { x: 'Married', y: populationData[0].DP02_0027E},
      { x: 'Seperated', y: populationData[0].DP02_0028E},
      { x: 'Widowed', y: populationData[0].DP02_0029E},
      { x: 'Divorced', y: populationData[0].DP02_0030E},
    
    
      { x: 'Females 15 and Over Population', y: populationData[0].DP02_0031E},
      { x: 'Never Married', y: populationData[0].DP02_0032E},
      { x: 'Married', y: populationData[0].DP02_0033E},
      { x: 'Seperated', y: populationData[0].DP02_0034E},
      { x: 'Widowed', y: populationData[0].DP02_0035E},
      { x: 'Divorced', y: populationData[0].DP02_0036E},
    
  ] : maritalData=[]


  return (

    <div className='mt-12'>
      <div className='flex flex-wrap justify-center pt-3 pb-10'>
        <p className='font-bold text-5xl' >
          <span>Key Population Insights</span>
        </p>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        {!loading ?
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          <Descriptors 
            title='Total Population'
            censusVar={populationData[0].DP05_0001E}
          />
          <Descriptors 
            title='Median Age'
            censusVar={populationData[0].DP05_0018E}
          />
          <Descriptors 
            title='21 and Over'
            censusVar={populationData[0].DP05_0022E}
          />
          <Descriptors 
            title='18 and Under'
            censusVar={populationData[0].DP05_0019E}
          />
          <Descriptors 
            title='65 and Over'
            censusVar={populationData[0].DP05_0024E}
          />
        </div>
        : <></>}
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl lg:w-1000 md:w-780'>
            <div className='flex justify-between'>
              <p className='font-semibold text-xl'>
                Males vs. Females
              </p>
            </div>
            <div className='mt-10 flex gap-10 justify-center'>
              <div className='border-r-1 border-color m-4 pr-10'>
                <div className='mt-5'>
                  {!loading ? 
                    <Pie 
                      males={populationData[0].DP05_0002E}
                      females={populationData[0].DP05_0003E}
                    /> : <></>
                  }
                </div>
              </div>
              <div>
                {!loading ?                 
                <Stacked 
                  chartType='StackingColumn'
                  color={currentColor}
                  width='520px'
                  height='360px'
                  id='AgeBreakdown'
                  dataSource={ageData}
                  yTitle='# of Persons'
                  xTitle='Age Range'
                  chartTitle='Age Breakdown'
                  yMin={0}
                  yMax={1000}
                  yInterval={100}
                /> : <></>}
              </div>
            </div>
            <div className='mt-10 flex justify-center'>
            {!loading ?                 
                <Stacked 
                  chartType='StackingColumn'
                  color={currentColor}
                  width='820px'
                  height='360px'
                  id='ancestry'
                  dataSource={raceData}
                  yTitle='# of Persons'
                  xTitle='Ancestry'
                  chartTitle='People by Race'
                  yMin={0}
                  yMax={500}
                  yInterval={100}
                /> : <></>}
            </div>
        </div>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        {!loading ?
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          <Descriptors 
            title='Civilian Population Over 18'
            censusVar={populationData[0].DP02_0069E}
          />
          <Descriptors 
            title='Civilian Veterans'
            censusVar={populationData[0].DP02_0070E}
          />
          <Descriptors 
            title='Foreign Born Population'
            censusVar={populationData[0].DP02_0095E}
          />
          <Descriptors 
            title='Naturilized Citizens'
            censusVar={populationData[0].DP02_0096E}
          />
          <Descriptors 
            title='Aliens'
            censusVar={populationData[0].DP02_0097E}
          />
        </div>
        : <></>}
      </div>
      <div className='mt-10 flex justify-center'>
        {!loading ?                 
        <Stacked 
          chartType='StackingColumn'
          color={currentColor}
          width='520px'
          height='360px'
          id='maritalStatus'
          dataSource={maritalData}
          yTitle='# of Persons'
          xTitle='Status'
          chartTitle='Marital Status by Sex'
          yMin={0}
          yMax={2000}
          yInterval={100}
        /> : <></>}
      </div>
    </div>
  )
}

export default Population
