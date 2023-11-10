import React, { useState, useMemo, useRef } from 'react';
import { Title, useMantineTheme } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';


const TotalPop = ({ data }) => {
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
            'Data': 'Total Population',
            '5 Min': data.DP05_0001E[0].toLocaleString("en-US"),
            '% (5 Min)': (data.DP05_0001E[0] / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': data.DP05_0001E[1].toLocaleString("en-US"),
            '% (10 Min)': (data.DP05_0001E[1] / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': data.DP05_0001E[2].toLocaleString("en-US"),
            '% (15 Min)': (data.DP05_0001E[2] / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Males',
            '5 Min': data.DP05_0002E[0].toLocaleString("en-US"),
            '% (5 Min)': (data.DP05_0002E[0] / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': data.DP05_0002E[1].toLocaleString("en-US"),
            '% (10 Min)': (data.DP05_0002E[1] / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': data.DP05_0002E[2].toLocaleString("en-US"),
            '% (15 Min)': (data.DP05_0002E[2] / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Females',
            '5 Min': data.DP05_0003E[0].toLocaleString("en-US"),
            '% (5 Min)': (data.DP05_0003E[0] / data.DP05_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': data.DP05_0003E[1].toLocaleString("en-US"),
            '% (10 Min)': (data.DP05_0003E[1] / data.DP05_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': data.DP05_0003E[2].toLocaleString("en-US"),
            '% (15 Min)': (data.DP05_0003E[2] / data.DP05_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        }
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
                Total Population
            </Title>
            <div style={containerStyle}>
                <div className='h-[177px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default TotalPop