import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';




const UnitValue = ({ data }) => {
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
            'Data': 'Owner-occupied units',
            '3 Mile': (data.DP04_0080E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0080E[0]) / data.DP04_0080E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0080E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0080E[1]) / data.DP04_0080E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0080E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0080E[2]) / data.DP04_0080E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': 'Less than $50,000',
            '3 Mile': (data.DP04_0081E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0081E[0]) / data.DP04_0080E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0081E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0081E[1]) / data.DP04_0080E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0081E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0081E[2]) / data.DP04_0080E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '$50,000 to $99,999',
            '3 Mile': (data.DP04_0082E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0082E[0]) / data.DP04_0080E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0082E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0082E[1]) / data.DP04_0080E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0082E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0082E[2]) / data.DP04_0080E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$100,000 to $149,999',
            '3 Mile': (data.DP04_0083E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0083E[0]) / data.DP04_0080E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0083E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0083E[1]) / data.DP04_0080E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0083E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0083E[2]) / data.DP04_0080E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$150,000 to $199,999',
            '3 Mile': (data.DP04_0084E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0084E[0]) / data.DP04_0080E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0084E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0084E[1]) / data.DP04_0080E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0084E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0084E[2]) / data.DP04_0080E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$200,000 to $299,999',
            '3 Mile': (data.DP04_0085E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0085E[0]) / data.DP04_0080E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0085E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0085E[1]) / data.DP04_0080E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0085E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0085E[2]) / data.DP04_0080E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$300,000 to $499,999',
            '3 Mile': (data.DP04_0086E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0086E[0]) / data.DP04_0080E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0086E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0086E[1]) / data.DP04_0080E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0086E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0086E[2]) / data.DP04_0080E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$500,000 to $999,999',
            '3 Mile': (data.DP04_0087E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0087E[0]) / data.DP04_0080E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0087E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0087E[1]) / data.DP04_0080E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0087E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0087E[2]) / data.DP04_0080E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$1,000,000 or more',
            '3 Mile': (data.DP04_0088E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0088E[0]) / data.DP04_0080E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0088E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0088E[1]) / data.DP04_0080E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0088E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0088E[2]) / data.DP04_0080E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Value of Owner Occupied Units
            </Title>
            <div style={containerStyle}>
                <div className='h-[435px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default UnitValue