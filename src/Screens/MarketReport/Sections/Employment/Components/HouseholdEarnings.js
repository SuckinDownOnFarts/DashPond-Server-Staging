import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';




const HouseholdEarnings = ({data}) => {
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
            'Data': 'Total households',
            '3 Mile': (data.DP03_0051E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0051E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0051E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0051E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0051E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0051E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Less than $10,000',
            '3 Mile': (data.DP03_0052E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0052E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0052E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0052E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0052E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0052E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': '$10,000 to $14,999',
            '3 Mile': (data.DP03_0053E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0053E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0053E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0053E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0053E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0053E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$15,000 to $24,999',
            '3 Mile': (data.DP03_0054E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0054E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0054E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0054E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0054E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0054E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': '$25,000 to $34,999',
            '3 Mile': (data.DP03_0055E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0055E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0055E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0055E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0055E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0055E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$35,000 to $49,999",
            '3 Mile': (data.DP03_0056E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0056E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0056E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0056E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0056E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0056E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$50,000 to $74,999",
            '3 Mile': (data.DP03_0057E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0057E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0057E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0057E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0057E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0057E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$75,000 to $99,999",
            '3 Mile': (data.DP03_0058E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0058E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0058E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0058E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0058E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0058E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$100,000 to $149,999",
            '3 Mile': (data.DP03_0059E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0059E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0059E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0059E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0059E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0059E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$150,000 to $199,999",
            '3 Mile': (data.DP03_0060E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0060E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0060E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0060E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0060E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0060E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "$200,000 or more",
            '3 Mile': (data.DP03_0061E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP03_0061E[0]) / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP03_0061E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP03_0061E[1]) / data.DP03_0051E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP03_0061E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP03_0061E[2]) / data.DP03_0051E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Household Income
            </Title>
            <div style={containerStyle}>
                <div className='h-[513px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default HouseholdEarnings