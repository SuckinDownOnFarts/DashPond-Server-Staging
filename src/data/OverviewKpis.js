import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';
import { AreaChart, Icon, Toggle, ToggleItem, Card, Title, Text, Tab, TabList, ColGrid, Block, Metric, BadgeDelta, DeltaType, Dropdown, DropdownItem, Flex, MultiSelectBox,
  MultiSelectBoxItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, ProgressBar } from "@tremor/react";

const OverviewTopRow = ({population, medianHHincome, HHsize, medianAge}) => {

    const topRowData = [
    {
        title: 'Population',
        metric: population,
        progress: 15.9,
        target: '$ 80,000',
        delta: '13.2%',
        deltaType: 'moderateIncrease',
    },
    {
        title: 'Median Household Income',
        metric: `$ ${medianHHincome}`,
        progress: 36.5,
        target: '$ 125,000',
        delta: '23.9%',
        deltaType: 'increase',
    },
    {
        title: 'Household Size',
        metric: HHsize,
        progress: 15.9,
        target: '$ 80,000',
        delta: '13.2%',
        deltaType: 'moderateIncrease',
    },
    {
        title: 'Median Age',
        metric: medianAge,
        progress: 53.6,
        target: '2,000',
        delta: '10.1%',
        deltaType: 'moderateDecrease',
    },
    ];

    return (
        topRowData.map((item) => (
            <Card key={ item.title } decoration="top" decorationColor="indigo">
                <Flex alignItems="items-start">
                    <Block truncate={ true }>
                        <Text>{ item.title }</Text>
                        <Metric truncate={ true }>{ item.metric }</Metric>
                    </Block>
                    <BadgeDelta deltaType={ item.deltaType } text={ item.delta } />
                </Flex>
                <Flex marginTop="mt-4" spaceX="space-x-2">
                    <Text truncate={ true }>{ `${item.progress}% (${item.metric})` }</Text>
                    <Text>{ item.target }</Text>
                </Flex>
                <ProgressBar percentageValue={ item.progress } marginTop="mt-2" />
            </Card>
        ))
    )
}

export default OverviewTopRow