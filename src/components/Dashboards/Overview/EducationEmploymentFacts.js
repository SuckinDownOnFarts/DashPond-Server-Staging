import React, {useState} from 'react';
import { Card, Text, Block, Metric, Flex, Icon, ColGrid, Button, Divider, Title, ListItem, List, Bold, Dropdown, DropdownItem, Footer } from "@tremor/react";
import { GiDiploma } from 'react-icons/gi';
import { IoSchool, IoSchoolOutline, IoHammerSharp } from 'react-icons/io5';
import { MdBusinessCenter } from 'react-icons/md';
import { HiBuildingLibrary } from 'react-icons/hi2';
import { GrWorkshop } from 'react-icons/gr';
import { BsGraphDown } from 'react-icons/bs';
import { IoWomanSharp, IoManSharp } from 'react-icons/io5';
import { bufferData } from '../../../data/Data';
import { HiArrowNarrowRight } from 'react-icons/hi';

const EmploymentFacts = ({data, setSelectedView}) => {

    const [buffer, setBuffer] = useState(0);
    const [eduBuffer, setEduBuffer] = useState(0);
    const [empBuffer, setEmpBuffer] = useState(0);

    const educationMetrics = [
        {
            title: 'No High School Diploma',
            metric: ((data[eduBuffer][0].DP02_0061E + data[eduBuffer][0].DP02_0060E) / data[eduBuffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            amount: data[eduBuffer][0].DP02_0061E + data[eduBuffer][0].DP02_0060E,
            icon: GiDiploma,
            color: 'yellow'
        },
        {
            title: 'High School Graduate',
            metric: (data[eduBuffer][0].DP02_0062E / data[eduBuffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            amount: data[eduBuffer][0].DP02_0062E,
            icon: IoSchoolOutline,
            color: 'lime'
        },
        {
            title: 'Some College',
            metric: (data[eduBuffer][0].DP02_0063E / data[eduBuffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            amount: data[eduBuffer][0].DP02_0063E,
            icon: HiBuildingLibrary,
            color: 'rose'
        },
        {
            title: "Associate's Degree",
            metric: (data[eduBuffer][0].DP02_0064E / data[eduBuffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            amount: data[eduBuffer][0].DP02_0064E,
            icon: MdBusinessCenter,
            color: 'purple'
        },
        {
            title: "Grad/Master's/Bachelor's Degree",
            metric: (data[eduBuffer][0].DP02_0068E / data[eduBuffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            amount: data[eduBuffer][0].DP02_0068E,
            icon: IoSchool,
            color: 'sky'
        },
    ];

    const unemploymentRate = data[empBuffer][0].DP03_0005E/data[empBuffer][0].DP03_0004E

    const employmentInsights = [
        {
            title: 'Civilian Labor Force',
            metric: data[empBuffer][0].DP03_0003E.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            icon: GrWorkshop,
            color: 'orange'
        },
        {
            title: 'Total Employees',
            metric: data[empBuffer][0].DP03_0004E.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            icon: IoHammerSharp,
            color: 'purple'
        },
        {
            title: 'Percentage of Women in Labor Force',
            metric: (data[empBuffer][0].DP03_0012E / data[empBuffer][0].DP03_0003E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            icon: IoWomanSharp,
            color: 'pink'
        },
        {
            title: 'Percentage of Men in Labor Force',
            metric: ((data[empBuffer][0].DP03_0003E - data[empBuffer][0].DP03_0012E) / data[empBuffer][0].DP03_0003E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
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
                    <Flex justifyContent='justify-center'>
                        <Title>Key Education Facts</Title>
                    </Flex>
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
                    <Footer>
                        <Flex justifyContent='justify-between'>
                            <Button
                                variant='light'
                                size="sm"
                                text="View details"
                                icon={ HiArrowNarrowRight }
                                iconPosition="right"
                                onClick={() => setSelectedView(6)}
                            />
                            <Dropdown
                            defaultValue={0}
                            onValueChange={(value) => setEduBuffer(value)}
                            placeholder="3 Mile"
                            maxWidth="max-w-0"
                            marginTop="mt-0"
                            >
                            {bufferData.map((item) => (
                                <DropdownItem
                                value={item.value}
                                text={item.bufferName}
                                />
                            ))}
                            </Dropdown>
                        </Flex>
                    </Footer>
                </Card>

                <Card decoration="top" decorationColor='orange'>
                    <Flex justifyContent='justify-center'>
                        <Title>Key Employment Facts</Title>
                    </Flex>
                    
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
                    <Footer>
                        <Flex justifyContent='justify-between'>
                            <Button
                                variant='light'
                                size="sm"
                                text="View details"
                                icon={ HiArrowNarrowRight }
                                iconPosition="right"
                                onClick={() => setSelectedView(5)}
                            />
                            <Dropdown
                                defaultValue={0}
                                onValueChange={(value) => setEmpBuffer(value)}
                                placeholder="3 Mile"
                                maxWidth="max-w-0"
                                marginTop="mt-0"
                            >
                                {bufferData.map((item) => (
                                    <DropdownItem
                                        value={item.value}
                                        text={item.bufferName}
                                    />
                                ))}
                            </Dropdown>
                        </Flex>
                    </Footer>
                </Card>
            </ColGrid>
        </>
    )
}

export default EmploymentFacts