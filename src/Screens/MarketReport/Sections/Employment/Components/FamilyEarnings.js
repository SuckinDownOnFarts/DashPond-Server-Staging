import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




const FamilyEarnings = ({data}) => {
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
            'Data': 'Families',
            '5 Min': (data.DP03_0075E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0075E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0075E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0075E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0075E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0075E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Less than $10,000',
            '5 Min': (data.DP03_0076E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0076E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0076E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0076E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0076E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0076E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '$10,000 to $14,999',
            '5 Min': (data.DP03_0077E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0077E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0077E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0077E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0077E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0077E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$15,000 to $24,999',
            '5 Min': (data.DP03_0078E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0078E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0078E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0078E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0078E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0078E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$25,000 to $34,999',
            '5 Min': (data.DP03_0079E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0079E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0079E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0079E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0079E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0079E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$35,000 to $49,999",
            '5 Min': (data.DP03_0080E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0080E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0080E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0080E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0080E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0080E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$50,000 to $74,999",
            '5 Min': (data.DP03_0081E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0081E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0081E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0081E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0081E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0081E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$75,000 to $99,999",
            '5 Min': (data.DP03_0082E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0082E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0082E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0082E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0082E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0082E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$100,000 to $149,999",
            '5 Min': (data.DP03_0083E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0083E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0083E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0083E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0083E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0083E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$150,000 to $199,999",
            '5 Min': (data.DP03_0084E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0084E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0084E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0084E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0084E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0084E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$200,000 or more",
            '5 Min': (data.DP03_0085E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP03_0085E[0]) / data.DP03_0075E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP03_0085E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP03_0085E[1]) / data.DP03_0075E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP03_0085E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP03_0085E[2]) / data.DP03_0075E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Family Income
            </Title>
            <div style={containerStyle}>
                <div className='h-[513px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default FamilyEarnings