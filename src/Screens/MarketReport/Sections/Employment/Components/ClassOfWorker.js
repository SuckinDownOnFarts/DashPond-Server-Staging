import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const ClassOfWorker = ({data}) => {
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
            'Data': 'Civilian employed population 16 years and over',
            '3 Mile': (data.DP03_0046E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0046E[0]) / data.DP03_0046E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0046E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0046E[1]) / data.DP03_0046E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0046E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0046E[2]) / data.DP03_0046E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Private wage and salary workers',
            '3 Mile': (data.DP03_0047E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0047E[0]) / data.DP03_0046E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0047E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0047E[1]) / data.DP03_0046E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0047E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0047E[2]) / data.DP03_0046E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Government workers',
            '3 Mile': (data.DP03_0048E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0048E[0]) / data.DP03_0046E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0048E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0048E[1]) / data.DP03_0046E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0048E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0048E[2]) / data.DP03_0046E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Self-employed in own not incorporated business workers',
            '3 Mile': (data.DP03_0049E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0049E[0]) / data.DP03_0046E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0049E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0049E[1]) / data.DP03_0046E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0049E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0049E[2]) / data.DP03_0046E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Unpaid family workers',
            '3 Mile': (data.DP03_0050E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0050E[0]) / data.DP03_0046E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0050E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0050E[1]) / data.DP03_0046E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0050E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0050E[2]) / data.DP03_0046E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Class of Workers
            </Title>
            <div style={containerStyle}>
                <div className='h-[265px] w-[1080px]'>
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

export default ClassOfWorker