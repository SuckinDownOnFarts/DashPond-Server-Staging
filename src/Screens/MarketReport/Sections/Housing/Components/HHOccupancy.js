import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const HHOccupancy = ({data}) => {
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
            'Data': 'Total housing units',
            '3 Mile': (data.DP04_0001E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0001E[0]) / data.DP04_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0001E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0001E[1]) / data.DP04_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0001E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0001E[2]) / data.DP04_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Occupied housing units',
            '3 Mile': (data.DP04_0002E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0002E[0]) / data.DP04_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0002E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0002E[1]) / data.DP04_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0002E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0002E[2]) / data.DP04_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Vacant housing units',
            '3 Mile': (data.DP04_0003E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0003E[0]) / data.DP04_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0003E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0003E[1]) / data.DP04_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0003E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0003E[2]) / data.DP04_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Occupants Paying Rent',
            '3 Mile': (data.DP04_0126E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP04_0126E[0]) / data.DP04_0001E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP04_0126E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP04_0126E[1]) / data.DP04_0001E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP04_0126E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP04_0126E[2]) / data.DP04_0001E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Households by Occupancy 
            </Title>
            <div style={containerStyle}>
                <div className='h-[225px] w-[1080px]'>
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
export default HHOccupancy