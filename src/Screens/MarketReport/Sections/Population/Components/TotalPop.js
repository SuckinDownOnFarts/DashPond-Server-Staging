import React, { useState } from 'react';
import { useMantineTheme } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const TotalPop = ({ data }) => {
    const theme = useMantineTheme();
    const [rowData] = useState([
        { 
            Data: 'Total Population', 
            '3 Mile': data.DP05_0001E[0].toLocaleString("en-US"), 
            'Percent (3 Mile)': (data.DP05_0001E[0] / data.DP05_0001E[0]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}), 
            '5 Mile': data.DP05_0001E[1].toLocaleString("en-US"), 
            'Percent (5 Mile)': (data.DP05_0001E[1] / data.DP05_0001E[1]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            '10 Mile': data.DP05_0001E[2].toLocaleString("en-US"),
            'Percent (10 Mile)': (data.DP05_0001E[2] / data.DP05_0001E[2]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})
        },
        { 
            Data: 'Males in Radius', 
            '3 Mile': data.DP05_0002E[0].toLocaleString("en-US"), 
            'Percent (3 Mile)': (data.DP05_0002E[0] / data.DP05_0001E[0]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}), 
            '5 Mile': data.DP05_0002E[1].toLocaleString("en-US"), 
            'Percent (5 Mile)': (data.DP05_0002E[1] / data.DP05_0001E[1]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            '10 Mile': data.DP05_0002E[2].toLocaleString("en-US"),
            'Percent (10 Mile)': (data.DP05_0002E[0] / data.DP05_0001E[2]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})
        },
        { 
            Data: 'Females in Radius', 
            '3 Mile': data.DP05_0003E[0].toLocaleString("en-US"), 
            'Percent (3 Mile)': (data.DP05_0003E[0] / data.DP05_0001E[0]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}), 
            '5 Mile': data.DP05_0003E[1].toLocaleString("en-US"), 
            'Percent (5 Mile)': (data.DP05_0003E[1] / data.DP05_0001E[1]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}), 
            '10 Mile': data.DP05_0003E[2].toLocaleString("en-US"),
            'Percent (10 Mile)': (data.DP05_0003E[2] / data.DP05_0001E[2]).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}), 
        }
    ]);

    const [columnDefs] = useState([
        { field: 'Data' },
        { field: '3 Mile' },
        { field: 'Percent (3 Mile)' },
        { field: '5 Mile' },
        { field: 'Percent (5 Mile)' },
        { field: '10 Mile' },
        { field: 'Percent (10 Mile)' },
    ]);

    return (
        <div className={theme.colorScheme === 'dark' ? 'bg-[#1a1b1e] ag-theme-alpine-dark' : theme.colors.gray[0]} style={{ height: 400, width: '100%' }}>
            <AgGridReact rowData={rowData}
                columnDefs={columnDefs} />
        </div>
    );
}

export default TotalPop