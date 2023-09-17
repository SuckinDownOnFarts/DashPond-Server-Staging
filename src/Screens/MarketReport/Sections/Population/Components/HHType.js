import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




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
            'Data': 'Total households',
            '3 Mile': (data.DP02_0001E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0001E[0]) / data.DP02_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0001E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0001E[1]) / data.DP02_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0001E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0001E[2]) / data.DP02_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': 'Married-couple household',
            '3 Mile': (data.DP02_0002E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0002E[0]) / data.DP02_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0002E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0002E[1]) / data.DP02_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0002E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0002E[2]) / data.DP02_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Cohabiting couple household',
            '3 Mile': (data.DP02_0004E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0004E[0]) / data.DP02_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0004E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0004E[1]) / data.DP02_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0004E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0004E[2]) / data.DP02_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Male householder, no spouse/partner present',
            '3 Mile': (data.DP02_0006E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0006E[0]) / data.DP02_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0006E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0006E[1]) / data.DP02_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0006E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0006E[2]) / data.DP02_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Households with one or more people under 18 years',
            '3 Mile': (data.DP02_0014E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0014E[0]) / data.DP02_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0014E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0014E[1]) / data.DP02_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0014E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0014E[2]) / data.DP02_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Households with one or more people 65 years and over',
            '3 Mile': (data.DP02_0015E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0015E[0]) / data.DP02_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0015E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0015E[1]) / data.DP02_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0015E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0015E[2]) / data.DP02_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Households Type
            </Title>
            <div style={containerStyle}>
                <div className='h-[315px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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