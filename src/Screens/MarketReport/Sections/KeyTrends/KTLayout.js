import React from 'react';
import { useOutletContext } from 'react-router-dom';

import KeyTrendsHeader from './Components/KeyTrendsHeaders';
import IndustryFacts from './Components/IndustryFacts';
import HouseholdIncomeFacts from './Components/HouseholdIncomeFacts';
// import MyResponsiveBar from '../../Charts/Bar';
// import MyResponsiveBump from '../../Charts/Bump';

const Overview = () => {
    const [data] = useOutletContext();

    return (
        <div className='flex flex-col'>
            <div>
                <div>
                    <KeyTrendsHeader
                        data={data}
                    />
                </div>
                <div className='flex flex-row space-x-4 mt-4'>
                    <IndustryFacts
                        data={data}
                    />
                    <IndustryFacts
                        data={data}
                    />
                </div>
                <div>
                    <HouseholdIncomeFacts
                        data={data}
                    />
                </div>
                 {/* <div className='mx-4'>
                    <TableExample
                        data={data}
                    />
                </div>  */}
            </div>
        </div>
    )
}

export default Overview