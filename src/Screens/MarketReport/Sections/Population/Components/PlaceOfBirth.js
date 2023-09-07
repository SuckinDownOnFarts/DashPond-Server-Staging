import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const PlaceOfBirth = ({data}) => {
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
            'Data': 'Total population',
            '3 Mile': (data.DP02_0088E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0088E[0]) / data.DP02_0088E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0088E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0088E[1]) / data.DP02_0088E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0088E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0088E[2]) / data.DP02_0088E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Born in State of residence',
            '3 Mile': (data.DP02_0091E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0091E[0]) / data.DP02_0088E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0091E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0091E[1]) / data.DP02_0088E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0091E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0091E[2]) / data.DP02_0088E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Different state',
            '3 Mile': (data.DP02_0092E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0092E[0]) / data.DP02_0088E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0092E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0092E[1]) / data.DP02_0088E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0092E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0092E[2]) / data.DP02_0088E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Born in Puerto Rico, U.S. Island areas, or born abroad to American parent(s)',
            '3 Mile': (data.DP02_0093E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0093E[0]) / data.DP02_0088E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0093E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0093E[1]) / data.DP02_0088E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0093E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0093E[2]) / data.DP02_0088E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Foreign born',
            '3 Mile': (data.DP02_0094E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0094E[0]) / data.DP02_0088E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0094E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0094E[1]) / data.DP02_0088E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0094E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0094E[2]) / data.DP02_0088E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Place of Birth
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

export default PlaceOfBirth