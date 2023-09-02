import React, { useState, useMemo, useCallback, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const AgeSummary = ({ data }) => {
    const theme = useMantineTheme();
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);

    const defaultColDef = useMemo(() => {
        return {
            resizable: true,
        };
    }, []);

    const [rowData] = useState([
        {
            'Data': 'Under 15 years',
            '3 Mile': (data.DP05_0005E[0] + data.DP05_0006E[0] + data.DP05_0007E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0005E[0] + data.DP05_0006E[0] + data.DP05_0007E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0005E[1] + data.DP05_0006E[1] + data.DP05_0007E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0005E[1] + data.DP05_0006E[1] + data.DP05_0007E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0005E[2] + data.DP05_0006E[2] + data.DP05_0007E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0005E[2] + data.DP05_0006E[2] + data.DP05_0007E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '15-34 years',
            '3 Mile': (data.DP05_0008E[0] + data.DP05_0009E[0] + data.DP05_0010E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0008E[0] + data.DP05_0009E[0] + data.DP05_0010E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0008E[1] + data.DP05_0009E[1] + data.DP05_0010E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0008E[1] + data.DP05_0009E[1] + data.DP05_0010E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0008E[2] + data.DP05_0009E[2] + data.DP05_0010E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0008E[2] + data.DP05_0009E[2] + data.DP05_0010E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '35-54 years',
            '3 Mile': (data.DP05_0011E[0] + data.DP05_0012E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0011E[0] + data.DP05_0012E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0011E[1] + data.DP05_0012E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0011E[1] + data.DP05_0012E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0011E[2] + data.DP05_0012E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0011E[2] + data.DP05_0012E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '55-64 years',
            '3 Mile': (data.DP05_0013E[0] + data.DP05_0014E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0013E[0] + data.DP05_0014E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0013E[1] + data.DP05_0014E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0013E[1] + data.DP05_0014E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0013E[2] + data.DP05_0014E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0013E[2] + data.DP05_0014E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '65+ years',
            '3 Mile': (data.DP05_0015E[0] + data.DP05_0016E[0] + data.DP05_0017E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP05_0015E[0] + data.DP05_0016E[0] + data.DP05_0017E[0]) / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP05_0015E[1] + data.DP05_0016E[1] + data.DP05_0017E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP05_0015E[1] + data.DP05_0016E[1] + data.DP05_0017E[1]) / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP05_0015E[2] + data.DP05_0016E[2] + data.DP05_0017E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP05_0015E[2] + data.DP05_0016E[2] + data.DP05_0017E[2]) / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        }
    ]);

    const [columnDefs] = useState([
        { field: 'Data' },
        { field: '3 Mile', width: 90 },
        { field: '% (3 Mile)' },
        { field: '5 Mile', width: 90 },
        { field: '% (5 Mile)' },
        { field: '10 Mile', width: 90 },
        { field: '% (10 Mile)' },
    ]);

    return (
        <div>
            <Title>
                Age Summary
            </Title>
            <div style={containerStyle}>
                <div className='h-[275px] w-[1080px]'>
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

export default AgeSummary