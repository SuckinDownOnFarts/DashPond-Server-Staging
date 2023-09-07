import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const EduAttainment = ({data}) => {
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
            'Data': 'Population 25 years and over',
            '3 Mile': (data.DP02_0059E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0059E[0]) / data.DP02_0059E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0059E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0059E[1]) / data.DP02_0059E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0059E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0059E[2]) / data.DP02_0059E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Less than 9th grade',
            '3 Mile': (data.DP02_0060E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0060E[0]) / data.DP02_0059E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0060E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0060E[1]) / data.DP02_0059E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0060E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0060E[2]) / data.DP02_0059E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '9th to 12th grade, no diploma',
            '3 Mile': (data.DP02_0061E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0061E[0]) / data.DP02_0059E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0061E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0061E[1]) / data.DP02_0059E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0061E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0061E[2]) / data.DP02_0059E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'High school graduate',
            '3 Mile': (data.DP02_0062E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0062E[0]) / data.DP02_0059E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0062E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0062E[1]) / data.DP02_0059E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0062E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0062E[2]) / data.DP02_0059E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Some college, no degree',
            '3 Mile': (data.DP02_0063E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0063E[0]) / data.DP02_0059E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0063E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0063E[1]) / data.DP02_0059E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0063E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0063E[2]) / data.DP02_0059E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Associate's degree",
            '3 Mile': (data.DP02_0064E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0064E[0]) / data.DP02_0059E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0064E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0064E[1]) / data.DP02_0059E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0064E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0064E[2]) / data.DP02_0059E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Bachelor's degree",
            '3 Mile': (data.DP02_0065E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0065E[0]) / data.DP02_0059E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0065E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0065E[1]) / data.DP02_0059E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0065E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0065E[2]) / data.DP02_0059E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Graduate or professional degree',
            '3 Mile': (data.DP02_0066E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0066E[0]) / data.DP02_0059E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0066E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0066E[1]) / data.DP02_0059E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0066E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0066E[2]) / data.DP02_0059E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Educational Attainment
            </Title>
            <div style={containerStyle}>
                <div className='h-[405px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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
export default EduAttainment