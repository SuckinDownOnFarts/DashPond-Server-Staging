import React from 'react';
import { useOutletContext } from 'react-router-dom';
import EduAttainment from './Components/EduAttainment';
import SchoolEnrollment from './Components/SchoolEnrollment';

const EducationLayout = () => {
    const [data] = useOutletContext();

    return (
        <div className='flex flex-col space-y-4'>
            <EduAttainment 
                data={data}
            />
            <SchoolEnrollment 
                data={data}
            />
        </div>
    )
}

export default EducationLayout