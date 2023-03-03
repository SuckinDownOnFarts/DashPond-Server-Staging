import React, {useState, useEffect} from 'react';
import { Card, Text, Block, Metric, Flex, Icon, ColGrid, Toggle, ToggleItem, Divider, Title, ListItem, List, Bold, Table, TableHead, TableRow, TableHeaderCell, 
    TableBody, TableCell, Subtitle} from "@tremor/react";
import { GiDiploma } from 'react-icons/gi';
import { IoSchool, IoSchoolOutline, IoHammerSharp } from 'react-icons/io5';
import { MdBusinessCenter } from 'react-icons/md';
import { HiBuildingLibrary } from 'react-icons/hi2';
import { GrWorkshop } from 'react-icons/gr';
import { BsGraphDown } from 'react-icons/bs';
import { IoWomanSharp, IoManSharp } from 'react-icons/io5';

const EmploymentFacts = ({data}) => {

    const [buffer, setBuffer] = useState(0);


    const educationMetrics = [
        {
            title: 'No High School Diploma',
            metric: ((data[buffer][0].DP02_0061E + data[buffer][0].DP02_0060E) / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            amount: data[buffer][0].DP02_0061E + data[buffer][0].DP02_0060E,
            icon: GiDiploma,
            color: 'yellow'
        },
        {
            title: 'High School Graduate',
            metric: (data[buffer][0].DP02_0062E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            amount: data[buffer][0].DP02_0062E,
            icon: IoSchoolOutline,
            color: 'lime'
        },
        {
            title: 'Some College',
            metric: (data[buffer][0].DP02_0063E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            amount: data[buffer][0].DP02_0063E,
            icon: HiBuildingLibrary,
            color: 'rose'
        },
        {
            title: "Associate's Degree",
            metric: (data[buffer][0].DP02_0064E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            amount: data[buffer][0].DP02_0064E,
            icon: MdBusinessCenter,
            color: 'purple'
        },
        {
            title: "Grad/Master's/Bachelor's Degree",
            metric: (data[buffer][0].DP02_0068E / data[buffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            amount: data[buffer][0].DP02_0068E,
            icon: IoSchool,
            color: 'sky'
        },
    ];

    const unemploymentRate = data[buffer][0].DP03_0005E/data[buffer][0].DP03_0004E

    const employmentInsights = [
        {
            title: 'Civilian Labor Force',
            metric: data[buffer][0].DP03_0003E.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            icon: GrWorkshop,
            color: 'orange'
        },
        {
            title: 'Total Employees',
            metric: data[buffer][0].DP03_0004E.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            icon: IoHammerSharp,
            color: 'purple'
        },
        {
            title: 'Percentage of Women in Labor Force',
            metric: (data[buffer][0].DP03_0012E / data[buffer][0].DP03_0003E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            icon: IoWomanSharp,
            color: 'pink'
        },
        {
            title: 'Percentage of Men in Labor Force',
            metric: ((data[buffer][0].DP03_0003E - data[buffer][0].DP03_0012E) / data[buffer][0].DP03_0003E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            icon: IoManSharp,
            color: 'blue'
        },
        {
            title: 'Unemployment Rate',
            metric: unemploymentRate.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            icon: BsGraphDown,
            color: 'teal'
        },
        
    ];
    

    return (
        <>
            <ColGrid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 2 } marginTop="mt-8" gapX="gap-x-6" gapY="gap-y-6">

                <Card decoration="top" decorationColor='red'>
                    <Title>Education Facts</Title>
                    <List marginTop="mt-6">
                        {educationMetrics.map((item) => (
                            <ListItem key={ item.title }>
                                <Flex justifyContent='justify-start' spaceX='space-x-4' truncate={ true}>
                                    <Icon
                                        icon={ item.icon }
                                        variant="light"
                                        size="xl"
                                        color={ item.color }
                                    />
                                    <Block truncate={ true }>
                                        <Text>{ item.title }</Text>
                                        <Metric truncate={ true }>{ item.metric }</Metric>
                                    </Block>
                                </Flex>
                                <Text>Population Over 25: <Bold>{ item.amount }</Bold></Text>
                            </ListItem>
                        ))}
                    </List>
                </Card>

                <Card decoration="top" decorationColor='orange'>
                    <Title>Employment Facts</Title>
                    <List marginTop="mt-6">
                        {employmentInsights.map((item) => (
                            <ListItem key={ item.title }>
                                <Flex justifyContent='justify-start' spaceX='space-x-4' truncate={ true}>
                                    <Icon
                                        icon={ item.icon }
                                        variant="light"
                                        size="xl"
                                        color={ item.color }
                                    />
                                    <Block truncate={ true }>
                                        <Text>{ item.title }</Text>
                                        <Metric truncate={ true }>{ item.metric }</Metric>
                                    </Block>
                                </Flex>
                            </ListItem>
                        ))}
                    </List>
                </Card>
            </ColGrid>

            <Block textAlignment="text-center" marginTop='mt-8'>
                {/* <Metric>Education Overview</Metric> */}
                <Toggle value={buffer} onValueChange={ setBuffer }>
                <ToggleItem value={0} text={'Three Mile'} />
                <ToggleItem value={1} text={'Five Mile'} />
                <ToggleItem value={2} text={'Ten Mile'} />
                </Toggle>
            </Block>

            <Divider />
        </>
    )
}

export default EmploymentFacts