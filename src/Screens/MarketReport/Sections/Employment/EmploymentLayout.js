import React from 'react';
import { useOutletContext } from 'react-router-dom';
import OccuSummary from './Components/OccuSummary';
import IndustrySummary from './Components/IndustrySummary';
import ClassOfWorker from './Components/ClassOfWorker';
import CommutingProfile from './Components/CommutingProfile';
import HouseholdEarnings from './Components/HouseholdEarnings';
import FamilyEarnings from './Components/FamilyEarnings';

import OccupationsChart from './Charts/OccupationsCharts';
import IndustryChart from './Charts/IndustryChart';
import ClassWorkerChart from './Charts/ClassWorkerChart';
import CommutingChart from './Charts/CommutingChart';
import HHIncomeChart from './Charts/HHIncomeChart';
import FamilyIncomeChart from './Charts/FamilyIncomeChart';


const EmploymentLayout = () => {
    const [data] = useOutletContext();

    return (

        <div className='flex flex-col space-y-4'>
            <div className='flex flex-col gap-4 pb-4'>
                <OccuSummary
                    data={data}
                />
                <OccupationsChart
                    data={data}
                />
            </div>

            <div className='flex flex-col gap-4 pb-4'>
                <IndustrySummary
                    data={data}
                />
                <IndustryChart
                    data={data}
                />
            </div>

            <div className='flex flex-col gap-4 pb-4'>
                <ClassOfWorker
                    data={data}
                />
                <ClassWorkerChart
                    data={data}
                />
            </div>


            <div className='flex flex-col gap-4 pb-4'>
                <CommutingProfile
                    data={data}
                />
                <CommutingChart
                    data={data}
                />
            </div>

            <div className='flex flex-col gap-4 pb-4'>
                <HouseholdEarnings
                    data={data}
                />
                <HHIncomeChart
                    data={data}
                />
            </div>

            <div className='flex flex-col gap-4 pb-4'>
                <FamilyEarnings
                    data={data}
                />
                <FamilyIncomeChart
                    data={data}
                />
            </div>
        </div>
    )
}

export default EmploymentLayout