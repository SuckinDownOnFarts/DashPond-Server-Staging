import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Title, useMantineTheme } from '@mantine/core';
import TotalPop from './Components/TotalPop';
import AgeSummary from './Components/AgeSummary';
import AgeBreakdown from './Components/AgeBreakdown';
import Race from './Components/Race';
import MaritalStatusMales from './Components/MaritalStatusMales';
import MaritalStatusFemales from './Components/MaritalStatusFemales';
import Ancestry from './Components/Ancestry';
import PlaceOfBirth from './Components/PlaceOfBirth';

import TotalPopChart from './Charts/TotalPopChart';
import AgeSummaryChart from './Charts/AgeSummaryChart';
import AgeBreakdownChart from './Charts/AgeBreakdownChart';
import RaceChart from './Charts/RaceChart';
import MaritalStatusChart from './Charts/MaritalStatusChart';
import BirthChart from './Charts/BirthChart';
import AncestryChart from './Charts/AncestryChart';


const PopLayout = () => {
    const [data] = useOutletContext();
    const theme = useMantineTheme();

    return (
        <div>
            
            <div className='flex flex-col space-y-4 h-full'>
            
                <div className='flex w-full justify-center py-4 text-white'>
                    <Title className={theme.colorScheme === 'dark' ? 'text-white' : 'text-black'}>
                        Population Insights</Title>
                </div>

                <div className='flex flex-col gap-4 pb-8'>
                    <TotalPop
                        data={data}
                    />
                    <TotalPopChart
                        data={data}
                    />
                </div>

                <div className='flex flex-col gap-4 pb-8'>
                    <AgeSummary
                        data={data}
                    />
                    <AgeSummaryChart
                        data={data}
                    />
                </div>

                <div className='flex flex-col gap-4 pb-8'>
                    <AgeBreakdown
                        data={data}
                    />
                    <AgeBreakdownChart
                        data={data}
                    />
                </div>


                <div className='flex flex-col gap-4 pb-8'>
                    <Race
                        data={data}
                    />
                    <RaceChart
                        data={data}
                    />
                </div>

                <div className='flex flex-col gap-4 pb-8'>
                    <MaritalStatusMales
                        data={data}
                    />
                    <MaritalStatusFemales
                        data={data}
                    />
                    <MaritalStatusChart
                        data={data}
                    />
                </div>

                <div className='flex flex-col gap-4 pb-8'>
                    <Ancestry
                        data={data}
                    />
                    <AncestryChart
                        data={data}
                    />
                </div>

                <div className='flex flex-col gap-4 pb-8'>
                    <PlaceOfBirth
                        data={data}
                    />
                    <BirthChart
                        data={data}
                    />
                </div>
            </div>
        </div>
    )
}

export default PopLayout