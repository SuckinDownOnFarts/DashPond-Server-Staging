import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TotalPop from './Components/TotalPop';
import AgeSummary from './Components/AgeSummary';
import Race from './Components/Race';
import MaritalStatusMales from './Components/MaritalStatusMales';
import MaritalStatusFemales from './Components/MaritalStatusFemales';
import Ancestry from './Components/Ancestry';
import PlaceOfBirth from './Components/PlaceOfBirth';
// import HHType from './Components/HHType';
// import HHRela from './Components/HHRela';
// import HHOccupancy from '../Housing/Components/HHOccupancy';

const PopLayout = () => {
    const [data] = useOutletContext();

    return (
        <div className='flex flex-col space-y-4'>
            <TotalPop
                data={data}
            />
            <AgeSummary 
                data={data}
            />
            <Race 
                data={data}
            />
            <MaritalStatusMales 
                data={data}
            />
            <MaritalStatusFemales 
                data={data}
            />
            <Ancestry 
                data={data}
            />
            <PlaceOfBirth 
                data={data}
            />

        </div>
    )
}

export default PopLayout