import React, { useEffect, useState } from 'react';
import { UnstyledButton, Text, Paper, Group } from '@mantine/core';
import { IconCoins, IconCake, IconUserPlus, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { bufferData } from '../../../../data/Data';
import { useEduEmpStyles } from './Styles/DPStyles';

const EmploymentFacts = ({ data }) => {
    const { classes } = useEduEmpStyles();
    const [date, setDate] = useState(new Date(2021, 9, 24));
    const [index, setIndex] = useState(9);
    const [disableUp, setDisableUp] = useState(false);
    const [disableDown, setDisableDown] = useState(false);
    const [eduBuffer, setEduBuffer] = useState(0);
    const [empBuffer, setEmpBuffer] = useState(0);

    const cardData = [
        { icon: IconUserPlus, label: 'Population', popData: data[1] },
        { icon: IconCoins, label: 'Median HouseHold Income' },
        { icon: IconCake, label: 'Median Age' },
    ];

    const handleYearUp = () => {
        if (index <= 9) {
            setDate((current) => dayjs(current).add(1, 'year').toDate());
            setIndex((oldIndex) => oldIndex + 1);
        } 
    }

    const handleYearDown = () => {
        if (index > 0) {
            setDate((current) => dayjs(current).subtract(1, 'year').toDate());
            setIndex((oldIndex) => oldIndex - 1);
        }
    }

    useEffect(() => {
        const handleIndexConstraints = () => {
            if (index === 9) {
                setDisableUp(true)
            } else if (index === 0) {
                setDisableDown(true)
            } else {
                setDisableUp(false);
                setDisableDown(false);
            }
        }
        handleIndexConstraints()
    }, [index])

    const stats = cardData.map((stat) => (
        <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={stat.label}>
          <stat.icon size={32} className={classes.icon} stroke={1.5} />
          <div>
            <Text className={classes.label}>{stat.label}</Text>
            <Text fz="xs" className={classes.count}>
              <span className={classes.value}>{data[1][index]}</span>
            </Text>
          </div>
        </Paper>
      ));

    return (
        <div className={classes.root}>
            <div className={classes.controls}>
                <UnstyledButton
                    className={classes.control}
                    onClick={handleYearUp}
                    disabled={disableUp ? true : false}
                >
                    <IconChevronUp size="1rem" className={classes.controlIcon} stroke={1.5} />
                </UnstyledButton>

                <div className={classes.date}>
                    <Text className={classes.day}>{dayjs(date).format('YYYY')}</Text>
                    {/* <Text className={classes.month}>{dayjs(date).format('MMMM')}</Text> */}
                </div>

                <UnstyledButton
                    className={classes.control}
                    onClick={handleYearDown}
                >
                    <IconChevronDown size="1rem" className={classes.controlIcon} stroke={1.5} />
                </UnstyledButton>
            </div>
            <Group sx={{ flex: 1 }}>{stats}</Group>
        </div>
    )
}

export default EmploymentFacts



    // const educationMetrics = [
    //     {
    //         title: 'No High School Diploma',
    //         metric: ((data[eduBuffer][0].DP02_0061E + data[eduBuffer][0].DP02_0060E) / data[eduBuffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         amount: data[eduBuffer][0].DP02_0061E + data[eduBuffer][0].DP02_0060E,
    //         icon: GiDiploma,
    //         tooltip: 'Number of people who have not completed high school' 
    //     },
    //     {
    //         title: 'High School Graduate',
    //         metric: (data[eduBuffer][0].DP02_0062E / data[eduBuffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         amount: data[eduBuffer][0].DP02_0062E,
    //         icon: IoSchoolOutline,
    //         tooltip: 'Number of people who have not completed high school' 
    //     },
    //     {
    //         title: 'Some College',
    //         metric: (data[eduBuffer][0].DP02_0063E / data[eduBuffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         amount: data[eduBuffer][0].DP02_0063E,
    //         icon: HiBuildingLibrary,
    //         tooltip: 'Number of people who have not completed high school' 
    //     },
    //     {
    //         title: "Associate's Degree",
    //         metric: (data[eduBuffer][0].DP02_0064E / data[eduBuffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         amount: data[eduBuffer][0].DP02_0064E,
    //         icon: MdBusinessCenter,
    //         tooltip: 'Number of people who have not completed high school' 
    //     },
    //     {
    //         title: "Grad/Master's/Bachelor's Degree",
    //         metric: (data[eduBuffer][0].DP02_0068E / data[eduBuffer][0].DP02_0059E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         amount: data[eduBuffer][0].DP02_0068E,
    //         icon: IoSchool,
    //         tooltip: 'Number of people who have not completed high school' 
    //     },
    // ];

    // const unemploymentRate = data[empBuffer][0].DP03_0005E/data[empBuffer][0].DP03_0004E

    // const employmentInsights = [
    //     {
    //         title: 'Civilian Labor Force',
    //         metric: data[empBuffer][0].DP03_0003E.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    //         icon: FaPeopleCarry,
    //         tooltip: 'Number of people who have not completed high school' 
    //     },
    //     {
    //         title: 'Total Employees',
    //         metric: data[empBuffer][0].DP03_0004E.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    //         icon: IoHammerSharp,
    //         tooltip: 'Number of people who have not completed high school' 
    //     },
    //     {
    //         title: 'Percentage of Women in Labor Force',
    //         metric: (data[empBuffer][0].DP03_0012E / data[empBuffer][0].DP03_0003E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         icon: IoWomanSharp,
    //         tooltip: 'Number of people who have not completed high school' 
    //     },
    //     {
    //         title: 'Percentage of Men in Labor Force',
    //         metric: ((data[empBuffer][0].DP03_0003E - data[empBuffer][0].DP03_0012E) / data[empBuffer][0].DP03_0003E).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         icon: IoManSharp,
    //         tooltip: 'Number of people who have not completed high school' 
    //     },
    //     {
    //         title: 'Unemployment Rate',
    //         metric: unemploymentRate.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         icon: BsGraphDown,
    //         tooltip: 'Number of people who have not completed high school' 
    //     },   
    // ];



        // <>
        //     <Grid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 2 } className="mt-8 gap-x-6 gap-y-6" >

        //         <Card>
        //         <Flex className='justify-between'>
        //                 <Title>Key Education Facts</Title>
        //                 <div className='flex flex-row space-x-2'>
        //                     <Button
        //                         variant='light'
        //                         size="sm"
        //                         text="View details"
        //                         // icon={ HiArrowNarrowRight }
        //                         iconPosition="right"
        //                         onClick={() => setSelectedView(5)}
        //                     > View Details </Button>
        //                     <Dropdown
        //                         defaultValue={0}
        //                         onValueChange={(value) => setEduBuffer(value)}
        //                         placeholder="3 Mile"
        //                         className="mt-0 max-w-0"
        //                     >
        //                         {bufferData.map((item) => (
        //                             <DropdownItem
        //                                 key={item.bufferName}
        //                                 value={item.value}
        //                                 text={item.bufferName}
        //                             />
        //                         ))}
        //                     </Dropdown>
        //                 </div>
        //             </Flex>

        //             <List className="mt-6">
        //                 {educationMetrics.map((item) => (
        //                     <ListItem key={ item.title }>
        //                         <Flex className='justify-start truncate space-x-4'>
        //                             <Icon
        //                                 icon={ item.icon }
        //                                 variant="light"
        //                                 size="xl"
        //                                 color={ item.color }
        //                             />
        //                             <div className='truncate'>
        //                                 <div className='flex flex-row'>
        //                                     <Text>{ item.title }</Text>
        //                                     <Icon 
        //                                         icon={AiOutlineInfoCircle}
        //                                         className='w-6 h-6 pb-4 text-slate-600 -ml-1'
        //                                         tooltip={item.tooltip}
        //                                     />
        //                                 </div>
                                        
        //                                 <Metric className='truncate'>{ item.metric }</Metric>
        //                             </div>
        //                         </Flex>
        //                         <Text>Population Over 25: <Bold>{ item.amount }</Bold></Text>
        //                     </ListItem>
        //                 ))}
        //             </List>
        //         </Card>

        //         {/* ********************************************************Employment Facts**************************************************** */}
        //         <Card>
        //             <Flex className='justify-between'>
        //                 <Title>Key Employment Facts</Title>
        //                 <div className='flex flex-row space-x-2'>
        //                     <Button
        //                         variant='light'
        //                         size="sm"
        //                         text="View details"
        //                         // icon={ HiArrowNarrowRight }
        //                         iconPosition="right"
        //                         onClick={() => setSelectedView(5)}
        //                     > View Details </Button>
        //                     <Dropdown
        //                         defaultValue={0}
        //                         onValueChange={(value) => setEmpBuffer(value)}
        //                         placeholder="3 Mile"
        //                         className="mt-0 max-w-0"
        //                     >
        //                         {bufferData.map((item) => (
        //                             <DropdownItem
        //                                 key={item.bufferName}
        //                                 value={item.value}
        //                                 text={item.bufferName}
        //                             />
        //                         ))}
        //                     </Dropdown>
        //                 </div>
        //             </Flex>
                    
        //             <List className="mt-6">
        //                 {employmentInsights.map((item) => (
        //                     <ListItem key={ item.title }>
        //                         <Flex justifyContent='justify-start' className='truncate space-x-4'>
        //                             <Icon
        //                                 icon={ item.icon }
        //                                 variant="light"
        //                                 size="xl"
        //                                 color={ item.color }
        //                             />
        //                             <div className='truncate'>
        //                                 <div className='flex flex-row'>
        //                                     <Text>{ item.title }</Text>
        //                                     <Icon 
        //                                         icon={AiOutlineInfoCircle}
        //                                         className='w-6 h-6 pb-4 text-slate-600 -ml-1'
        //                                         tooltip={item.tooltip}
        //                                     />
        //                                 </div>
        //                                 <Metric className='truncate'>{ item.metric }</Metric>
        //                             </div>
        //                         </Flex>
        //                     </ListItem>
        //                 ))}
        //             </List>
        //         </Card>
        //     </Grid>
        // </>