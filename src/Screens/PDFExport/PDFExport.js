import React, { useEffect, useState } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import api from '../../api/axios';
import TotalPop from '../MarketReport/Sections/Population/Components/TotalPop';
import AgeSummary from '../MarketReport/Sections/Population/Components/AgeSummary';
import AgeBreakdown from '../MarketReport/Sections/Population/Components/AgeBreakdown';
import Race from '../MarketReport/Sections/Population/Components/Race';
import MaritalStatusMales from '../MarketReport/Sections/Population/Components/MaritalStatusMales';
import MaritalStatusFemales from '../MarketReport/Sections/Population/Components/MaritalStatusFemales';
import Ancestry from '../MarketReport/Sections/Population/Components/Ancestry';
import PlaceOfBirth from '../MarketReport/Sections/Population/Components/PlaceOfBirth';

import TotalPopChart from '../MarketReport/Sections/Population/Charts/TotalPopChart';
import AgeSummaryChart from '../MarketReport/Sections/Population/Charts/AgeSummaryChart';
import AgeBreakdownChart from '../MarketReport/Sections/Population/Charts/AgeBreakdownChart';
import RaceChart from '../MarketReport/Sections/Population/Charts/RaceChart';
import MaritalStatusChart from '../MarketReport/Sections/Population/Charts/MaritalStatusChart';
import BirthChart from '../MarketReport/Sections/Population/Charts/BirthChart';
import AncestryChart from '../MarketReport/Sections/Population/Charts/AncestryChart';


const PDFExport = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [data3, setData3] = useState();
    const [data5, setData5] = useState();
    const [data10, setData10] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getReportData = async () => {
            try {
                const path = generatePath('/overview/:id', {
                    id: id
                });
                const res = await api.get(path);
                setData(res.data);
                setLoading(false);
            } catch (err) {
                console.log(err.message);
            }
        }
        getReportData()
    }, [])

    function calc(keys, values, radius, setState) {
        let tempArr = {};
        for (let i = 0; i < keys.length; i++) {

            tempArr[keys[i]] = values[i][radius]
        }
        setState(tempArr)
    }

    useEffect(() => {
        const seperateData = () => {
            if (data) {
                const keys = Object.keys(data);
                const values = Object.values(data);

                calc(keys, values, 0, setData3)
                calc(keys, values, 1, setData5)
                calc(keys, values, 2, setData10)
            }
        }
        seperateData()
    }, [data])

    // console.log(`${loading} : ${data3}`);

    return (
        <div>
            {data && data3 && data5 && data10 &&
                <div className='flex min-h-[calc(100vh-60px)] w-full p-4 justify-center mb-8'>
                    <div className='flex flex-col space-y-4'>

                        <div className='flex flex-col gap-4 pb-8'>
                            <TotalPop
                                data={data}
                            />
                            <TotalPopChart
                                data={data}
                            />
                        </div>
                        {/* 
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
                    </div> */}
                    </div>
                </div>
            }
        </div>
    )
}

export default PDFExport