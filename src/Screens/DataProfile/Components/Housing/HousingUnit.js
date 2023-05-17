import { Card, Dropdown, DropdownItem, Flex, Title } from '@tremor/react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState } from "react";
import { bufferData } from '../../../../data/Data';

//theme
import "primereact/resources/themes/lara-light-teal/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";     

const HousingUnit = ({ data }) => {

  console.log(data);

  const [buffer, setBuffer] = useState(0);

  const tableData = [
    {
        label: 'Total Housing Units',
        estimate: data[buffer][0].DP04_0001E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0001E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Occupied Housing Units',
        estimate: data[buffer][0].DP04_0002E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0002E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: 'Vacant Housing Units',
        estimate: data[buffer][0].DP04_0003E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0003E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Single Family Homes',
        estimate: ((data[buffer][0].DP04_0007E) + data[buffer][0].DP04_0008E).toLocaleString("en-US"),
        percentage: (((data[buffer][0].DP04_0007E) + data[buffer][0].DP04_0008E) / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: 'Duplex',
        estimate: (data[buffer][0].DP04_0009E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0009E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Triplex and 4-Plex',
        estimate: (data[buffer][0].DP04_0010E).toLocaleString("en-US"),
        percentage: ((data[buffer][0].DP04_0010E) / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: '5 Units - 9 Units',
        estimate: data[buffer][0].DP04_0011E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0011E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: '10 Units - 19 Units',
        estimate: data[buffer][0].DP04_0012E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0012E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: '20 Units or More',
        estimate: data[buffer][0].DP04_0013E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0013E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Mobile Home',
        estimate: data[buffer][0].DP04_0014E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0014E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: 'Boat, RV, Van, etc.',
        estimate: data[buffer][0].DP04_0015E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0015E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
]

const products = [
    {
        label: 'Total Housing Units',
        values: data[buffer][0].DP04_0001E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0001E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    },
    {
        label: 'Penis',
        values: 'Other',
        percentage: 'YeaBro',
    },
    {
        label: 'Penis',
        values: 'Other',
        percentage: 'YeaBro',
    },
]

  return (
    <Card className='mt-8'>
        <Flex className='px-4 justify-start space-x-4 mb-8'>
            <Title className='underline'>Housing Unit Facts</Title>

            <Dropdown
                defaultValue={0}
                onValueChange={(value) => setBuffer(value)}
                placeholder="3 Mile"
                className="mt-0 max-w-0"
                >
                {bufferData.map((item) => (
                <DropdownItem
                    key={item.bufferName}
                    value={item.value}
                    text={item.bufferName}
                    />
                ))}
            </Dropdown>
        </Flex>

        <DataTable value={products} size='small' showGridlines stripedRows tableStyle={{ minWidth: '50rem' }}>
            <Column field="label" header="Label"></Column>
            <Column field="values" header="Value"></Column>
            <Column field="percentage" header="Percentage"></Column>
            {/* <Column field="quantity" header="Quantity"></Column> */}
        </DataTable>

    </Card>
    );
  }
export default HousingUnit