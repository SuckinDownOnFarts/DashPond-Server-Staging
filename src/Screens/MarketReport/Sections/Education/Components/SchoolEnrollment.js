import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';

const SchoolEnrollment = ({data}) => {
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
            'Data': 'Population 3 years and over enrolled in school',
            '5 Min': (data.DP02_0053E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0053E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0053E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0053E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0053E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0053E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Nursery school, preschool',
            '5 Min': (data.DP02_0054E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0054E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0054E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0054E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0054E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0054E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Kindergarten',
            '5 Min': (data.DP02_0055E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0055E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0055E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0055E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0055E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0055E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Elementary school (grades 1-8)',
            '5 Min': (data.DP02_0056E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0056E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0056E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0056E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0056E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0056E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'High school (grades 9-12)',
            '5 Min': (data.DP02_0057E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0057E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0057E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0057E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0057E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0057E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "College or graduate school",
            '5 Min': (data.DP02_0058E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0058E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0058E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0058E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0058E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0058E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                School Enrollment
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

export default SchoolEnrollment