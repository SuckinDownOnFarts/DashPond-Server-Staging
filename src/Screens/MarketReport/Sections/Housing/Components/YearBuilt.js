import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




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
            '5 Min': (data.DP04_0016E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0016E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0016E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0016E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0016E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0016E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': 'Built 2020 or later',
            '5 Min': (data.DP04_0017E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0017E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0017E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0017E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0017E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0017E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Built 2010 to 2019',
            '5 Min': (data.DP04_0018E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0018E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0018E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0018E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0018E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0018E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 2000 to 2009',
            '5 Min': (data.DP04_0019E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0019E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0019E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0019E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0019E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0019E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1990 to 1999',
            '5 Min': (data.DP04_0020E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0020E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0020E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0020E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0020E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0020E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1980 to 1989',
            '5 Min': (data.DP04_0021E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0021E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0021E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0021E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0021E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0021E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1970 to 1979',
            '5 Min': (data.DP04_0022E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0022E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0022E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0022E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0022E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0022E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1960 to 1969',
            '5 Min': (data.DP04_0023E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0023E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0023E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0023E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0023E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0023E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1950 to 1959',
            '5 Min': (data.DP04_0024E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0024E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0024E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0024E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0024E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0024E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1940 to 1949',
            '5 Min': (data.DP04_0025E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0025E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0025E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0025E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0025E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0025E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Built 1939 or earlier',
            '5 Min': (data.DP04_0026E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0026E[0]) / data.DP04_0016E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0026E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0026E[1]) / data.DP04_0016E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0026E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0026E[2]) / data.DP04_0016E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
    ]);

    const [columnDefs] = useState([
        { field: 'Data' },
        { field: '5 Min', width: 90 },
        { field: '% (5 Min)' },
        { field: '10 Min', width: 90 },
        { field: '% (10 Min)' },
        { field: '15 Min', width: 100 },
        { field: '% (15 Min)', width: 110 },
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