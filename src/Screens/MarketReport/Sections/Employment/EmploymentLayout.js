import React from 'react';
import { useOutletContext } from 'react-router-dom';
import EmployeeBreakdown from './Components/OccuSummary';
import IndustrySummary from './Components/IndustrySummary';
import ClassOfWorker from './Components/ClassOfWorker';
import CommutingProfile from './Components/CommutingProfile';
import HouseholdEarnings from './Components/HouseholdEarnings';
import FamilyEarnings from './Components/FamilyEarnings'


const EmploymentLayout = () => {
    const [data] = useOutletContext();

    return (

        <div className='flex flex-col space-y-4'>
            <EmployeeBreakdown
                data={data}
            />
            <IndustrySummary
                data={data}
            />
            <ClassOfWorker
                data={data}
            />
            <CommutingProfile
                data={data}
            />
            <HouseholdEarnings
                data={data}
            />
            <FamilyEarnings
                data={data}
            />
        </div>
    )
}

export default EmploymentLayout