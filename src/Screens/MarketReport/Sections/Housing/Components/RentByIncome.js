import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

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
            '3 Mile': (data.DP04_0136E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0136E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0136E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0136E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0136E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0136E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': 'Less than 15.0 percent',
            '3 Mile': (data.DP04_0137E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0137E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0137E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0137E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0137E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0137E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '15.0 to 19.9 percent',
            '3 Mile': (data.DP04_0138E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0138E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0138E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0138E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0138E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0138E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '20.0 to 24.9 percent',
            '3 Mile': (data.DP04_0139E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0139E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0139E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0139E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0139E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0139E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '25.0 to 29.9 percent',
            '3 Mile': (data.DP04_0140E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0140E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0140E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0140E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0140E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0140E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '30.0 to 34.9 percent',
            '3 Mile': (data.DP04_0141E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0141E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0141E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0141E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0141E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0141E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '35.0 percent or more',
            '3 Mile': (data.DP04_0142E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0142E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0142E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0142E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0142E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0142E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Not computed',
            '3 Mile': (data.DP04_0143E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0143E[0]) / data.DP04_0136E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0143E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0143E[1]) / data.DP04_0136E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0143E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0143E[2]) / data.DP04_0136E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
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
                Gross Rent as % of Household Income
            </Title>
            <div style={containerStyle}>
                <div className='h-[395px] w-[1080px]'>
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