import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




const GrossRent = ({ data }) => {
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
            'Data': 'Occupied units paying rent',
            '3 Mile': (data.DP04_0126E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0126E[0]) / data.DP04_0126E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0126E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0126E[1]) / data.DP04_0126E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0126E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0126E[2]) / data.DP04_0126E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': 'Less than $500',
            '3 Mile': (data.DP04_0127E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0127E[0]) / data.DP04_0126E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0127E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0127E[1]) / data.DP04_0126E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0127E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0127E[2]) / data.DP04_0126E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '$500 to $999',
            '3 Mile': (data.DP04_0128E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0128E[0]) / data.DP04_0126E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0128E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0128E[1]) / data.DP04_0126E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0128E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0128E[2]) / data.DP04_0126E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$1,000 to $1,499',
            '3 Mile': (data.DP04_0129E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0129E[0]) / data.DP04_0126E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0129E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0129E[1]) / data.DP04_0126E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0129E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0129E[2]) / data.DP04_0126E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$1,500 to $1,999',
            '3 Mile': (data.DP04_0130E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0130E[0]) / data.DP04_0126E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0130E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0130E[1]) / data.DP04_0126E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0130E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0130E[2]) / data.DP04_0126E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$2,000 to $2,499',
            '3 Mile': (data.DP04_0131E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0131E[0]) / data.DP04_0126E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0131E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0131E[1]) / data.DP04_0126E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0131E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0131E[2]) / data.DP04_0126E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$2,500 to $2,999',
            '3 Mile': (data.DP04_0132E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0132E[0]) / data.DP04_0126E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0132E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0132E[1]) / data.DP04_0126E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0132E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0132E[2]) / data.DP04_0126E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$3,000 or more',
            '3 Mile': (data.DP04_0133E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0133E[0]) / data.DP04_0126E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0133E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0133E[1]) / data.DP04_0126E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0133E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0133E[2]) / data.DP04_0126E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'No rent paid',
            '3 Mile': (data.DP04_0135E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0135E[0]) / data.DP04_0126E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0135E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0135E[1]) / data.DP04_0126E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0135E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0135E[2]) / data.DP04_0126E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Gross Rent 
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

export default GrossRent