import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




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
            '5 Min': (data.DP02_0031E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0031E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0031E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0031E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0031E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0031E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Never married',
            '5 Min': (data.DP02_0032E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0032E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0032E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0032E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0032E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0032E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Now married, except separated',
            '5 Min': (data.DP02_0033E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0033E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0033E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0033E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0033E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0033E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Separated',
            '5 Min': (data.DP02_0034E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0034E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0034E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0034E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0034E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0034E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Widowed',
            '5 Min': (data.DP02_0035E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0035E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0035E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0035E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0035E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0035E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Divorced",
            '5 Min': (data.DP02_0036E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0036E[0]) / data.DP02_0031E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0036E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0036E[1]) / data.DP02_0031E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0036E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0036E[2]) / data.DP02_0031E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Marital Status (Females)
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

export default MaritalStatusFemales