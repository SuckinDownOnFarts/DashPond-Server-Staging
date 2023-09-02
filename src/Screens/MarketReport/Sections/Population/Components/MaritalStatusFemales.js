import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MaritalStatusFemales = ({data}) => {
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
            'Data': 'Females 15 years and over',
            '3 Mile': (data.DP02_0031E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0031E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0031E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0031E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0031E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0031E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Never married',
            '3 Mile': (data.DP02_0032E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0032E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0032E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0032E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0032E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0032E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Now married, except separated',
            '3 Mile': (data.DP02_0033E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0033E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0033E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0033E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0033E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0033E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Separated',
            '3 Mile': (data.DP02_0034E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0034E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0034E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0034E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0034E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0034E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Widowed',
            '3 Mile': (data.DP02_0035E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0035E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0035E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0035E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0035E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0035E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Divorced",
            '3 Mile': (data.DP02_0036E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0036E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0036E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0036E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0036E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0036E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Marital Status (Females)
            </Title>
            <div style={containerStyle}>
                <div className='h-[315px] w-[1080px]'>
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

export default MaritalStatusFemales