import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';




const HHType = ({ data }) => {
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
            'Data': 'Population in households',
            '3 Mile': (data.DP02_0018E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0018E[0]) / data.DP02_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0018E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0018E[1]) / data.DP02_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0018E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0018E[2]) / data.DP02_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': 'Householder',
            '3 Mile': (data.DP02_0019E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0019E[0]) / data.DP02_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0019E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0019E[1]) / data.DP02_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0019E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0019E[2]) / data.DP02_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Spouse',
            '3 Mile': (data.DP02_0020E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0020E[0]) / data.DP02_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0020E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0020E[1]) / data.DP02_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0020E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0020E[2]) / data.DP02_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Unmarried partner',
            '3 Mile': (data.DP02_0021E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0021E[0]) / data.DP02_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0021E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0021E[1]) / data.DP02_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0021E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0021E[2]) / data.DP02_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Child',
            '3 Mile': (data.DP02_0022E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0022E[0]) / data.DP02_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0022E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0022E[1]) / data.DP02_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0022E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0022E[2]) / data.DP02_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Other relatives',
            '3 Mile': (data.DP02_0023E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0023E[0]) / data.DP02_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0023E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0023E[1]) / data.DP02_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0023E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0023E[2]) / data.DP02_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Other nonrelatives',
            '3 Mile': (data.DP02_0024E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0024E[0]) / data.DP02_0018E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0024E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0024E[1]) / data.DP02_0018E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0024E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0024E[2]) / data.DP02_0018E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Households by Population Type
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

export default HHType