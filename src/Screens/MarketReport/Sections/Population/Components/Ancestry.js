import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from '@ag-grid-community/react';




const Ancestry = ({data}) => {
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
            'Data': 'Total population',
            '5 Min': (data.DP02_0124E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0124E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0124E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0124E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0124E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0124E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'American',
            '5 Min': (data.DP02_0125E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0125E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0125E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0125E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0125E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0125E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Arab',
            '5 Min': (data.DP02_0126E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0126E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0126E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0126E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0126E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0126E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Czech',
            '5 Min': (data.DP02_0127E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0127E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0127E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0127E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0127E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0127E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Danish',
            '5 Min': (data.DP02_0128E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0128E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0128E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0128E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0128E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0128E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Dutch",
            '5 Min': (data.DP02_0129E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0129E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0129E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0129E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0129E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0129E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "English",
            '5 Min': (data.DP02_0130E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0130E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0130E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0130E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0130E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0130E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "French",
            '5 Min': (data.DP02_0131E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0131E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0131E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0131E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0131E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0131E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "French Canadian",
            '5 Min': (data.DP02_0132E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0132E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0132E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0132E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0132E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0132E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "German",
            '5 Min': (data.DP02_0133E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0133E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0133E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0133E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0133E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0133E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Greek",
            '5 Min': (data.DP02_0134E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0134E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0134E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0134E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0134E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0134E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Hungarian",
            '5 Min': (data.DP02_0135E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0135E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0135E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0135E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0135E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0135E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Irish",
            '5 Min': (data.DP02_0136E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0136E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0136E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0136E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0136E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0136E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Italian",
            '5 Min': (data.DP02_0137E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0137E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0137E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0137E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0137E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0137E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Lithuanian",
            '5 Min': (data.DP02_0138E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0138E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0138E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0138E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0138E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0138E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Norwegian",
            '5 Min': (data.DP02_0139E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0139E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0139E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0139E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0139E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0139E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Polish",
            '5 Min': (data.DP02_0140E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0140E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0140E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0140E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0140E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0140E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Portuguese",
            '5 Min': (data.DP02_0141E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0141E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0141E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0141E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0141E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0141E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Russian",
            '5 Min': (data.DP02_0142E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0142E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0142E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0142E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0142E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0142E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Scotch-Irish",
            '5 Min': (data.DP02_0143E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0143E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0143E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0143E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0143E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0143E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Scottish",
            '5 Min': (data.DP02_0144E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0144E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0144E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0144E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0144E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0144E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Slovak",
            '5 Min': (data.DP02_0145E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0145E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0145E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0145E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0145E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0145E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Sub-saharan African",
            '5 Min': (data.DP02_0146E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0146E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0146E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0146E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0146E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0146E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Swedish",
            '5 Min': (data.DP02_0147E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0147E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0147E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0147E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0147E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0147E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Swiss",
            '5 Min': (data.DP02_0148E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0148E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0148E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0148E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0148E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0148E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Ukrainian",
            '5 Min': (data.DP02_0149E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0149E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0149E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0149E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0149E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0149E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Welsh",
            '5 Min': (data.DP02_0150E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0150E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0150E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0150E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0150E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0150E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "West Indian",
            '5 Min': (data.DP02_0151E[0]).toLocaleString("en-US"),
            '% (5 Min)': ((data.DP02_0151E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Min': (data.DP02_0151E[1]).toLocaleString("en-US"),
            '% (10 Min)': ((data.DP02_0151E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '15 Min': (data.DP02_0151E[2]).toLocaleString("en-US"),
            '% (15 Min)': ((data.DP02_0151E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Ancestry
            </Title>
            <div style={containerStyle}>
                <div className='h-[1227px] sm:w-[100vw] reportMd:w-[1025px] sm:px-4'>
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

export default Ancestry