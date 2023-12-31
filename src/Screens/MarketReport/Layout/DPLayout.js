import React, { useEffect, useState } from 'react';
import { generatePath, useParams } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import { IconArrowBarToRight } from '@tabler/icons-react';
import api from '../../../api/axios'
import DPSidebar from './DPSidebar';
import { Outlet } from 'react-router-dom';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-alpine.css";

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

    ModuleRegistry.register(ClientSideRowModelModule);

    return (
        <div className='flex flex-row max-w-[100vw]'>
            <div className={['fixed pt-4 pl-4 z-50', ]}>
                <button
                    onClick={() => handlers.toggle()}
                    className={theme.colorScheme === 'dark' ? 'flex p-2 rounded-full bg-[#1a1b1e] cursor-pointer' : 'flex p-2 rounded-full bg-[#fcfcfc] cursor-pointer'}
                >
                    <IconArrowBarToRight 
                        className={theme.colorScheme === 'dark' ? 'text-slate-100' : 'text-slate-500'}
                    />
                </button>
            </div>
            <div className='flex flex-col z-50 h-full mantineSm:ml-[250px]'>
                <DPSidebar 
                    opened={opened}
                    handlers={handlers}
                />
            </div>

            <div className='flex min-h-[calc(100vh-60px)] w-full p-4 justify-center mb-8'>
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