import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

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
            '3 Mile': (data.DP02_0053E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0053E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0053E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0053E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0053E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0053E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Nursery school, preschool',
            '3 Mile': (data.DP02_0054E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0054E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0054E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0054E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0054E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0054E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Kindergarten',
            '3 Mile': (data.DP02_0055E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0055E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0055E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0055E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0055E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0055E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Elementary school (grades 1-8)',
            '3 Mile': (data.DP02_0056E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0056E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0056E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0056E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0056E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0056E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'High school (grades 9-12)',
            '3 Mile': (data.DP02_0057E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0057E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0057E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0057E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0057E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0057E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "College or graduate school",
            '3 Mile': (data.DP02_0058E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0058E[0]) / data.DP02_0053E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0058E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0058E[1]) / data.DP02_0053E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0058E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0058E[2]) / data.DP02_0053E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                School Enrollment
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

export default SchoolEnrollment