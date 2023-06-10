import React, {useEffect, useState} from 'react';
import { bufferData, ageRanges, medianHHIncomes } from '../../../../data/Data';

import { createStyles, Group, Paper, Text, ThemeIcon, SimpleGrid } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import { useKeyFactsStyles } from './Styles/DPStyles';




const KeyFacts = ({ setSelectedView }) => {

    const [medianHHIncome, setMedianHHIncome] = useState(0);
    const [medianAge, setMedianAge] = useState(0);
    const [incomeLoading, setIncomeLoading] = useState(true);

    const [popBuffer, setPopBuffer] = useState(0);
    const [hhBuffer, setHhBuffer] = useState(0);
    const [hhSizeBuffer, setHhSizeBuffer] = useState(0);
    const [ageBuffer, setAgeBuffer] = useState(0);
    
    //Calculate Median Household Income 
  // useEffect(() => {
  //   const calcHHIncome = async () =>{
  //     try {
  //         const incomePercents = [
  //           data[hhBuffer][0].DP03_0052E / data[hhBuffer][0].DP02_0001E,
  //           data[hhBuffer][0].DP03_0053E / data[hhBuffer][0].DP02_0001E,
  //           data[hhBuffer][0].DP03_0054E / data[hhBuffer][0].DP02_0001E,
  //           data[hhBuffer][0].DP03_0055E / data[hhBuffer][0].DP02_0001E,
  //           data[hhBuffer][0].DP03_0056E / data[hhBuffer][0].DP02_0001E,
  //           data[hhBuffer][0].DP03_0057E / data[hhBuffer][0].DP02_0001E,
  //           data[hhBuffer][0].DP03_0058E / data[hhBuffer][0].DP02_0001E,
  //           data[hhBuffer][0].DP03_0059E / data[hhBuffer][0].DP02_0001E,
  //           data[hhBuffer][0].DP03_0060E / data[hhBuffer][0].DP02_0001E,
  //           data[hhBuffer][0].DP03_0061E / data[hhBuffer][0].DP02_0001E,
  //         ]
  //         let arr = 0
  //         for (let i = 0; i < incomePercents.length; i++) {
  //           arr += incomePercents[i]
  //           if (arr >= .5) {
  //             const range = medianHHIncomes[i][1] - medianHHIncomes[i][0]
  //             const inward = .5 - (arr - incomePercents[i])
  //             const distribution = incomePercents[i] / range

  //             const result = inward / distribution

  //             const medianHHIncomeCalc = (result + medianHHIncomes[i][0]).toFixed(0)
  //             setMedianHHIncome(medianHHIncomeCalc)
  //             break
  //           }
  //         }
  //         setIncomeLoading(false)
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers); 
  //       } else { 
  //         console.log(`Error: ${err.message}`)
  //       }
  //     }
  //   }

  //   calcHHIncome();
  // }, [hhBuffer]);

    //Calculate Median Age 
  // useEffect(() => {
  //   const calcMedianAge = async () =>{
  //     try {
  //         const agePercents = [
  //           data[ageBuffer][0].DP05_0006E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0007E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0008E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0009E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0010E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0011E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0012E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0013E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0014E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0015E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0016E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0017E / data[ageBuffer][0].DP05_0001E,
  //           data[ageBuffer][0].DP05_0005E / data[ageBuffer][0].DP05_0001E,
  //         ]
  //         // console.log(agePercents);
  //         let arr = 0
  //         for (let i = 0; i < agePercents.length; i++) {
  //           arr += agePercents[i]
  //           if (arr >= .5) {
  //             const range = ageRanges[i][1] - ageRanges[i][0]
  //             const inward = .5 - (arr - agePercents[i])
  //             const distribution = agePercents[i] / range
              
  //             const result = inward / distribution
              
  //             const medianAgeCalc = result + ageRanges[i][0]
  //             setMedianAge(medianAgeCalc)
  //             break
  //           }
  //         }
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers); 
  //       } else { 
  //         console.log(`Error: ${err.message}`)
  //       }
  //     }
  //   }

  //   calcMedianAge();
  // }, [ageBuffer]);

    // const topRowData = [
    // {
    //     title: 'Total Population',
    //     metric: data[popBuffer][0].DP05_0001E.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    //     icon: HiUserGroup,
    //     // color: 'indigo',
    //     tab: 2
    // },
    // {
    //     title: 'Median Household Income',
    //     metric: `$ ${medianHHIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    //     icon: FaSearchDollar,
    //     // color: 'green',
    //     tab: 3
    // },
    // {
    //     title: 'Household Size',
    //     metric: (data[hhSizeBuffer][0].DP02_0018E / data[hhSizeBuffer][0].DP02_0001E).toFixed(2),
    //     icon: GiFamilyHouse,
    //     // color: 'amber',
    //     tab: 4
    // },
    // {
    //     title: 'Median Age',
    //     metric: medianAge,
    //     icon: TbOld,
    //     // color: 'fuchsia'
    // },
    // ];
    const bufferFunctions = [
      setPopBuffer,
      setHhBuffer,
      setHhSizeBuffer,
      setAgeBuffer
    ]

    const dData = [
      {
        "title": "Revenue",
        "value": "$13,456",
        "diff": 34
      },
      {
        "title": "Profit",
        "value": "$4,145",
        "diff": -13
      },
      {
        "title": "Coupons usage",
        "value": "745",
        "diff": 18
      },
      {
        "title": "Coupons usage",
        "value": "745",
        "diff": 0
      },
      {
        "title": "Coupons usage",
        "value": "745",
        "diff": 0
      },
      {
        "title": "Coupons usage",
        "value": "745",
        "diff": 0
      },
    ]

    const { classes } = useKeyFactsStyles();
    const stats = dData.map((stat) => {
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

        return (
          <Paper withBorder p="md" radius="md" key={stat.title}>
            <Group position="apart">
              <div>
                <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
                  {stat.title}
                </Text>
                <Text fw={700} fz="xl">
                  {stat.value}
                </Text>
              </div>
              <ThemeIcon
                color="gray"
                variant="light"
                sx={(theme) => ({ color: stat.diff > 0 ? theme.colors.teal[6] : theme.colors.red[6] })}
                size={38}
                radius="md"
              >
                <DiffIcon size="1.8rem" stroke={1.5} />
              </ThemeIcon>
            </Group>
            <Text c="dimmed" fz="sm" mt="md">
              <Text component="span" c={stat.diff > 0 ? 'teal' : 'red'} fw={700}>
                {stat.diff}%
              </Text>{' '}
              {stat.diff > 0 ? 'increase' : 'decrease'} compared to last month
            </Text>
          </Paper>
        );
      });
    
      return (
        <div className={classes.root}>
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {stats}
          </SimpleGrid>
        </div>
      );
    }

