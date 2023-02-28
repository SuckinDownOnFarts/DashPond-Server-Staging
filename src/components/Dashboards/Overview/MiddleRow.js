import React from 'react';
import { Card, Text, Block, Metric, Flex, Icon } from "@tremor/react";
import { GrWorkshop } from 'react-icons/gr'
import { BsGraphDown } from 'react-icons/bs'

const MiddleRow = ({laborForce, employed, unemployed, agInd, conInd, manuInd, tradInd, retailInd, transInd, infoInd, finInd, scienceInd, 
    educaInd, entertainInd, servicesInd, publicInd}) => {

    const unemploymentRate = unemployed/employed

    const topRowData = [
        {
            title: 'Civilian Labor Foce',
            metric: laborForce.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            icon: GrWorkshop,
            color: 'orange'
        },
        {
            title: 'Unemployment Rate',
            metric: unemploymentRate.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            icon: BsGraphDown,
            color: 'teal'
        },
        {
            title: 'Household Size',
            metric: null,
            icon: GrWorkshop,
            color: 'orange'
        },
        {
            title: 'Median Age',
            metric: null,
            icon: GrWorkshop,
            color: 'orange'
        },
    ];

    return (
        topRowData.map((item) => (
            <Card key={ item.title } decoration="top" decorationColor={item.color}>
                <Flex justifyContent='justify-start' spaceX='space-x-4'>
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
                    {/* <BadgeDelta deltaType={ item.deltaType } text={ item.delta } /> */}
                </Flex>
            </Card>
        ))
    )
}

export default MiddleRow