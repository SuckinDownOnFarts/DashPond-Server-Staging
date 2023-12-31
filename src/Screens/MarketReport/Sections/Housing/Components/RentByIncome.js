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
            '5 Min': (data.DP04_0136E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0136E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0136E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0136E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0136E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0136E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': 'Less than 15.0 percent',
            '5 Min': (data.DP04_0137E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0137E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0137E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0137E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0137E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0137E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '15.0 to 19.9 percent',
            '5 Min': (data.DP04_0138E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0138E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0138E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0138E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0138E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0138E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '20.0 to 24.9 percent',
            '5 Min': (data.DP04_0139E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0139E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0139E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0139E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0139E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0139E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '25.0 to 29.9 percent',
            '5 Min': (data.DP04_0140E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0140E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0140E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0140E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0140E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0140E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '30.0 to 34.9 percent',
            '5 Min': (data.DP04_0141E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0141E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0141E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0141E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0141E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0141E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '35.0 percent or more',
            '5 Min': (data.DP04_0142E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0142E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0142E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0142E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0142E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0142E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Not computed',
            '5 Min': (data.DP04_0143E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0143E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0143E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0143E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0143E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0143E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Gross Rent as % of Household Income
            </Title>
            <div style={containerStyle}>
                <div className='h-[395px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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