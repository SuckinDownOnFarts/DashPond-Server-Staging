import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




const EmployeeBreakdown = ({ data }) => {
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
            'Data': 'Civilian Labor Force (16 years and older)',
            '3 Mile': (data.DP03_0026E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0026E[0]) / data.DP03_0026E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0026E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0026E[1]) / data.DP03_0026E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0026E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0026E[2]) / data.DP03_0026E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Management, business, science, and arts occupations',
            '3 Mile': (data.DP03_0027E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0027E[0]) / data.DP03_0026E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0027E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0027E[1]) / data.DP03_0026E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0027E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0027E[2]) / data.DP03_0026E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Service occupations',
            '3 Mile': (data.DP03_0028E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0028E[0]) / data.DP03_0026E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0028E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0028E[1]) / data.DP03_0026E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0028E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0028E[2]) / data.DP03_0026E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Sales and office occupations',
            '3 Mile': (data.DP03_0029E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0029E[0]) / data.DP03_0026E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0029E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0029E[1]) / data.DP03_0026E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0029E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0029E[2]) / data.DP03_0026E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Natural resources, construction, and maintenance occupations',
            '3 Mile': (data.DP03_0030E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0030E[0]) / data.DP03_0026E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0030E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0030E[1]) / data.DP03_0026E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0030E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0030E[2]) / data.DP03_0026E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Production, transportation, and material moving occupations',
            '3 Mile': (data.DP03_0031E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0031E[0]) / data.DP03_0026E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0031E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0031E[1]) / data.DP03_0026E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0031E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0031E[2]) / data.DP03_0026E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        }
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
                Occupations Summary
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

export default EmployeeBreakdown