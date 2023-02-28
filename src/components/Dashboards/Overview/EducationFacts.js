import React, {useState} from 'react';
import { Card, Text, Block, Metric, Flex, Icon, ColGrid, Col, Toggle, ToggleItem, Divider, BarChart, Title, ListItem, List, Subtitle} from "@tremor/react";
import { GrWorkshop } from 'react-icons/gr';
import { BsGraphDown } from 'react-icons/bs';
import { IoWomanSharp, IoManSharp } from 'react-icons/io5';

const EmploymentFacts = ({data}) => {

    const [buffer, setBuffer] = useState(0)

    const unemploymentRate = data[buffer][0].DP03_0005E/data[buffer][0].DP03_0004E

    const topRowData = [
        {
            title: 'Civilian Labor Force',
            metric: data[buffer][0].DP03_0003E.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            icon: GrWorkshop,
            color: 'orange'
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

    const industryData = [
        {
            name: "Agriculture",
            "Percentage": ((data[buffer][0].DP03_0033E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Construction",
            "Percentage": ((data[buffer][0].DP03_0034E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Manufacturing",
            "Percentage": ((data[buffer][0].DP03_0035E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Wholesale Trade",
            "Percentage": ((data[buffer][0].DP03_0036E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Retail trade",
            "Percentage": ((data[buffer][0].DP03_0037E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Transportation",
            "Percentage": ((data[buffer][0].DP03_0038E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Information",
            "Percentage": ((data[buffer][0].DP03_0039E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Finance",
            "Percentage": ((data[buffer][0].DP03_0040E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Scientific",
            "Percentage": ((data[buffer][0].DP03_0041E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Education",
            "Percentage": ((data[buffer][0].DP03_0042E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Entertainment",
            "Percentage": ((data[buffer][0].DP03_0043E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Other Services",
            "Percentage": ((data[buffer][0].DP03_0044E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Public administration",
            "Percentage": ((data[buffer][0].DP03_0045E/data[buffer][0].DP03_0032E) * 100)
        },

    ]

    return (
        <>
            <ColGrid numColsSm={ 1 } numColsMd={ 2 } numColsLg={ 3 } marginTop="mt-8" gapX="gap-x-6" gapY="gap-y-6">
                <Col numColSpan={1} numColSpanLg={2}>
                    <Card decoration="top" decorationColor='blue'>
                        <Title>Worker Breakdown by Industry</Title>
                        <Subtitle>Some words go here</Subtitle>
                        <BarChart
                            data={industryData}
                            dataKey="name"
                            categories={["Percentage"]}
                            colors="fushia"
                        />
                    </Card>
                </Col>

                <Card decoration="top" decorationColor='orange'>
                    <List marginTop="mt-6">
                        {topRowData.map((item) => (
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