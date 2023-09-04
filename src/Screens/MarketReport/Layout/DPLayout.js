import React, { useEffect, useState } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import api from '../../../api/axios'
import DPSidebar from './DPSidebar';
import { Outlet } from 'react-router-dom';



const DataProfile = () => {
    const { id } = useParams();

    const [data, setData] = useState([]); //Stays
    const [loading, setLoading] = useState(true); //Stays

    useEffect(() => {
        const fetchOverviewData = async () => {
            const overviewPath = generatePath('/overview/:id', {
                id: id
            });

            try {
                const response = await api.get(overviewPath);
                setData(response.data);
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
        fetchOverviewData();
    }, []);



    return (
        <div className='flex flex-row w-[100vw]'>
            <div className='flex flex-col fixed z-50 h-full'>
                <DPSidebar />
            </div>

            <div className='flex min-h-[calc(100vh-60px)] w-full md:ml-[260px] p-4 justify-center mb-8'>
                {!loading
                    ? <Outlet
                        context={[data]}
                    />
                    : null}
            </div>
        </div>
    );
};

export default DataProfile