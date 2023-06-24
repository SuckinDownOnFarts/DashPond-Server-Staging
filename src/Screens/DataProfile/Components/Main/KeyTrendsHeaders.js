import React, { useState } from 'react';
import { bufferData } from '../../../../data/Data';
import { Group, Paper, Text, ThemeIcon, SimpleGrid } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import { useKeyFactsStyles } from './Styles/DPStyles';

const KeyFacts = ({ data }) => {

    const [popBuffer, setPopBuffer] = useState(0);
    const [hhBuffer, setHhBuffer] = useState(0);
    const [hhSizeBuffer, setHhSizeBuffer] = useState(0);
    const [ageBuffer, setAgeBuffer] = useState(0);

    const dData = [
      {
        "title": "Population",
        "value": data[0][0][0],
        "diff": 34
      },
      {
        "title": "Median Age",
        "value": data[0][0][1],
        "diff": -13
      },
      {
        "title": "Average Number in Households",
        "value": data[0][0][2],
        "diff": 18
      },
      {
        "title": "Average Household Income",
        "value": `$ ${data[0][0][3]}`,
        "diff": 18
      },
      {
        "title": "Unemployment Rate",
        "value": data[0][0][4],
        "diff": 18
      },
      {
        "title": "Percent of College Graduates",
        "value": data[0][0][5],
        "diff": 18
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
              {stat.diff > 0 ? 'increase' : 'decrease'} compared to last year
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