import React from 'react';
import { useOutletContext } from 'react-router-dom';
import EduAttainment from './Components/EduAttainment';
import SchoolEnrollment from './Components/SchoolEnrollment';

import AttainmentChart from './Charts/AttainmentChart';
import EnrollmentChart from './Charts/EnrollmentChart';

const EducationLayout = () => {
    const [data] = useOutletContext();

    return (
        <div className='flex flex-col space-y-4'>
            <div className='flex flex-col gap-4 pb-4'>
                <EduAttainment
                    data={data}
                />
                <AttainmentChart
                    data={data}
                />
            </div>

            <div className='flex flex-col gap-4 pb-4'>
                <SchoolEnrollment
                    data={data}
                />
                <EnrollmentChart
                    data={data}
                />
            </div>

        </div>
    )
}

export default EducationLayout