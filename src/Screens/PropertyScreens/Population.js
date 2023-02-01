import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';

import api from '../../api/axios';





const Population = () => {

  const { id } = useParams();

  const populationPath = generatePath('/population/:id', {
    id: id
  })

  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchPopulationData = async () => {
      try {
        const response = await api.get(populationPath);
        setData(response.data);
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

  console.log(data);


  let ageData = []
  !loading ? ageData = [
    { x: 'Under 5', y: data[0][0].DP05_0005E},
    { x: '5 to 9', y: data[0][0].DP05_0006E },
    { x: '10 to 14', y: data[0][0].DP05_0007E },
    { x: '15 to 19', y: data[0][0].DP05_0008E },
    { x: '20 to 24', y: data[0][0].DP05_0009E },
    { x: '25 to 34', y: data[0][0].DP05_0010E },
    { x: '35 to 44', y: data[0][0].DP05_0011E },
    { x: '45 to 54', y: data[0][0].DP05_0012E },
    { x: '55 to 59', y: data[0][0].DP05_0013E },
    { x: '60 to 64', y: data[0][0].DP05_0014E },
    { x: '65 to 74', y: data[0][0].DP05_0015E },
    { x: '75 to 84', y: data[0][0].DP05_0016E },
    { x: '85+', y: data[0][0].DP05_0017E },
  ] : ageData=[]

  let raceData = []
  !loading ? raceData = [
    { x: 'American', y: data[0][0].DP02_0125E},
    { x: 'Arab', y: data[0][0].DP02_0126E },
    { x: 'Czech', y: data[0][0].DP02_0127E },
    { x: 'Danish', y: data[0][0].DP02_0128E },
    { x: 'Dutch', y: data[0][0].DP02_0129E },
    { x: 'English', y: data[0][0].DP02_0130E },
    { x: 'French', y: data[0][0].DP02_0131E },
    { x: 'French Canadian', y: data[0][0].DP02_0132E },
    { x: 'German', y: data[0][0].DP02_0133E },
    { x: 'Greek', y: data[0][0].DP02_0134E },
    { x: 'Hungarian', y: data[0][0].DP02_0135E },
    { x: 'Irish', y: data[0][0].DP02_0136E },
    { x: 'Italian', y: data[0][0].DP02_0137E },
    { x: 'Lithuanian', y: data[0][0].DP02_0138E },
    { x: 'Norwegian', y: data[0][0].DP02_0139E },
    { x: 'Polish', y: data[0][0].DP02_0140E },
    { x: 'Portuguese', y: data[0][0].DP02_0141E },
    { x: 'Russian', y: data[0][0].DP02_0142E },
    { x: 'Scotch-Irish', y: data[0][0].DP02_0143E },
    { x: 'Scottish', y: data[0][0].DP02_0144E },
    { x: 'Slovak', y: data[0][0].DP02_0145E },
    { x: 'Subsharan African', y: data[0][0].DP02_0146E },
    { x: 'Swedish', y: data[0][0].DP02_0147E },
    { x: 'Swiss', y: data[0][0].DP02_0148E },
    { x: 'Ukrainian', y: data[0][0].DP02_0149E },
    { x: 'Welsh', y: data[0][0].DP02_0150E },
    { x: 'West Indian', y: data[0][0].DP02_0151E },
  ] : raceData=[]

  let maritalData = []
  !loading ? maritalData = [
      { x: 'Males 15 and Over Population', y: data[0][0].DP02_0025E},
      { x: 'Never Married', y: data[0][0].DP02_0026E},
      { x: 'Married', y: data[0][0].DP02_0027E},
      { x: 'Seperated', y: data[0][0].DP02_0028E},
      { x: 'Widowed', y: data[0][0].DP02_0029E},
      { x: 'Divorced', y: data[0][0].DP02_0030E},
    
    
      { x: 'Females 15 and Over Population', y: data[0][0].DP02_0031E},
      { x: 'Never Married', y: data[0][0].DP02_0032E},
      { x: 'Married', y: data[0][0].DP02_0033E},
      { x: 'Seperated', y: data[0][0].DP02_0034E},
      { x: 'Widowed', y: data[0][0].DP02_0035E},
      { x: 'Divorced', y: data[0][0].DP02_0036E},
    
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
          {/* Descriptors */}
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
                  {/* Pie */}
                </div>
              </div>
              <div>
                {/* Stacked */}
              </div>
            </div>
            <div className='mt-10 flex justify-center'>
              {/* Stacked */}
            </div>
        </div>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
      </div>
      <div className='mt-10 flex justify-center'>
      </div>
    </div>
  )
}

export default Population
