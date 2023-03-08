import React, {useState} from 'react';
import { AreaChart, Icon, Toggle, ToggleItem, Card, Title, Text, Tab, TabList, ColGrid, Block, Metric, BadgeDelta, Divider, DeltaType, Dropdown, DropdownItem, Flex, MultiSelectBox,
    MultiSelectBoxItem, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, ProgressBar } from "@tremor/react";
import { performance, salesPeople } from '../../../data/Data';


const AgeFacts = () => {

    const [selectedStatus, setSelectedStatus] = useState('all');
    const [selectedNames, setSelectedNames] = useState([]);
    const [selectedKpi, setSelectedKpi] = useState('Sales');
  
    const isSalesPersonSelected = (salesPerson) => (
      (salesPerson.status === selectedStatus || selectedStatus === 'all')
        && (selectedNames.includes(salesPerson.name) || selectedNames.length === 0)
    );

  return (
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
                {/* <div className="mt-6 sm:hidden space-y-2 sm:space-y-0">
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
                </div> */}
                
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
  )
}

export default AgeFacts