export default KeyFacts







          {/* <Grid numColsSm={ 2 } numColsMd={ 2 } numColsLg={ 4 } className="mt-8 gap-x-6 gap-y-6">
            {topRowData.map((item, index) => (
              <Card key={ item.title } >
                <Flex justifyContent='justify-start' className='space-x-4'>
                  <Icon
                    icon={ item.icon }
                    variant="light"
                    size="xl"
                    color={ item.color }
                  />
                  <div className='truncate'>
                    <Text>{ item.title }</Text>
                    {index != 3 ? 
                    <Metric className='truncate'>{ item.metric }</Metric> :
                    <Title className='truncate'>{`${item.metric - (item.metric % 1) } Years - ${((item.metric % 1) * 12).toFixed(0)} Months`}</Title> 
                  }
                  </div>
                </Flex>

                <div className='h-8 mt-4'>
                  <Flex justifyContent='between'>
                    <Button
                        variant='light'
                        size="sm"
                        icon={ HiArrowNarrowRight }
                        iconPosition="right"
                        onClick={() => setSelectedView(item.tab)}
                    > View Details </Button>
                    <Dropdown
                      defaultValue={0}
                      onValueChange={(value) => bufferFunctions[index](value)}
                      placeholder="3 Miles"
                      className="mt-0 max-w-0"
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
                </div>
              </Card>
            ))} */}

            {/* <Card decoration="top" decorationColor="fuchsia">
                <Flex justifyContent='justify-start'>
                  <Icon
                    icon={ TbOld }
                    variant="light"
                    size="xl"
                    color="fuchsia"
                  />
                  <div className='truncate'>
                    <Text>Median Age</Text>
                    <Title className='truncate'>{`${medianAge - (medianAge % 1) } Years and ${((medianAge % 1) * 12).toFixed(0)} Months`}</Title>
                  </div>
                </Flex>
                <div>
                  <Button
                      variant='light'
                      size="sm"
                      text="View details"
                      icon={ HiArrowNarrowRight }
                      iconPosition="right"
                  />
                </div>
              </Card> */}
          {/* </Grid> */}