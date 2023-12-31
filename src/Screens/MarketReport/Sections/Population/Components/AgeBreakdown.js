import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




const AgeBreakdown = ({ data }) => {
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
            'Data': "Total Population",
            '5 Min': (data.DP05_0001E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0001E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0001E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0001E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0001E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0001E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Under 5 years",
            '5 Min': (data.DP05_0005E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0005E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0005E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0005E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0005E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0005E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "5 to 9 years",
            '5 Min': (data.DP05_0006E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0006E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0006E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0006E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0006E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0006E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "10 to 14 years",
            '5 Min': (data.DP05_0007E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0007E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0007E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0007E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0007E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0007E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "15 to 19 years",
            '5 Min': (data.DP05_0008E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0008E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0008E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0008E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0008E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0008E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "20 to 24 years",
            '5 Min': (data.DP05_0009E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0009E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0009E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0009E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0009E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0009E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "25 to 34 years",
            '5 Min': (data.DP05_0010E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0010E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0010E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0010E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0010E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0010E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "35 to 44 years",
            '5 Min': (data.DP05_0011E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0011E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0011E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0011E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0011E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0011E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "45 to 54 years",
            '5 Min': (data.DP05_0012E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0012E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0012E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0012E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0012E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0012E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "55 to 59 years",
            '5 Min': (data.DP05_0013E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0013E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0013E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0013E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0013E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0013E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "60 to 64 years",
            '5 Min': (data.DP05_0014E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0014E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0014E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0014E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0014E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0014E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "65 to 74 years",
            '5 Min': (data.DP05_0015E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0015E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0015E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0015E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0015E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0015E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "75 to 84 years",
            '5 Min': (data.DP05_0016E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0016E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0016E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0016E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0016E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0016E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "85 years and over",
            '5 Min': (data.DP05_0017E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP05_0017E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP05_0017E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP05_0017E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP05_0017E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP05_0017E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Age Breakdown
            </Title>
            <div style={containerStyle}>
                <div className='h-[639px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default AgeBreakdown