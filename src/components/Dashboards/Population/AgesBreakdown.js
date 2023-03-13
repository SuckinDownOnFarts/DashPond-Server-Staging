import React, { useEffect, useState } from 'react';
import { Card, Col, AreaChart, Dropdown, DropdownItem, Flex, List, ListItem, Text, Title, Bold, ColGrid, Color, BarChart, 
    MultiSelectBox, MultiSelectBoxItem } from '@tremor/react';


const AgesBreakdown = ({ data, timeData }) => {

    console.log(timeData);

    const [buffer, setBuffer] = useState(0);

    const ageData = [
        {
            year: '2012',
            'Under 10': (timeData[buffer][0].DP05_0004E + timeData[buffer][0].DP05_0005E),
            '10 - 19 Years Old': (timeData[buffer][0].DP05_0006E + timeData[buffer][0].DP05_0007E),
            '20 - 24 Years Old': timeData[buffer][0].DP05_0008E,
            '25 - 34 Years Old': timeData[buffer][0].DP05_0009E,
            '35 - 44 Years Old': timeData[buffer][0].DP05_0010E,
            '45 - 54 Years Old': timeData[buffer][0].DP05_0011E,
            '55 - 64 Years Old': (timeData[buffer][0].DP05_0012E + timeData[buffer][0].DP05_0013E),
            '65 - 74 Years Old': timeData[buffer][0].DP05_0014E,
            '75 - 84 Years Old': timeData[buffer][0].DP05_0015E,
            '85 Years and Older': timeData[buffer][0].DP05_0016E,
            category: 'age breakdown',
        },
        {
            year: '2013',
            'Under 10': (timeData[buffer][1].DP05_0004E + timeData[buffer][1].DP05_0005E),
            '10 - 19 Years Old': (timeData[buffer][1].DP05_0006E + timeData[buffer][1].DP05_0007E),
            '20 - 24 Years Old': timeData[buffer][1].DP05_0008E,
            '25 - 34 Years Old': timeData[buffer][1].DP05_0009E,
            '35 - 44 Years Old': timeData[buffer][1].DP05_0010E,
            '45 - 54 Years Old': timeData[buffer][1].DP05_0011E,
            '55 - 64 Years Old': (timeData[buffer][1].DP05_0012E + timeData[buffer][1].DP05_0013E),
            '65 - 74 Years Old': timeData[buffer][1].DP05_0014E,
            '75 - 84 Years Old': timeData[buffer][1].DP05_0015E,
            '85 Years and Older': timeData[buffer][1].DP05_0016E,
            category: 'age breakdown',
        },
        {
            year: '2014',
            'Under 10': (timeData[buffer][2].DP05_0004E + timeData[buffer][2].DP05_0005E),
            '10 - 19 Years Old': (timeData[buffer][2].DP05_0006E + timeData[buffer][2].DP05_0007E),
            '20 - 24 Years Old': timeData[buffer][2].DP05_0008E,
            '25 - 34 Years Old': timeData[buffer][2].DP05_0009E,
            '35 - 44 Years Old': timeData[buffer][2].DP05_0010E,
            '45 - 54 Years Old': timeData[buffer][2].DP05_0011E,
            '55 - 64 Years Old': (timeData[buffer][2].DP05_0012E + timeData[buffer][2].DP05_0013E),
            '65 - 74 Years Old': timeData[buffer][2].DP05_0014E,
            '75 - 84 Years Old': timeData[buffer][2].DP05_0015E,
            '85 Years and Older': timeData[buffer][2].DP05_0016E,
            category: 'age breakdown',
        },
        {
            year: '2015',
            'Under 10': (timeData[buffer][3].DP05_0004E + timeData[buffer][3].DP05_0005E),
            '10 - 19 Years Old': (timeData[buffer][3].DP05_0006E + timeData[buffer][3].DP05_0007E),
            '20 - 24 Years Old': timeData[buffer][3].DP05_0008E,
            '25 - 34 Years Old': timeData[buffer][3].DP05_0009E,
            '35 - 44 Years Old': timeData[buffer][3].DP05_0010E,
            '45 - 54 Years Old': timeData[buffer][3].DP05_0011E,
            '55 - 64 Years Old': (timeData[buffer][3].DP05_0012E + timeData[buffer][3].DP05_0013E),
            '65 - 74 Years Old': timeData[buffer][3].DP05_0014E,
            '75 - 84 Years Old': timeData[buffer][3].DP05_0015E,
            '85 Years and Older': timeData[buffer][3].DP05_0016E,
            category: 'age breakdown',
        },
        {
            year: '2016',
            'Under 10': (timeData[buffer][4].DP05_0004E + timeData[buffer][4].DP05_0005E),
            '10 - 19 Years Old': (timeData[buffer][4].DP05_0006E + timeData[buffer][4].DP05_0007E),
            '20 - 24 Years Old': timeData[buffer][4].DP05_0008E,
            '25 - 34 Years Old': timeData[buffer][4].DP05_0009E,
            '35 - 44 Years Old': timeData[buffer][4].DP05_0010E,
            '45 - 54 Years Old': timeData[buffer][4].DP05_0011E,
            '55 - 64 Years Old': (timeData[buffer][4].DP05_0012E + timeData[buffer][4].DP05_0013E),
            '65 - 74 Years Old': timeData[buffer][4].DP05_0014E,
            '75 - 84 Years Old': timeData[buffer][4].DP05_0015E,
            '85 Years and Older': timeData[buffer][4].DP05_0016E,
            category: 'age breakdown',
        },
        {
            year: '2017',
            'Under 10': (timeData[buffer][5].DP05_0005E + timeData[buffer][5].DP05_0006E),
            '10 - 19 Years Old': (timeData[buffer][5].DP05_0007E + timeData[buffer][5].DP05_0008E),
            '20 - 24 Years Old': timeData[buffer][5].DP05_0009E,
            '25 - 34 Years Old': timeData[buffer][5].DP05_0010E,
            '35 - 44 Years Old': timeData[buffer][5].DP05_0011E,
            '45 - 54 Years Old': timeData[buffer][5].DP05_0012E,
            '55 - 64 Years Old': (timeData[buffer][5].DP05_0013E + timeData[buffer][5].DP05_0014E),
            '65 - 74 Years Old': timeData[buffer][5].DP05_0015E,
            '75 - 84 Years Old': timeData[buffer][5].DP05_0016E,
            '85 Years and Older': timeData[buffer][5].DP05_0017E,
            category: 'age breakdown',
        },
        {
            year: '2018',
            'Under 10': (timeData[buffer][6].DP05_0005E + timeData[buffer][6].DP05_0006E),
            '10 - 19 Years Old': (timeData[buffer][6].DP05_0007E + timeData[buffer][6].DP05_0008E),
            '20 - 24 Years Old': timeData[buffer][6].DP05_0009E,
            '25 - 34 Years Old': timeData[buffer][6].DP05_0010E,
            '35 - 44 Years Old': timeData[buffer][6].DP05_0011E,
            '45 - 54 Years Old': timeData[buffer][6].DP05_0012E,
            '55 - 64 Years Old': (timeData[buffer][6].DP05_0013E + timeData[buffer][6].DP05_0014E),
            '65 - 74 Years Old': timeData[buffer][6].DP05_0015E,
            '75 - 84 Years Old': timeData[buffer][6].DP05_0016E,
            '85 Years and Older': timeData[buffer][6].DP05_0017E,
            category: 'age breakdown',
        },
        {
            year: '2019',
            'Under 10': (timeData[buffer][7].DP05_0005E + timeData[buffer][7].DP05_0006E),
            '10 - 19 Years Old': (timeData[buffer][7].DP05_0007E + timeData[buffer][7].DP05_0008E),
            '20 - 24 Years Old': timeData[buffer][7].DP05_0009E,
            '25 - 34 Years Old': timeData[buffer][7].DP05_0010E,
            '35 - 44 Years Old': timeData[buffer][7].DP05_0011E,
            '45 - 54 Years Old': timeData[buffer][7].DP05_0012E,
            '55 - 64 Years Old': (timeData[buffer][7].DP05_0013E + timeData[buffer][7].DP05_0014E),
            '65 - 74 Years Old': timeData[buffer][7].DP05_0015E,
            '75 - 84 Years Old': timeData[buffer][7].DP05_0016E,
            '85 Years and Older': timeData[buffer][7].DP05_0017E,
            category: 'age breakdown',
        },
        {
            year: '2020',
            'Under 10': (data[buffer][0].DP05_0005E + data[buffer][0].DP05_0006E),
            '10 - 19 Years Old': (data[buffer][0].DP05_0007E + data[buffer][0].DP05_0008E),
            '20 - 24 Years Old': data[buffer][0].DP05_0009E,
            '25 - 34 Years Old': data[buffer][0].DP05_0010E,
            '35 - 44 Years Old': data[buffer][0].DP05_0011E,
            '45 - 54 Years Old': data[buffer][0].DP05_0012E,
            '55 - 64 Years Old': (data[buffer][0].DP05_0013E + data[buffer][0].DP05_0014E),
            '65 - 74 Years Old': data[buffer][0].DP05_0015E,
            '75 - 84 Years Old': data[buffer][0].DP05_0016E,
            '85 Years and Older': data[buffer][0].DP05_0017E,
            category: 'age breakdown',
        },
        {
            year: '2021',
            'Under 10': (timeData[buffer][8].DP05_0005E + timeData[buffer][8].DP05_0006E),
            '10 - 19 Years Old': (timeData[buffer][8].DP05_0007E + timeData[buffer][8].DP05_0008E),
            '20 - 24 Years Old': timeData[buffer][8].DP05_0009E,
            '25 - 34 Years Old': timeData[buffer][8].DP05_0010E,
            '35 - 44 Years Old': timeData[buffer][8].DP05_0011E,
            '45 - 54 Years Old': timeData[buffer][8].DP05_0012E,
            '55 - 64 Years Old': (timeData[buffer][8].DP05_0013E + timeData[buffer][8].DP05_0014E),
            '65 - 74 Years Old': timeData[buffer][8].DP05_0015E,
            '75 - 84 Years Old': timeData[buffer][8].DP05_0016E,
            '85 Years and Older': timeData[buffer][8].DP05_0017E,
            category: 'age breakdown',
        },
    ]

    const [selectedAges, setSelectedAges] = useState([]);
    const [selectedDemographic, setSelectedDemographic] = useState('age breakdown');

    const filter = [
        { key: 'Under 10', name: 'Under 10' },
        { key: '10 - 19 Years Old', name: '10 - 19 Years Old' },
        { key: '20 - 24 Years Old', name: '20 - 24 Years Old'},
        { key: '25 - 34 Years Old', name: '25 - 34 Years Old'},
        { key: '35 - 44 Years Old', name: '35 - 44 Years Old'},
        { key: '45 - 54 Years Old', name: '45 - 54 Years Old'},
        { key: '55 - 64 Years Old', name: '55 - 64 Years Old'},
        { key: '65 - 74 Years Old', name: '65 - 74 Years Old'},
        { key: '75 - 84 Years Old', name: '75 - 84 Years Old'},
        { key: '85 Years and Older', name: '85 Years and Older'},
    ]

    const isAgeSelected = (age) => (
        selectedAges.includes()
    )

    const filterByDemographic = (demographic, data) => (
        demographic === 'age breakdown'
            ? data.filter((d) => d.category === demographic)
                : demographic === 'age groups'  
                    ? data.filter((d) => d.category === demographic) 
                    : demographic === 'pop 18+' ?
                        data.filter((d) => d.category === demographic)
                        : data.filter((d) => d.category === demographic));


    useEffect(() => {
        const data = ageData;
        setSelectedAges(filterByDemographic(selectedDemographic, data));
    }, [selectedDemographic]);


  return (
    <>
        <ColGrid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } marginTop="mt-8" gapX="gap-x-6" gapY="gap-y-6">
            <Card hFull={true}>
                <div className="hidden sm:block">
                    <Flex spaceX="space-x-4" justifyContent="justify-start" alignItems="items-center">
                        <Title truncate={true}>Population by Age Bracket</Title>
                        <MultiSelectBox
                            onValueChange={ (value) => setSelectedDemographic(value) }
                            placeholder="Age Breakdown"
                            maxWidth="max-w-xs"
                        >
                            { filter.map((f) => (
                                <MultiSelectBoxItem
                                    key={ f.key }
                                    value={ f.key }
                                    text={ f.name }
                                />
                            )) }
                        </MultiSelectBox>
                    </Flex>
                </div>

                <ColGrid numColsLg={ 1 } marginTop="mt-8" gapX="gap-x-14" gapY="gap-y-10">
                    <Flex>
                    {selectedDemographic === 'age breakdown' ?                     
                        <AreaChart
                            data={ selectedAges }
                            categories={['Under 10', '10 - 19 Years Old', '20 - 24 Years Old', '25 - 34 Years Old', 
                                '35 - 44 Years Old', '45 - 54 Years Old', '55 - 64 Years Old', '65 - 74 Years Old', 
                                '75 - 84 Years Old', '85 Years and Older']}
                            dataKey="year"
                            // valueFormatter={ valueFormatter }
                            height="h-96"
                        /> : selectedDemographic === 'age groups' ?
                        <BarChart 
                            data={ selectedAges }
                            categories={['age']}
                            dataKey='name'
                        /> : 
                        <BarChart //Makes this time series area chart (pop 18+ and pop 65+)
                            data={ selectedAges }
                            categories={['males', 'females']}
                            dataKey='name'
                            colors={ [ 'violet', 'fuchsia'] }
                            stack={ true }
                        />
                        }       
                    </Flex>
                        
                  
                    

                    {/* <Col numColSpan={ 1 } numColSpanLg={ 2 }>
                        <Flex>
                            <Text truncate={true}>
                                <Bold>Demographic</Bold>
                            </Text>
                            <Text>
                                <Bold>Number of People </Bold>
                            </Text>
                        </Flex>
                        <div className="hidden sm:block">
                            <List marginTop="mt-2">
                                { selectedAges.map((city) => (
                                    <ListItem key={ city.name } >
                                        <Text truncate={ true }> { city.name } </Text>
                                        <div>
                                            <Flex justifyContent="justify-end" spaceX="space-x-4">
                                                <Text color={ city.status } truncate={true}>
                                                    { city.age }
                                                </Text>
                                            </Flex>
                                        </div>
                                    </ListItem>
                                )) }
                            </List>
                        </div>
                    </Col> */}
                </ColGrid>
            </Card>
        </ColGrid>
    </>
  )
}

