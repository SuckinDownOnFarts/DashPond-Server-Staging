import React, { useState } from 'react';
import { Card, Text, Grid, Toggle, ToggleItem, Divider, Title, Bold, Table, TableHead, TableRow, TableHeaderCell, 
    TableBody, TableCell, Subtitle, SelectBox, SelectBoxItem, Flex, Badge, DeltaBar, Dropdown, DropdownItem } from '@tremor/react';
import { bufferData } from '../../../../data/Data';

const HouseholdIncome = ({data}) => {

    const [buffer, setBuffer] = useState(0);

    const householdIncomes = [
        // {
        //     name: 'totalHH',
        //     data: data[buffer][0].DP02_0001E,
        // },
        {
            name: '<$10,000',
            data: data[buffer][0].DP03_0052E,
        },
        {
            name: '$10,001 - $15,000',
            data: data[buffer][0].DP03_0053E,
        },
        {
            name: '$15,001 - $25,000',
            data: data[buffer][0].DP03_0054E,
        },
        {
            name: '$25,001 - $35,000',
            data: data[buffer][0].DP03_0055E,
        },
        {
            name: '$35,001 - $50,000',
            data: data[buffer][0].DP03_0056E,
        },
        {
            name: '$50,001 - $75,000',
            data: data[buffer][0].DP03_0057E,
        },
        {
            name: '$75,001 - $100,000',
            data: data[buffer][0].DP03_0058E,
        },
        {
            name: '$100,001 - $150,000',
            data: data[buffer][0].DP03_0059E,
        },
        {
            name: '$150,001 - $200,000',
            data: data[buffer][0].DP03_0060E,
        },
        {
            name: '$200,000+',
            data: data[buffer][0].DP03_0061E,
        },
    ];

  return (

    <Card className='h-full mt-8'>
        <Flex>
            <div className='text-start'>
                <Title>Household Income Facts</Title>
                {/* <Subtitle>Largest Income Bracket: <Bold>{largestBracket}</Bold></Subtitle>
                <Subtitle>Smallest Income Bracket: <Bold>{smallestBracket}</Bold></Subtitle> */}
            </div>
            <Flex justifyContent='justify-end' className='mt-2 space-x-2'>
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
        </Flex>

        <Table className='mt-4'>
            <TableHead>
                <TableRow>
                    <TableHeaderCell>
                        Income Bracket
                    </TableHeaderCell>
                    <TableHeaderCell>
                        Number of Households
                    </TableHeaderCell>
                    {/* <TableHeaderCell>
                        Selected Parish (%)  
                    </TableHeaderCell>
                    <TableHeaderCell>
                        Percentage Difference  
                    </TableHeaderCell> */}
                </TableRow>
            </TableHead>

            <TableBody>
                { householdIncomes.map((item) => (
                    <TableRow key={ item.name }>
                        <TableCell>
                            { item.name }
                        </TableCell>
                        <TableCell>
                            <Text>{ item.data }</Text>
                        </TableCell>
                        {/* <TableCell>
                            <Text>{ item.localP }</Text>
                        </TableCell> */}
                        {/* <TableCell>
                            <Badge 
                                color={parseInt(item.difference) < 0 ? 'red' : 'green'}
                                tooltip={parseInt(item.difference) < 0 ? `This property has ${(parseFloat(item.difference) * -1)} more people than the selectedinside this income bracket`
                                    : `The selected parish has ${item.difference} less people inside this income bracket` }
                            > {item.difference} </Badge>
                        </TableCell>  */}
                    </TableRow>
                )) }
            </TableBody>
        </Table>
    </Card>
  )
}

export default HouseholdIncome