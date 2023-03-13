import React, { useEffect, useState } from 'react';
import { Card, Col, LineChart, Dropdown, DropdownItem, Flex, List, ListItem, Text, Title, Bold, ColGrid, Color, BarChart, 
  MultiSelectBox, MultiSelectBoxItem } from '@tremor/react';


const MalesFemales = ({ data, timeData }) => {

  const [buffer, setBuffer] = useState(0);

  const ageData = [
      // {
      //     year: '2012',
      //     'Total Population (Males)': (timeData[buffer][0].DP05_0002E - ),
      //     'Total Population (Females)': timeData[buffer][0].DP05_0003E,
      // },
      {
          year: '2013',
          'Total Population (Males)': ((timeData[buffer][1].DP05_0002E - timeData[buffer][0].DP05_0002E) / timeData[buffer][0].DP05_0002E) * 100,
          'Total Population (Females)': ((timeData[buffer][1].DP05_0003E - timeData[buffer][0].DP05_0003E) / timeData[buffer][0].DP05_0003E) * 100,
      },
      {
          year: '2014',
          'Total Population (Males)': ((timeData[buffer][2].DP05_0002E - timeData[buffer][1].DP05_0002E) / timeData[buffer][1].DP05_0002E) * 100,
          'Total Population (Females)': ((timeData[buffer][2].DP05_0003E - timeData[buffer][1].DP05_0003E) / timeData[buffer][1].DP05_0003E) * 100,
      },
      {
          year: '2015',
          'Total Population (Males)': ((timeData[buffer][3].DP05_0002E - timeData[buffer][2].DP05_0002E) / timeData[buffer][2].DP05_0002E) * 100,
          'Total Population (Females)': ((timeData[buffer][3].DP05_0003E - timeData[buffer][2].DP05_0003E) / timeData[buffer][3].DP05_0003E) * 100,
      },
      {
          year: '2016',
          'Total Population (Males)': ((timeData[buffer][4].DP05_0002E - timeData[buffer][3].DP05_0002E) / timeData[buffer][3].DP05_0002E) * 100,
          'Total Population (Females)': ((timeData[buffer][4].DP05_0003E - timeData[buffer][3].DP05_0003E) / timeData[buffer][3].DP05_0003E) * 100,
      },
      {
          year: '2017',
          'Total Population (Males)': ((timeData[buffer][5].DP05_0002E - timeData[buffer][4].DP05_0002E) / timeData[buffer][4].DP05_0002E) * 100,
          'Total Population (Females)': ((timeData[buffer][5].DP05_0003E - timeData[buffer][4].DP05_0003E) / timeData[buffer][4].DP05_0003E) * 100,
      },
      {
          year: '2018',
          'Total Population (Males)': ((timeData[buffer][6].DP05_0002E - timeData[buffer][5].DP05_0002E) / timeData[buffer][5].DP05_0002E) * 100,
          'Total Population (Females)': ((timeData[buffer][6].DP05_0003E - timeData[buffer][5].DP05_0003E) / timeData[buffer][5].DP05_0003E) * 100,
      },
      {
          year: '2019',
          'Total Population (Males)': ((timeData[buffer][7].DP05_0002E - timeData[buffer][6].DP05_0002E) / timeData[buffer][6].DP05_0002E) * 100,
          'Total Population (Females)': ((timeData[buffer][7].DP05_0003E - timeData[buffer][6].DP05_0003E) / timeData[buffer][6].DP05_0003E) * 100,
      },
      {
          year: '2020',
          'Total Population (Males)': ((data[buffer][0].DP05_0002E - timeData[buffer][7].DP05_0002E) / timeData[buffer][7].DP05_0002E) * 100,
          'Total Population (Females)': ((data[buffer][0].DP05_0003E - timeData[buffer][7].DP05_0003E) / timeData[buffer][7].DP05_0003E) * 100,
      },
      {
          year: '2021',
          'Total Population (Males)': ((timeData[buffer][8].DP05_0002E - data[buffer][0].DP05_0002E) / data[buffer][0].DP05_0002E) * 100,
          'Total Population (Females)': ((timeData[buffer][8].DP05_0003E - data[buffer][0].DP05_0003E) / data[buffer][0].DP05_0003E) * 100,
      },
  ]

  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedDemographic, setSelectedDemographic] = useState('age breakdown');

  const filter = [
      { key: 'Total Population (Males)', name: 'Total Population (Males)' },
      { key: 'Total Population (Females)', name: 'Total Population (Females)' },
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
      <ColGrid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } marginTop="mt-8" gapX="gap-x-6" gapY="gap-y-6">
          <Card hFull={true}>
              <div className="hidden sm:block">
                  <Flex spaceX="space-x-4" justifyContent="justify-start" alignItems="items-center">
                      <Title truncate={true}>Growth Rate Males vs Females</Title>
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
                      <LineChart
                          data={ ageData }
                          categories={['Total Population (Females)', 'Total Population (Males)']}
                          colors={['pink', 'blue']}
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

export default MalesFemales