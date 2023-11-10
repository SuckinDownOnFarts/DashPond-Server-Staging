import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




const Rooms = ({ data }) => {
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
            '5 Min': (data.DP04_0027E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0027E[0]) / data.DP04_0027E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0027E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0027E[1]) / data.DP04_0027E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0027E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0027E[2]) / data.DP04_0027E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': '1 room',
            '5 Min': (data.DP04_0028E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0028E[0]) / data.DP04_0027E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0028E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0028E[1]) / data.DP04_0027E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0028E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0028E[2]) / data.DP04_0027E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '2 rooms',
            '5 Min': (data.DP04_0029E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0029E[0]) / data.DP04_0027E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0029E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0029E[1]) / data.DP04_0027E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0029E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0029E[2]) / data.DP04_0027E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '3 rooms',
            '5 Min': (data.DP04_0030E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0030E[0]) / data.DP04_0027E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0030E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0030E[1]) / data.DP04_0027E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0030E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0030E[2]) / data.DP04_0027E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '4 rooms',
            '5 Min': (data.DP04_0031E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0031E[0]) / data.DP04_0027E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0031E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0031E[1]) / data.DP04_0027E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0031E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0031E[2]) / data.DP04_0027E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '5 rooms',
            '5 Min': (data.DP04_0032E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0032E[0]) / data.DP04_0027E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0032E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0032E[1]) / data.DP04_0027E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0032E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0032E[2]) / data.DP04_0027E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '6 rooms',
            '5 Min': (data.DP04_0033E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0033E[0]) / data.DP04_0027E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0033E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0033E[1]) / data.DP04_0027E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0033E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0033E[2]) / data.DP04_0027E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '7 rooms',
            '5 Min': (data.DP04_0034E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0034E[0]) / data.DP04_0027E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0034E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0034E[1]) / data.DP04_0027E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0034E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0034E[2]) / data.DP04_0027E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '8 rooms',
            '5 Min': (data.DP04_0035E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0035E[0]) / data.DP04_0027E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0035E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0035E[1]) / data.DP04_0027E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0035E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0035E[2]) / data.DP04_0027E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '9 rooms or more',
            '5 Min': (data.DP04_0036E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP04_0036E[0]) / data.DP04_0027E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP04_0036E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP04_0036E[1]) / data.DP04_0027E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP04_0036E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP04_0036E[2]) / data.DP04_0027E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Number of Rooms in Structures
            </Title>
            <div style={containerStyle}>
                <div className='h-[475px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default Rooms