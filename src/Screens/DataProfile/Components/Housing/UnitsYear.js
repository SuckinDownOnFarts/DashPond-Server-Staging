import { Card, Dropdown, DropdownItem, Flex, Text, Title, Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell } from '@tremor/react';
import React, { useState } from "react";
import { bufferData } from '../../../../data/Data';

const Housing = ({ data }) => {

//   console.log(data);

  const [buffer, setBuffer] = useState(0);

  const tableData = [
    {
        label: 'Total Housing Units',
        estimate: data[buffer][0].DP04_0001E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0001E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Built 2014 or Later',
        estimate: data[buffer][0].DP04_0017E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0017E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: 'Built 2010 to 2013',
        estimate: data[buffer][0].DP04_0018E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0018E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Built 2000 to 2009',
        estimate: (data[buffer][0].DP04_0019E + data[buffer][0].DP04_0008E).toLocaleString("en-US"),
        percentage: (((data[buffer][0].DP04_0019E) + data[buffer][0].DP04_0008E) / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: 'Built 1990 to 1999',
        estimate: (data[buffer][0].DP04_0020E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0020E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Built 1980 to 1989',
        estimate: (data[buffer][0].DP04_0021E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0021E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: 'Built 1970 to 1979',
        estimate: (data[buffer][0].DP04_0022E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0022E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Built 1960 to 1969',
        estimate: (data[buffer][0].DP04_0023E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0023E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: 'Built 1950 to 1959',
        estimate: (data[buffer][0].DP04_0024E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0024E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Built 1940 to 1949',
        estimate: (data[buffer][0].DP04_0025E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0025E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: 'Built 1939 or earlier',
        estimate: (data[buffer][0].DP04_0026E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP04_0026E / data[buffer][0].DP04_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
]

  return (
    <Card className='mt-8'>
        <Flex className='px-4 justify-start space-x-4'>
            <Title className='underline'>Year Structure Built Facts</Title>

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

        <Table className='mt-2 justify-center'>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>Label</TableHeaderCell>
                    <TableHeaderCell>Estimate</TableHeaderCell>
                    <TableHeaderCell>Percentage</TableHeaderCell>
                </TableRow>
            </TableHead>

            <TableBody>
                { tableData.map((item) => (
                    <TableRow key={ item.label } className={item.bgColor}>
                        <TableCell className=''>
                          { item.label }
                        </TableCell>
                        <TableCell>
                          <Text>{ item.estimate }</Text>
                        </TableCell>
                        <TableCell>
                          <Text>{ item.percentage }</Text>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Card>
    );
  }
export default Housing