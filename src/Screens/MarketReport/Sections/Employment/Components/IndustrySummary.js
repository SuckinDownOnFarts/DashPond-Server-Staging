import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const IndustrySummary = ({ data }) => {
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
            '3 Mile': (data.DP03_0032E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0032E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0032E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0032E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0032E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0032E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        { 
            'Data': 'Agriculture, forestry, fishing and hunting, and mining',
            '3 Mile': (data.DP03_0033E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0033E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0033E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0033E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0033E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0033E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Construction',
            '3 Mile': (data.DP03_0034E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0034E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0034E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0034E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0034E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0034E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Manufacturing',
            '3 Mile': (data.DP03_0035E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0035E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0035E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0035E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0035E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0035E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Wholesale trade',
            '3 Mile': (data.DP03_0036E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0036E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0036E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0036E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0036E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0036E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Retail trade',
            '3 Mile': (data.DP03_0037E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0037E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0037E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0037E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0037E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0037E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Transportation and warehousing, and utilities',
            '3 Mile': (data.DP03_0038E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0038E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0038E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0038E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0038E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0038E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Information',
            '3 Mile': (data.DP03_0039E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0039E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0039E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0039E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0039E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0039E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Finance and insurance, and real estate and rental and leasing',
            '3 Mile': (data.DP03_0040E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0040E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0040E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0040E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0040E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0040E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Professional, scientific, and management, and administrative and waste management services',
            '3 Mile': (data.DP03_0041E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0041E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0041E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0041E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0041E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0041E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Educational services, and health care and social assistance',
            '3 Mile': (data.DP03_0042E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0042E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0042E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0042E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0042E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0042E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Arts, entertainment, and recreation, and accommodation and food services',
            '3 Mile': (data.DP03_0043E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0043E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0043E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0043E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0043E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0043E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Other services, except public administration',
            '3 Mile': (data.DP03_0044E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0044E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0044E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0044E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0044E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0044E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Public administration',
            '3 Mile': (data.DP03_0045E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0045E[0]) / data.DP03_0032E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0045E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0045E[1]) / data.DP03_0032E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0045E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0045E[2]) / data.DP03_0032E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Industry Summary
            </Title>
            <div style={containerStyle}>
                <div className='h-[639px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default IndustrySummary