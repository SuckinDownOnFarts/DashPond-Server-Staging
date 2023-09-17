import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';




const YearBuilt = ({ data }) => {
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
            'Data': 'Total housing units',
            '3 Mile': (data.DP04_0016E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0016E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0016E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0016E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0016E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0016E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': 'Built 2020 or later',
            '3 Mile': (data.DP04_0017E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0017E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0017E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0017E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0017E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0017E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Built 2010 to 2019',
            '3 Mile': (data.DP04_0018E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0018E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0018E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0018E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0018E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0018E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 2000 to 2009',
            '3 Mile': (data.DP04_0019E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0019E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0019E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0019E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0019E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0019E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1990 to 1999',
            '3 Mile': (data.DP04_0020E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0020E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0020E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0020E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0020E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0020E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1980 to 1989',
            '3 Mile': (data.DP04_0021E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0021E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0021E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0021E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0021E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0021E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1970 to 1979',
            '3 Mile': (data.DP04_0022E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0022E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0022E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0022E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0022E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0022E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1960 to 1969',
            '3 Mile': (data.DP04_0023E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0023E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0023E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0023E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0023E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0023E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1950 to 1959',
            '3 Mile': (data.DP04_0024E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0024E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0024E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0024E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0024E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0024E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1940 to 1949',
            '3 Mile': (data.DP04_0025E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0025E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0025E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0025E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0025E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0025E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1939 or earlier',
            '3 Mile': (data.DP04_0026E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0026E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0026E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0026E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0026E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0026E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Year Structure Built
            </Title>
            <div style={containerStyle}>
                <div className='h-[515px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default YearBuilt