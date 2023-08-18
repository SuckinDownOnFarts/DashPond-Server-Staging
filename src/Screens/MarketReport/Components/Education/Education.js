import { Card, Dropdown, DropdownItem, Flex, Text, Title, Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell } from '@tremor/react';
import React, { useState } from "react";
import { bufferData } from '../../../../data/Data';
  
const Education = ({ data }) => {

  const [buffer, setBuffer] = useState(0);

  const tableData = [
    {
        label: 'Total Population 25 and Over',
        estimate: data[buffer][0].DP02_0059E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP02_0059E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Less than 9th grade',
        estimate: data[buffer][0].DP02_0060E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP02_0060E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: '9th to 12th Grade, no Diploma',
        estimate: data[buffer][0].DP02_0061E.toLocaleString("en-US"),
        percentage: (data[buffer][0].DP02_0061E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'High School Graduate',
        estimate: (data[buffer][0].DP02_0062E + data[buffer][0].DP04_0008E).toLocaleString("en-US"),
        percentage: (((data[buffer][0].DP02_0062E) + data[buffer][0].DP04_0008E) / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: 'Some college, no degree',
        estimate: (data[buffer][0].DP02_0063E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP02_0063E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: "Associate's degree",
        estimate: (data[buffer][0].DP02_0064E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP02_0064E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: "Bachelor's degree",
        estimate: (data[buffer][0].DP02_0065E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP02_0065E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: 'Graduate or professional degree',
        estimate: (data[buffer][0].DP02_0066E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP02_0066E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
    {
        label: 'High school graduate or higher',
        estimate: (data[buffer][0].DP02_0067E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP02_0067E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-slate-100'
    },
    {
        label: "Bachelor's degree or higher",
        estimate: (data[buffer][0].DP02_0068E).toLocaleString("en-US"),
        percentage: (data[buffer][0].DP02_0068E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
        bgColor: 'bg-white'
    },
]

  return (
    <Card className='mt-8'>
      <Flex className='px-4 justify-start space-x-4'>
          <Title className='underline'>Educational Attainment</Title>

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

export default Education