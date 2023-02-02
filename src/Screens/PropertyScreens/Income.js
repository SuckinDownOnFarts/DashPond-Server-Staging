import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';
import { AreaChart, Icon, Toggle, ToggleItem, Card, Title, Text, Tab, TabList, ColGrid, Block, Metric, BadgeDelta, DeltaType, Dropdown, DropdownItem, Flex, MultiSelectBox,
  MultiSelectBoxItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, ProgressBar } from "@tremor/react";

import api from '../../api/axios';
import { kpiData, performance, salesPeople } from '../../data/Data';

const Income = () => {

  const { id } = useParams();

  const incomePath = generatePath('/income/:id', {
    id: id
  })

  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [selectedView, setSelectedView] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedNames, setSelectedNames] = useState([]);
  const [selectedKpi, setSelectedKpi] = useState('Sales');

  const isSalesPersonSelected = (salesPerson) => (
      (salesPerson.status === selectedStatus || selectedStatus === 'all')
          && (selectedNames.includes(salesPerson.name) || selectedNames.length === 0)
  );

  useEffect(() => {
    const fetchIncomeData = async () => {
      try {
        const response = await api.get(incomePath);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers); 
        } else { 
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchIncomeData();
  }, [])

  return (
    <main className='p-10'>
      <Title>Income and Economic Insights</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text> 

      <TabList defaultValue={ 1 } handleSelect={ (value) => setSelectedView(value) } marginTop="mt-6">
        <Tab value={ 1 } text="Overview" />
        <Tab value={ 2 } text="Tables" />
      </TabList>

      { selectedView === 1 ? (
        <>
          <ColGrid numColsMd={ 2 } numColsLg={ 3 } marginTop="mt-6" gapX="gap-x-6" gapY="gap-y-6">
            { kpiData.map((item) => (
                <Card key={ item.title }>
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
            )) }
          </ColGrid>

          <Block marginTop="mt-6">
          <Card>
            <div className="md:flex justify-between">
                <Block>
                    <Flex justifyContent="justify-start" spaceX="space-x-0.5" alignItems="items-center">
                        <Title> Performance History </Title>
                        {/* <Icon
                            // icon={ InformationCircleIcon }
                            variant="simple"
                            tooltip="Shows day-over-day (%) changes of past performance"
                        /> */}
                    </Flex>
                    <Text> Daily increase or decrease per domain </Text>
                </Block>
                <div className="mt-6 md:mt-0">
                    <Toggle
                        color="zinc"
                        defaultValue={ selectedKpi }
                        handleSelect={ (value) => setSelectedKpi(value) }
                    >
                        <ToggleItem value="Sales" text="Sales" />
                        <ToggleItem value="Profit" text="Profit" />
                        <ToggleItem value="Customers" text="Customers" />
                    </Toggle>
                </div>
            </div>
             <AreaChart
                data={ performance }
                dataKey="date"
                categories={ [selectedKpi] }
                colors={ ['blue'] }
                showLegend={ false }
                // valueFormatter={ formatters[selectedKpi] }
                yAxisWidth="w-14"
                height="h-96"
                marginTop="mt-8"
            /> 
        </Card> 
          </Block>
        </>
      ) : (
        <Block marginTop="mt-6">
        <Card>
            <div className="sm:mt-6 hidden sm:flex sm:justify-start sm:space-x-2">
                <MultiSelectBox
                    handleSelect={ (value) => setSelectedNames(value) }
                    placeholder="Select Salespeople"
                    maxWidth="max-w-xs"
                >
                    { salesPeople.map((item) => (
                        <MultiSelectBoxItem key={ item.name } value={ item.name } text={ item.name } />
                    )) }
                </MultiSelectBox>
                <Dropdown
                    maxWidth="max-w-xs"
                    defaultValue="all"
                    handleSelect={ (value) => setSelectedStatus(value) }
                >
                    <DropdownItem value="all" text="All Performances" />
                    <DropdownItem value="overperforming" text="Overperforming" />
                    <DropdownItem value="average" text="Average" />
                    <DropdownItem value="underperforming" text="Underperforming" />
                </Dropdown>
            </div>
            <div className="mt-6 sm:hidden space-y-2 sm:space-y-0">
                <MultiSelectBox
                    handleSelect={ (value) => setSelectedNames(value) }
                    placeholder="Select Salespeople"
                    maxWidth="max-w-full"
                >
                    { salesPeople.map((item) => (
                        <MultiSelectBoxItem key={ item.name } value={ item.name } text={ item.name } />
                    )) }
                </MultiSelectBox>
                <Dropdown
                    maxWidth="max-w-full"
                    defaultValue="all"
                    handleSelect={ (value) => setSelectedStatus(value) }
                >
                    <DropdownItem value="all" text="All Performances" />
                    <DropdownItem value="overperforming" text="Overperforming" />
                    <DropdownItem value="average" text="Average" />
                    <DropdownItem value="underperforming" text="Underperforming" />
                </Dropdown>
            </div>
            
            <Table marginTop="mt-6">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Leads</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Sales ($)</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Quota ($)</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Variance</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Region</TableHeaderCell>
                        <TableHeaderCell textAlignment="text-right">Status</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    { salesPeople.filter((item) => isSalesPersonSelected(item)).map((item) => (
                        <TableRow key={ item.name }>
                            <TableCell>{ item.name }</TableCell>
                            <TableCell textAlignment="text-right">{ item.leads }</TableCell>
                            <TableCell textAlignment="text-right">{ item.sales }</TableCell>
                            <TableCell textAlignment="text-right">{ item.quota }</TableCell>
                            <TableCell textAlignment="text-right">{ item.variance }</TableCell>
                            <TableCell textAlignment="text-right">{ item.region }</TableCell>
                            <TableCell textAlignment="text-right">
                                <BadgeDelta deltaType={ item.deltaType } text={ item.status } size="xs" />
                            </TableCell>
                        </TableRow>
                    )) }
                </TableBody>
            </Table>
        </Card>
        </Block>
      )}
    </main>
  )
}

export default Income