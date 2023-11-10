import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';

const ClassOfWorker = ({data}) => {
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
            'Data': 'Civilian employed population 16 years and over',
            '5 Min': (data.DP03_0046E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0046E[0]) / data.DP03_0046E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0046E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0046E[1]) / data.DP03_0046E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0046E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0046E[2]) / data.DP03_0046E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Private wage and salary workers',
            '5 Min': (data.DP03_0047E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0047E[0]) / data.DP03_0046E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0047E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0047E[1]) / data.DP03_0046E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0047E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0047E[2]) / data.DP03_0046E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Government workers',
            '5 Min': (data.DP03_0048E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0048E[0]) / data.DP03_0046E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0048E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0048E[1]) / data.DP03_0046E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0048E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0048E[2]) / data.DP03_0046E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Self-employed in own not incorporated business workers',
            '5 Min': (data.DP03_0049E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0049E[0]) / data.DP03_0046E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0049E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0049E[1]) / data.DP03_0046E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0049E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0049E[2]) / data.DP03_0046E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Unpaid family workers',
            '5 Min': (data.DP03_0050E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0050E[0]) / data.DP03_0046E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0050E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0050E[1]) / data.DP03_0046E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0050E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0050E[2]) / data.DP03_0046E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Class of Workers
            </Title>
            <div style={containerStyle}>
                <div className='h-[261px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default ClassOfWorker