import React, { useEffect, useState } from 'react';
import { Card, Col, AreaChart, Dropdown, DropdownItem, Flex, List, ListItem, Text, Title, Bold, Grid, Color, BarChart, MultiSelectBox, MultiSelectBoxItem } from '@tremor/react';


const AdditionalAges = ({ data, timeData }) => {


    const [buffer, setBuffer] = useState(0);

    const ageData = [
        {
            year: '2012',
            'Total Population Under 18': timeData[buffer][0].DP05_0024E + timeData[buffer][0].DP05_0023E,
            // 'Population Under 18 (Females)': timeData[buffer][0].DP05_0024E ,
            // 'Population Under 18 (Males)': timeData[buffer][0].DP05_0023E,
            // 'Total Population Over 65': timeData[buffer][0].DP05_0027E + timeData[buffer][0].DP05_0026E,
            // 'Population Over 65 (Females)': timeData[buffer][0].DP05_0027E,
            // 'Population Over 65 (Males)': timeData[buffer][0].DP05_0026E,
        },
        {
            year: '2013',
            'Total Population Under 18': timeData[buffer][1].DP05_0024E + timeData[buffer][1].DP05_0023E,
            // 'Population Under 18 (Females)': timeData[buffer][1].DP05_0024E ,
            // 'Population Under 18 (Males)': timeData[buffer][1].DP05_0023E,
            // 'Total Population Over 65': timeData[buffer][1].DP05_0027E + timeData[buffer][1].DP05_0026E,
            // 'Population Over 65 (Females)': timeData[buffer][1].DP05_0027E,
            // 'Population Over 65 (Males)': timeData[buffer][1].DP05_0026E,
        },
        {
            year: '2014',
            'Total Population Under 18': timeData[buffer][2].DP05_0024E + timeData[buffer][2].DP05_0023E,
            // 'Population Under 18 (Females)': timeData[buffer][2].DP05_0024E ,
            // 'Population Under 18 (Males)': timeData[buffer][2].DP05_0023E,
            // 'Total Population Over 65': timeData[buffer][2].DP05_0027E + timeData[buffer][2].DP05_0026E,
            // 'Population Over 65 (Females)': timeData[buffer][2].DP05_0027E,
            // 'Population Over 65 (Males)': timeData[buffer][2].DP05_0026E,
        },
        {
            year: '2015',
            'Total Population Under 18': timeData[buffer][3].DP05_0024E + timeData[buffer][3].DP05_0023E,
            // 'Population Under 18 (Females)': timeData[buffer][3].DP05_0024E ,
            // 'Population Under 18 (Males)': timeData[buffer][3].DP05_0023E,
            // 'Total Population Over 65': timeData[buffer][3].DP05_0027E + timeData[buffer][3].DP05_0026E,
            // 'Population Over 65 (Females)': timeData[buffer][3].DP05_0027E,
            // 'Population Over 65 (Males)': timeData[buffer][3].DP05_0026E,
        },
        {
            year: '2016',
            'Total Population Under 18': timeData[buffer][4].DP05_0024E + timeData[buffer][4].DP05_0023E,
            // 'Population Under 18 (Females)': timeData[buffer][4].DP05_0024E ,
            // 'Population Under 18 (Males)': timeData[buffer][4].DP05_0023E,
            // 'Total Population Over 65': timeData[buffer][4].DP05_0027E + timeData[buffer][4].DP05_0026E,
            // 'Population Over 65 (Females)': timeData[buffer][4].DP05_0027E,
            // 'Population Over 65 (Males)': timeData[buffer][4].DP05_0026E,
        },
        {
            year: '2017',
            'Total Population Under 18': timeData[buffer][5].DP05_0027E + timeData[buffer][5].DP05_0026E,
            // 'Population Under 18 (Females)': timeData[buffer][5].DP05_0027E ,
            // 'Population Under 18 (Males)': timeData[buffer][5].DP05_0026E,
            // 'Total Population Over 65': timeData[buffer][5].DP05_0031E + timeData[buffer][5].DP05_0030E,
            // 'Population Over 65 (Females)': timeData[buffer][5].DP05_0031E,
            // 'Population Over 65 (Males)': timeData[buffer][5].DP05_0030E,
        },
        {
            year: '2018',
            'Total Population Under 18': timeData[buffer][6].DP05_0027E + timeData[buffer][6].DP05_0026E,
            // 'Population Under 18 (Females)': timeData[buffer][6].DP05_0027E ,
            // 'Population Under 18 (Males)': timeData[buffer][6].DP05_0026E,
            // 'Total Population Over 65': timeData[buffer][6].DP05_0031E + timeData[buffer][6].DP05_0030E,
            // 'Population Over 65 (Females)': timeData[buffer][6].DP05_0031E,
            // 'Population Over 65 (Males)': timeData[buffer][6].DP05_0030E,
        },
        {
            year: '2019',
            'Total Population Under 18': timeData[buffer][7].DP05_0027E + timeData[buffer][7].DP05_0026E,
            // 'Population Under 18 (Females)': timeData[buffer][7].DP05_0027E ,
            // 'Population Under 18 (Males)': timeData[buffer][7].DP05_0026E,
            // 'Total Population Over 65': timeData[buffer][7].DP05_0031E + timeData[buffer][7].DP05_0030E,
            // 'Population Over 65 (Females)': timeData[buffer][7].DP05_0031E,
            // 'Population Over 65 (Males)': timeData[buffer][7].DP05_0030E,
        },
        {
            year: '2020',
            'Total Population Under 18': data[buffer][0].DP05_0027E + data[buffer][0].DP05_0026E,
            // 'Population Under 18 (Females)': data[buffer][0].DP05_0027E ,
            // 'Population Under 18 (Males)': data[buffer][0].DP05_0026E,
            // 'Total Population Over 65': data[buffer][0].DP05_0031E + data[buffer][0].DP05_0030E,
            // 'Population Over 65 (Females)': data[buffer][0].DP05_0031E,
            // 'Population Over 65 (Males)': data[buffer][0].DP05_0030E,
        },
        {
            year: '2021',
            'Total Population Under 18': timeData[buffer][8].DP05_0027E + timeData[buffer][8].DP05_0026E,
            // 'Population Under 18 (Females)': timeData[buffer][8].DP05_0027E ,
            // 'Population Under 18 (Males)': timeData[buffer][8].DP05_0026E,
            // 'Total Population Over 65': timeData[buffer][8].DP05_0031E + timeData[buffer][8].DP05_0030E,
            // 'Population Over 65 (Females)': timeData[buffer][8].DP05_0031E,
            // 'Population Over 65 (Males)': timeData[buffer][8].DP05_0030E,
        },
    ]

    const [selectedAges, setSelectedAges] = useState([]);
    const [selectedDemographic, setSelectedDemographic] = useState('age breakdown');

    const filter = [
        { key: 'Total Population Under 18', name: 'Total Population Under 18' },
        { key: 'Population Under 18 (Females)', name: 'Population Under 18 (Females)' },
        { key: 'Population Under 18 (Males)', name: 'Population Under 18 (Males)'},
        { key: 'Total Population Over 65', name: 'Total Population Over 65'},
        { key: 'Population Over 65 (Females)', name: 'Population Over 65 (Females)'},
        { key: 'Population Over 65 (Males)', name: 'Population Over 65 (Males)'},
    ]

    // const isAgeSelected = (age) => (
    //     selectedAges.includes()
    // )

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
        <Grid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } className="mt-8 gap-x-6 gap-y-6">
            <Card className='h-full'>
                <div className="hidden sm:block">
                    <Flex justifyContent="justify-start" alignItems="items-center" className='space-x-4'>
                        <Title className='truncate'>Population by Age Bracket</Title>
                        <MultiSelectBox
                            onValueChange={ (value) => setSelectedDemographic(value) }
                            placeholder="Age Breakdown"
                            className="max-w-xs"
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

                <Grid numColsLg={ 1 } className="mt-8 gap-x-14 gap-y-10">
                    <Flex>
                    {selectedDemographic === 'age breakdown' ?                     
                        <AreaChart
                            data={ ageData }
                            categories={['Total Population Under 18', 'Population Under 18 (Females)', 'Population Under 18 (Males)', 'Total Population Over 65', 
                            'Population Over 65 (Females)', 'Population Over 65 (Males)']}
                            index="year"
                            // valueFormatter={ valueFormatter }
                            className='h-96'
                        /> : selectedDemographic === 'age groups' ?
                        <BarChart 
                            data={ selectedAges }
                            categories={['age']}
                            index='name'
                        /> : 
                        <BarChart //Makes this time series area chart (pop 18+ and pop 65+)
                            data={ selectedAges }
                            categories={['males', 'females']}
                            index='name'
                            colors={ [ 'violet', 'fuchsia'] }
                            stack={ true }
                        />
                        }       
                    </Flex>
                </Grid>
            </Card>
        </Grid>
    </>
  )
}

export default AdditionalAges