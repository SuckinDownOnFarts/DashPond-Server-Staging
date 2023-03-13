import React, {useState} from 'react';
import { Card, Flex, ColGrid, BarChart, Title, Subtitle, Dropdown, DropdownItem} from "@tremor/react";
import { bufferData } from '../../../data/Data';


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
                <Card>
                    <Flex>
                        <Title>Percentage of Labor Force by Industry</Title>
                        {/* <Subtitle>Some words go here</Subtitle> */}
                        <Dropdown
                            defaultValue={0}
                            onValueChange={(value) => setBuffer(value)}
                            placeholder="3 Mile"
                            maxWidth="max-w-0"
                            marginTop="mt-0"
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
                    <BarChart
                        data={industryData}
                        dataKey="name"
                        categories={["Percentage"]}
                        colors={["purple"]}
                        stack="horizontal"
                        yAxisWidth='w-12'
                    />
                </Card>
            </ColGrid>
        </>
    )
}

export default EmploymentFacts