import React, {useState} from 'react';
import { Card, Text, Block, Metric, Flex, Icon, ColGrid, Col, Toggle, ToggleItem, Divider, BarChart, Title, ListItem, List, Subtitle} from "@tremor/react";


const EmploymentFacts = ({data}) => {

    const [buffer, setBuffer] = useState(0)

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
            name: "Wholesale",
            "Percentage": ((data[buffer][0].DP03_0036E/data[buffer][0].DP03_0032E) * 100)
        },
        {
            name: "Retail",
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
            <ColGrid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } marginTop="mt-8" gapX="gap-x-6" gapY="gap-y-6">
                
                <Col numColSpan={1} numColSpanLg={2}>
                    <Card decoration="top" decorationColor='blue'>
                        <Title>Percentage of Labor Force by Industry</Title>
                        <Subtitle>Some words go here</Subtitle>
                        <BarChart
                            data={industryData}
                            dataKey="name"
                            categories={["Percentage"]}
                            colors={["amber"]}
                            stack="horizontal"
                        />
                    </Card>
                </Col>
            </ColGrid>

            <Block textAlignment="text-center" marginTop='mt-8'>
                {/* <Metric>Employment Overview</Metric> */}
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