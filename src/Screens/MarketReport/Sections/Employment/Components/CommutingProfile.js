import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




const CommutingProfile = ({data}) => {
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
            'Data': 'Workers 16 years and over',
            '5 Min': (data.DP03_0018E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0018E[0]) / data.DP03_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0018E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0018E[1]) / data.DP03_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0018E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0018E[2]) / data.DP03_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Car, truck, or van -- drove alone',
            '5 Min': (data.DP03_0019E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0019E[0]) / data.DP03_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0019E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0019E[1]) / data.DP03_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0019E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0019E[2]) / data.DP03_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Car, truck, or van -- carpooled',
            '5 Min': (data.DP03_0020E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0020E[0]) / data.DP03_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0020E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0020E[1]) / data.DP03_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0020E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0020E[2]) / data.DP03_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Public transportation',
            '5 Min': (data.DP03_0021E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0021E[0]) / data.DP03_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0021E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0021E[1]) / data.DP03_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0021E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0021E[2]) / data.DP03_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Walked',
            '5 Min': (data.DP03_0022E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0022E[0]) / data.DP03_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0022E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0022E[1]) / data.DP03_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0022E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0022E[2]) / data.DP03_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Other means',
            '5 Min': (data.DP03_0023E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0023E[0]) / data.DP03_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0023E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0023E[1]) / data.DP03_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0023E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0023E[2]) / data.DP03_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Worked from home',
            '5 Min': (data.DP03_0024E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0024E[0]) / data.DP03_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0024E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0024E[1]) / data.DP03_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0024E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0024E[2]) / data.DP03_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Commuting Profile
            </Title>
            <div style={containerStyle}>
                <div className='h-[345px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default CommutingProfile