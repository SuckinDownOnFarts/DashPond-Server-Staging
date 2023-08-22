import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';
import DPSidebar from './DPSidebar';
import api from '../../../api/axios';


import KeyTrendsHeader from '../Components/Main/KeyTrendsHeaders';
import IndustryFacts from '../Components/Main/IndustryFacts';
import EducationFacts from '../Components/Main/EducationEmploymentFacts';
import HouseholdIncomeFacts from '../Components/Main/HouseholdIncomeFacts';
import TableExample from '../Components/Main/TableExample';

const Overview = () => {

    const { id } = useParams();
    const overviewPath = generatePath('/overview/:id', {
        id: id
    });

    const [data, setData] = useState([]); //Stays
    const [demoDataLoading, setDemoDataLoading] = useState(true); //Stays
    const [selectedView, setSelectedView] = useState('first');

    //Fetch the census data property results 
    useEffect(() => {
        const fetchOverviewData = async () => {
            try {
                const response = await api.get(overviewPath);
                setData(response.data);
                setDemoDataLoading(false);
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
    }, []);

    console.log(data);


    return (
        <main className='flex flex-row ml-[300px]'>
            <DPSidebar />

            <div className='flex flex-col w-full mb-4'>
                {!demoDataLoading
                    ? <div>
                        <div>
                            <KeyTrendsHeader
                                data={data}
                            />
                        </div>
                        <div>
                            <EducationFacts
                                data={data}
                            />
                        </div>
                        <div className='flex flex-row space-x-4 mx-4 mt-4'>
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
                        <div className='mx-4'>
                            <TableExample
                                data={data}
                            />
                        </div>
                    </div>
                    : <></>}
            </div>
        </main>
    )
}

export default Overview