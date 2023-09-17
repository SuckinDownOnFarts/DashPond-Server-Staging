import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';




const MaritalStatusMales = ({data}) => {
    const theme = useMantineTheme();
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);

    const defaultColDef = useMemo(() => {
        return {
            resizable: true,
        };
  }, []);

    const [rowData] = useState([
        {
            'Data': 'Males 15 years and over',
            '3 Mile': (data.DP02_0025E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0025E[0]) / data.DP02_0025E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0025E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0025E[1]) / data.DP02_0025E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0025E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0025E[2]) / data.DP02_0025E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Never married',
            '3 Mile': (data.DP02_0026E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0026E[0]) / data.DP02_0025E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0026E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0026E[1]) / data.DP02_0025E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0026E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0026E[2]) / data.DP02_0025E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Now married, except separated',
            '3 Mile': (data.DP02_0027E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0027E[0]) / data.DP02_0025E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0027E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0027E[1]) / data.DP02_0025E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0027E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0027E[2]) / data.DP02_0025E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Separated',
            '3 Mile': (data.DP02_0028E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0028E[0]) / data.DP02_0025E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0028E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0028E[1]) / data.DP02_0025E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0028E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0028E[2]) / data.DP02_0025E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Widowed',
            '3 Mile': (data.DP02_0029E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0029E[0]) / data.DP02_0025E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0029E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0029E[1]) / data.DP02_0025E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0029E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0029E[2]) / data.DP02_0025E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Divorced",
            '3 Mile': (data.DP02_0030E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0030E[0]) / data.DP02_0025E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0030E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0030E[1]) / data.DP02_0025E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0030E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0030E[2]) / data.DP02_0025E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
    ]);


    const [columnDefs] = useState([
        { field: 'Data' },
        { field: '3 Mile', width: 90 },
        { field: '% (3 Mile)' },
        { field: '5 Mile', width: 90 },
        { field: '% (5 Mile)' },
        { field: '10 Mile', width: 100 },
        { field: '% (10 Mile)', width: 110 },
    ]);

    return (
        <div>
            <Title className='pl-4'>
                Marital Status (Males)
            </Title>
            <div style={containerStyle}>
                <div className='h-[303px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
                    <div className={theme.colorScheme === 'dark' ? ' ag-theme-alpine-dark' : 'ag-theme-alpine'} style={{ height: '100%', width: '100%' }}>
                        <AgGridReact
                            ref={gridRef}
                            rowData={rowData}
                            defaultColDef={defaultColDef}
                            columnDefs={columnDefs}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MaritalStatusMales