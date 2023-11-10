import React, { useEffect, useState } from 'react';
import { generatePath, useOutletContext, useParams } from 'react-router-dom';
import api from '../../../../api/axios'
import { useMantineTheme } from '@mantine/core';

import KeyTrendsHeader from './Components/KeyTrendsHeaders';
import IndustryFacts from './Components/IndustryFacts';
import HouseholdIncomeFacts from './Components/HouseholdIncomeFacts';
import OrangeFacts from './Components/OrangeFacts';
import EduProj from './Components/EduProj';
import Comparisons from './Components/Comparisons';


import PopProjChart from './Charts/PopProjChart';
import { IndustryChart1, IndustryChart2 } from './Charts/IndustryCharts';
import { RadialChart1, RadialChart2 } from './Charts/RadialCharts';

import KTMap from './Maps/KTMap';


const Overview = () => {
    const [data] = useOutletContext();
    const { id } = useParams();
    const coordinatePath = generatePath('/coordinates/:id', {
        id: id
    });

    const [proj, setProj] = useState([]);
    const [loading, setLoading] = useState(true);
    const [coordinatesLoading, setCoordinatesLoading] = useState(true)
    const [coordinates, setCoordinates] = useState();

    const theme = useMantineTheme();

    useEffect(() => {
        const fetchProjectionData = async () => {
            const projectionPath = generatePath('/projection/:id', {
                id: id
            });

            try {
                const response = await api.get(projectionPath);
                setProj(response.data);
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
        fetchProjectionData();
    }, []);

    useEffect(() => {
        const fetchCoordinates = async () => {
            try {
                const response = await api.get(coordinatePath)
                setCoordinates(response.data)
                setCoordinatesLoading(false)
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
        fetchCoordinates()
    }, [])

    return (
        <div className='flex flex-col space-y-4 h-full'>
            <div>
                Key Trends and Projections for [Address]
            </div>
            {!loading ?
                <div className='flex flex-col gap-4 pb-8'>
                    <div>
                        <KeyTrendsHeader
                            data={data}
                            proj={proj}
                        />
                    </div>
                    <div>
                        <OrangeFacts
                            data={proj}
                        />
                    </div>

                    <div className='flex flex-row space-x-4'>
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
                    <div>
                        <EduProj
                            data={data}
                        />
                    </div>
                    <div>
                        <Comparisons
                            data={data}
                        />
                    </div>
                    <div>
                        <Comparisons
                            data={data}
                        />
                    </div>
                    <div>
                        <HouseholdIncomeFacts
                            data={data}
                        />
                    </div>
                    <div className='flex sm:flex-row flex-col gap-4 w-full justify-between'>
                        <IndustryChart1
                            data={data}
                        />
                        <RadialChart2
                            data={data}
                        />
                    </div>
                    <div>
                        <KeyTrendsHeader
                            data={data}
                            proj={proj}
                        />
                    </div>
                    <div className='flex sm:flex-row flex-col gap-4 w-full justify-between'>
                        <RadialChart2
                            data={data}
                        />
                        <IndustryChart2
                            data={data}
                        />

                    </div>

                    {/* <div>
                        {!coordinatesLoading ?
                            <KTMap
                                coordinates={coordinates}
                            /> : <></>}
                    </div> */}
                </div>
                : <></>}
        </div>
    )
}

export default Overview