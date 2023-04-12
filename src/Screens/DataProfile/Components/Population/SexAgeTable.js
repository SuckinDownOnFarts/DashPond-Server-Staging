import React, { useState, useEffect } from 'react';
import { Card, Dropdown, DropdownItem, Flex, Text, Title, Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell } from '@tremor/react';
import { bufferData, ageRanges } from '../../../../data/Data';

const SexAgeTable = ({ data }) => {

    const [buffer, setBuffer] = useState(0);
    const [medianAge, setMedianAge] = useState(0);

    useEffect(() => {
        const calcMedianAge = async () =>{
          try {
              const agePercents = [
                data[buffer][0].DP05_0006E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0007E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0008E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0009E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0010E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0011E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0012E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0013E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0014E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0015E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0016E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0017E / data[buffer][0].DP05_0001E,
                data[buffer][0].DP05_0005E / data[buffer][0].DP05_0001E,
              ]
              let arr = 0
              for (let i = 0; i < agePercents.length; i++) {
                arr += agePercents[i]
                if (arr >= .5) {
                  const range = ageRanges[i][1] - ageRanges[i][0]
                  const inward = .5 - (arr - agePercents[i])
                  const distribution = agePercents[i] / range
                  
                  const result = inward / distribution
                  
                  const medianAgeCalc = result + ageRanges[i][0]
                  setMedianAge(medianAgeCalc)
                  break
                }
              }
          } catch (err) {
            if (err.response) {
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers); 
            } else { 
              console.log(`Error: ${err.message}`)
            }
          }
        }
    
        calcMedianAge();
      }, [buffer]);

    const tableData = [
        {
            label: 'Total Population',
            estimate: data[buffer][0].DP05_0001E.toLocaleString("en-US"),
            percentage: (data[buffer][0].DP05_0001E / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-slate-100'
        },
        {
            label: 'Males',
            estimate: data[buffer][0].DP05_0002E.toLocaleString("en-US"),
            percentage: (data[buffer][0].DP05_0002E / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-white'
        },
        {
            label: 'Females',
            estimate: data[buffer][0].DP05_0003E.toLocaleString("en-US"),
            percentage: (data[buffer][0].DP05_0003E / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-slate-100'
        },
        {
            label: 'Sex Ratio (Males per 100 Females)',
            estimate: ((data[buffer][0].DP05_0002E * 100) / data[buffer][0].DP05_0003E).toFixed(2),
            percentage: '(X)',
            bgColor: 'bg-white'
        },
        {
            label: 'Population Under 10',
            estimate: (data[buffer][0].DP05_0005E + data[buffer][0].DP05_0006E),
            percentage: ((data[buffer][0].DP05_0005E + data[buffer][0].DP05_0006E) / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-slate-100'
        },
        {
            label: 'Population 10 - 19 Years Old',
            estimate: (data[buffer][0].DP05_0007E + data[buffer][0].DP05_0008E),
            percentage: ((data[buffer][0].DP05_0007E + data[buffer][0].DP05_0008E) / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-white'
        },
        {
            label: 'Population 20 - 24 Years Old',
            estimate: data[buffer][0].DP05_0009E,
            percentage: (data[buffer][0].DP05_0009E / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-slate-100'
        },
        {
            label: 'Population 25 - 34 Years Old',
            estimate: data[buffer][0].DP05_0010E,
            percentage: (data[buffer][0].DP05_0010E / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-white'
        },
        {
            label: 'Population 35 - 44 Years Old',
            estimate: data[buffer][0].DP05_0011E,
            percentage: (data[buffer][0].DP05_0011E / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-slate-100'
        },
        {
            label: 'Population 45 - 54 Years Old',
            estimate: data[buffer][0].DP05_0012E,
            percentage: (data[buffer][0].DP05_0012E / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-white'
        },
        {
            label: 'Population 55 - 64 Years Old',
            estimate: (data[buffer][0].DP05_0013E + data[buffer][0].DP05_0014E),
            percentage: ((data[buffer][0].DP05_0013E + data[buffer][0].DP05_0014E) / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-slate-100'
        },
        {
            label: 'Population 65 - 74 Years Old',
            estimate: data[buffer][0].DP05_0015E,
            percentage: (data[buffer][0].DP05_0015E / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-white'
        },
        {
            label: 'Population 75 - 84 Years Old',
            estimate: data[buffer][0].DP05_0016E,
            percentage: (data[buffer][0].DP05_0016E / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-slate-100'
        },
        {
            label: 'Population 85 Years and Older',
            estimate: data[buffer][0].DP05_0017E,
            percentage: (data[buffer][0].DP05_0017E / data[buffer][0].DP05_0001E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            bgColor: 'bg-white'
        },
        {
            label: 'Median Age',
            estimate: medianAge.toFixed(0),
            percentage: '(X)',
            bgColor: 'bg-slate-100'
        },
    ]

  return (
    <Card className='mt-8'>
        

        <Flex className='px-4 justify-between'>
            <Title className='underline'>Sex & Age Facts</Title>

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
  )
}

export default SexAgeTable