export default AgesBreakdown

// const ageData = [
//     {
//         name: 'Under 9',
//         category: 'age breakdown',
//         age: data[buffer][0].DP05_0005E + data[buffer][0].DP05_0006E
//     },
//     {
//         name: '10 - 19',
//         category: 'age breakdown',
//         age: data[buffer][0].DP05_0007E + data[buffer][0].DP05_0008E
//     },
//     {
//         name: '20 - 24',
//         category: 'age breakdown',
//         age: data[buffer][0].DP05_0009E
//     },
//     {
//         name: '25 - 34',
//         category: 'age breakdown',
//         age: data[buffer][0].DP05_0010E
//     },
//     {
//         name: '35 - 44',
//         category: 'age breakdown',
//         age: data[buffer][0].DP05_0011E
//     },
//     {
//         name: '45 - 54',
//         category: 'age breakdown',
//         age: data[buffer][0].DP05_0012E
//     },
//     {
//         name: '55 - 59',
//         category: 'age breakdown',
//         age: data[buffer][0].DP05_0013E
//     },
//     {
//         name: '60 - 64',
//         category: 'age breakdown',
//         age: data[buffer][0].DP05_0014E
//     },
//     {
//         name: '65 - 74',
//         category: 'age breakdown',
//         age: data[buffer][0].DP05_0015E
//     },
//     {
//         name: '75 and Up',
//         category: 'age breakdown',
//         age: data[buffer][0].DP05_0016E + data[buffer][0].DP05_0017E
//     },
//     {
//         name: 'Population Under 18',
//         category: 'age groups',
//         age: data[buffer][0].DP05_0019E
//     },
//     {
//         name: 'Population 18 and Over',
//         category: 'age groups',
//         age: data[buffer][0].DP05_0021E 
//     },
//     {
//         name: 'Population 21 and Over',
//         category: 'age groups',
//         age: data[buffer][0].DP05_0022E 
//     },
//     {
//         name: 'Population 65 and Over',
//         category: 'age groups',
//         age: data[buffer][0].DP05_0024E 
//     },
//     {
//         name: 'Population 18+',
//         category: 'pop 18+',
//         males: data[buffer][0].DP05_0026E, 
//         females: data[buffer][0].DP05_0027E 
//     },
//     {
//         name: 'Population 65+',
//         category: 'age groups by sex',
//         males: data[buffer][0].DP05_0030E,
//         females: data[buffer][0].DP05_0031E 
//     },
// ]

// const filterByDemographic = (demographic, data) => (
//     demographic === 'age breakdown'
//         ? data.filter((d) => d.category === demographic)
//             : demographic === 'age groups'  
//                 ? data.filter((d) => d.category === demographic) 
//                 : demographic === 'pop 18+' ?
//                     data.filter((d) => d.category === demographic)
//                     : data.filter((d) => d.category === demographic));