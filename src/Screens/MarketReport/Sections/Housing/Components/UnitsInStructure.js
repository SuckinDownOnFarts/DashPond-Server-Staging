import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const UnitsInStructure = ({ data }) => {
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
            '3 Mile': (data.DP04_0006E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0006E[0]) / data.DP04_0006E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0006E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0006E[1]) / data.DP04_0006E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0006E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0006E[2]) / data.DP04_0006E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': '1-unit, detached',
            '3 Mile': (data.DP04_0007E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0007E[0]) / data.DP04_0006E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0007E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0007E[1]) / data.DP04_0006E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0007E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0007E[2]) / data.DP04_0006E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '1-unit, attached',
            '3 Mile': (data.DP04_0008E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0008E[0]) / data.DP04_0006E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0008E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0008E[1]) / data.DP04_0006E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0008E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0008E[2]) / data.DP04_0006E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '2 units',
            '3 Mile': (data.DP04_0009E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0009E[0]) / data.DP04_0006E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0009E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0009E[1]) / data.DP04_0006E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0009E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0009E[2]) / data.DP04_0006E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '3 or 4 units',
            '3 Mile': (data.DP04_0010E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0010E[0]) / data.DP04_0006E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0010E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0010E[1]) / data.DP04_0006E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0010E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0010E[2]) / data.DP04_0006E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '5 to 9 units',
            '3 Mile': (data.DP04_0011E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0011E[0]) / data.DP04_0006E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0011E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0011E[1]) / data.DP04_0006E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0011E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0011E[2]) / data.DP04_0006E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '10 to 19 units',
            '3 Mile': (data.DP04_0012E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0012E[0]) / data.DP04_0006E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0012E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0012E[1]) / data.DP04_0006E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0012E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0012E[2]) / data.DP04_0006E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '20 or more units',
            '3 Mile': (data.DP04_0013E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0013E[0]) / data.DP04_0006E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0013E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0013E[1]) / data.DP04_0006E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0013E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0013E[2]) / data.DP04_0006E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Mobile home',
            '3 Mile': (data.DP04_0014E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0014E[0]) / data.DP04_0006E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0014E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0014E[1]) / data.DP04_0006E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0014E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0014E[2]) / data.DP04_0006E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Boat, RV, van, etc.',
            '3 Mile': (data.DP04_0015E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0015E[0]) / data.DP04_0006E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0015E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0015E[1]) / data.DP04_0006E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0015E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0015E[2]) / data.DP04_0006E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Units in Structures
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

export default UnitsInStructure