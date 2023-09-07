import React, { useEffect, useState } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { IconArrowBarBoth } from '@tabler/icons-react'
import api from '../../../api/axios'
import DPSidebar from './DPSidebar';
import { Outlet } from 'react-router-dom';



const DataProfile = () => {
    const { id } = useParams();

    const theme = useMantineTheme();

    const [data, setData] = useState([]); //Stays
    const [loading, setLoading] = useState(true); //Stays
    const [opened, handlers] = useDisclosure(false);

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
        <div className='flex flex-row max-w-[100vw]'>
            <div className='fixed pt-4 pl-4 z-50'>
                <button
                    onClick={() => handlers.toggle()}
                    className={theme.colorScheme === 'dark' ? 'flex p-2 rounded-full bg-[#1a1b1e] cursor-pointer' : 'flex p-2 rounded-full bg-[#fcfcfc] cursor-pointer'}
                >
                    <IconArrowBarBoth 
                        className={theme.colorScheme === 'dark' ? 'text-slate-100' : 'text-slate-500'}
                    />
                </button>
            </div>
            <div className='flex flex-col fixed z-50 h-full'>
                <DPSidebar 
                    opened={opened}
                    handlers={handlers}
                />
            </div>

            <div className='flex min-h-[calc(100vh-60px)] w-full p-4 justify-center mb-8'>
                {/* {opened && <Overlay color="#000" opacity={0.55} className='ml-[260px] h-full'/>} */}
                {!loading
                    ? <Outlet
                        context={[data, opened]}
                    />
                    : null}
            </div>
        </div>
    );
};

export default DataProfile