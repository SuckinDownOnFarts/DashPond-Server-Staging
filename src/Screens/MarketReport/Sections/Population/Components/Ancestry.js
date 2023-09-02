import React, { useState, useMemo, useRef } from 'react';
import { useMantineTheme, Title } from '@mantine/core';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

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
            '3 Mile': (data.DP02_0124E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0124E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0124E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0124E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0124E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0124E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'American',
            '3 Mile': (data.DP02_0125E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0125E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0125E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0125E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0125E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0125E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 })
        },
        {
            'Data': 'Arab',
            '3 Mile': (data.DP02_0126E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0126E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0126E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0126E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0126E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0126E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Czech',
            '3 Mile': (data.DP02_0127E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0127E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0127E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0127E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0127E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0127E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': 'Danish',
            '3 Mile': (data.DP02_0128E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0128E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0128E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0128E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0128E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0128E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Dutch",
            '3 Mile': (data.DP02_0129E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0129E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0129E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0129E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0129E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0129E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "English",
            '3 Mile': (data.DP02_0130E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0130E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0130E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0130E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0130E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0130E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "French",
            '3 Mile': (data.DP02_0131E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0131E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0131E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0131E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0131E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0131E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "French Canadian",
            '3 Mile': (data.DP02_0132E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0132E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0132E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0132E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0132E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0132E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "German",
            '3 Mile': (data.DP02_0133E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0133E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0133E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0133E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0133E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0133E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Greek",
            '3 Mile': (data.DP02_0134E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0134E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0134E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0134E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0134E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0134E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Hungarian",
            '3 Mile': (data.DP02_0135E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0135E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0135E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0135E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0135E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0135E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Irish",
            '3 Mile': (data.DP02_0136E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0136E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0136E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0136E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0136E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0136E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Italian",
            '3 Mile': (data.DP02_0137E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0137E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0137E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0137E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0137E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0137E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Lithuanian",
            '3 Mile': (data.DP02_0138E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0138E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0138E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0138E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0138E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0138E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Norwegian",
            '3 Mile': (data.DP02_0139E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0139E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0139E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0139E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0139E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0139E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Polish",
            '3 Mile': (data.DP02_0140E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0140E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0140E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0140E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0140E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0140E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Portuguese",
            '3 Mile': (data.DP02_0141E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0141E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0141E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0141E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0141E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0141E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Russian",
            '3 Mile': (data.DP02_0142E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0142E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0142E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0142E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0142E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0142E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Scotch-Irish",
            '3 Mile': (data.DP02_0143E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0143E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0143E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0143E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0143E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0143E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Scottish",
            '3 Mile': (data.DP02_0144E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0144E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0144E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0144E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0144E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0144E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Slovak",
            '3 Mile': (data.DP02_0145E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0145E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0145E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0145E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0145E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0145E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Sub-saharan African",
            '3 Mile': (data.DP02_0146E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0146E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0146E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0146E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0146E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0146E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Swedish",
            '3 Mile': (data.DP02_0147E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0147E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0147E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0147E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0147E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0147E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Swiss",
            '3 Mile': (data.DP02_0148E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0148E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0148E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0148E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0148E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0148E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Ukrainian",
            '3 Mile': (data.DP02_0149E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0149E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0149E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0149E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0149E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0149E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "Welsh",
            '3 Mile': (data.DP02_0150E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0150E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0150E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0150E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0150E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0150E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            'Data': "West Indian",
            '3 Mile': (data.DP02_0151E[0]).toLocaleString("en-US"),
            '% (3 Mile)': ((data.DP02_0151E[0]) / data.DP02_0124E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '5 Mile': (data.DP02_0151E[1]).toLocaleString("en-US"),
            '% (5 Mile)': ((data.DP02_0151E[1]) / data.DP02_0124E[1]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
            '10 Mile': (data.DP02_0151E[2]).toLocaleString("en-US"),
            '% (10 Mile)': ((data.DP02_0151E[2]) / data.DP02_0124E[2]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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
                Ancestry
            </Title>
            <div style={containerStyle}>
                <div className='h-[1245px] w-[1080px]'>
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