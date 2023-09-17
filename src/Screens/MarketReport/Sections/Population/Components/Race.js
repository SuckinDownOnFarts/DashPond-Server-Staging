import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




const Race = ({data}) => {
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
            'Data': 'White',
            '3 Mile': (data.DP05_0037E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0037E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0037E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0037E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0037E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0037E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Black or African American',
            '3 Mile': (data.DP05_0038E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0038E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0038E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0038E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0038E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0038E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'American Indian and Alaska Native',
            '3 Mile': (data.DP05_0039E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0039E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0039E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0039E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0039E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0039E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Asian',
            '3 Mile': (data.DP05_0044E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0044E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0044E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0044E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0044E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0044E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Native Hawaiian and Other Pacific Islander',
            '3 Mile': (data.DP05_0052E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0052E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0052E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0052E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0052E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0052E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Some other race',
            '3 Mile': (data.DP05_0057E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0057E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0057E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0057E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0057E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0057E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        }
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
                Race/Ethnicity
            </Title>
            <div style={containerStyle}>
                <div className='h-[303px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default Race