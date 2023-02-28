import React, { useEffect, useState } from 'react';
import { useParams, generatePath, useOutletContext } from 'react-router-dom';
import { AreaChart, Icon, Toggle, ToggleItem, Card, Title, Text, Tab, TabList, ColGrid, Block, Metric, BadgeDelta, Divider, DeltaType, Dropdown, DropdownItem, Flex, MultiSelectBox,
  MultiSelectBoxItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, ProgressBar } from "@tremor/react";

import api from '../../api/axios';
import { performance, salesPeople } from '../../data/Data';
import KeyFacts from '../../components/Dashboards/Overview/KeyFacts';
import EmploymentFacts from '../../components/Dashboards/Overview/EmploymentFacts';
import EducationFacts from '../../components/Dashboards/Overview/EducationFacts';


const Overview = () => {

  const { id } = useParams();
  const overviewPath = generatePath('/overview/:id', {
    id: id
  });

  const addressPath = generatePath('/address/:id', {
    id: id
  });

  const [data, setData] = useState([]); //Stays
  const [pLoading, setPLoading] = useState(true); //Stays
  const [address, setAddress] = useState(); //Stays
  const [aLoading, setALoading ] = useState(true); //Stays
  const [selectedView, setSelectedView] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedNames, setSelectedNames] = useState([]);
  const [selectedKpi, setSelectedKpi] = useState('Sales');
  const [employmentBuffer, setEmploymentBuffer] = useState(0);

  const isSalesPersonSelected = (salesPerson) => (
    (salesPerson.status === selectedStatus || selectedStatus === 'all')
      && (selectedNames.includes(salesPerson.name) || selectedNames.length === 0)
  );


  //Fetch the census data property results 
  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
          const response = await api.get(overviewPath);
          setData(response.data);
          setPLoading(false);
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

    fetchOverviewData();
  }, [])


  //Fetch property address  
  useEffect(() => {
    const fetchAddress = async () => {
      try {
          const response = await api.get(addressPath);
          setAddress(response.data);
          setALoading(false);
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

    fetchAddress();
  }, [])
  

  return (
    <main className='md:px-16 sm:px-2 xs:px-4 my-8'>
      <Block>
        {!aLoading ? <Metric marginTop='mt-6'>{address[0].address}</Metric> : <></>}
        <Title marginTop='mt-2'>Demographic Insights</Title>
        {/* <Text>A complete overview of the key demographic insights from the areas surrounding .</Text>  */}
      </Block>
      

      <TabList defaultValue={ 1 } onValueChange={ (value) => setSelectedView(value) } marginTop="mt-16">
        <Tab value={ 1 } text="At a Glance" />
        <Tab value={ 2 } text="Population Insights" />
        <Tab value={ 3 } text="Economic Insights" />
        <Tab value={ 4 } text="Housing Insights" />
        <Tab value={ 5 } text="Employement Insights" />
        <Tab value={ 6 } text="Listing Information" />
        <Tab value={ 7 } text="Map Views" />
      </TabList>

      { selectedView === 1 ? (
        <>
          <Block textAlignment="text-center" marginTop='mt-8'>
            <Metric>Key Facts</Metric>
          </Block>
          {!pLoading ? 
            <KeyFacts 
              data={data}
            /> : <></>}

            {!pLoading ? 
            <EmploymentFacts 
              data={data}
            /> : <></>}

          {!pLoading ? 
            <EducationFacts 
              data={data}
            /> : <></>}
        </>
      ) : (
        <>
        <Block marginTop="mt-6">
          <Card>
            <div className="sm:mt-6 hidden sm:flex sm:justify-start sm:space-x-2">
                <MultiSelectBox
                    onValueChange={ (value) => setSelectedNames(value) }
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
                    onValueChange={ (value) => setSelectedStatus(value) }
                >
                    <DropdownItem value="all" text="All Performances" />
                    <DropdownItem value="overperforming" text="Overperforming" />
                    <DropdownItem value="average" text="Average" />
                    <DropdownItem value="underperforming" text="Underperforming" />
                </Dropdown>
            </div>
            <div className="mt-6 sm:hidden space-y-2 sm:space-y-0">
                <MultiSelectBox
                    onValueChange={ (value) => setSelectedNames(value) }
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
                    onValueChange={ (value) => setSelectedStatus(value) }
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
                      onValueChange={ (value) => setSelectedKpi(value) }
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
      )}
    </main>
  )
}

export default Overview