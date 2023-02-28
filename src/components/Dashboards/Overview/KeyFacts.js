import React, {useEffect, useState} from 'react';
import { generatePath } from 'react-router-dom';
import { Card, Text, Block, Metric, BadgeDelta, Icon, Flex, ProgressBar, Footer, Button } from "@tremor/react";
import { HiUserGroup } from 'react-icons/hi2';
import { FaSearchDollar } from 'react-icons/fa';
import { GiFamilyHouse } from 'react-icons/gi';
import { TbOld } from 'react-icons/tb';


const KeyFacts = ({ data, buffer}) => {

    


    const [mALoading, setMALoading] = useState(true);
    const [medianHHIncome, setMedianHHIncome] = useState(0)
    const [medianAge, setMedianAge] = useState(0)
    const [incomeLoading, setIncomeLoading] = useState(true)

    const medianHHIncomes = [
        [0, 9999],
        [10000, 14999],
        [15000, 24999],
        [25000, 34999],
        [35000, 49999],
        [50000, 74999],
        [75000, 99999],
        [100000, 149999],
        [150000, 199999],
        [200000, 1000000]
      ];
    
      const ageRanges = [
        [0, 4],
        [5, 9],
        [10, 14],
        [15, 19],
        [20, 24],
        [25, 34],
        [35, 44],
        [45, 54],
        [55, 59],
        [60, 64],
        [65, 74], 
        [75, 84],
        [85, 100]
      ]
    
    //Calculate Median Household Income 
  useEffect(() => {
    const calcHHIncome = async () =>{
      try {
          const incomePercents = [
            data[buffer][0].DP03_0052E / data[buffer][0].DP02_0001E,
            data[buffer][0].DP03_0053E / data[buffer][0].DP02_0001E,
            data[buffer][0].DP03_0054E / data[buffer][0].DP02_0001E,
            data[buffer][0].DP03_0055E / data[buffer][0].DP02_0001E,
            data[buffer][0].DP03_0056E / data[buffer][0].DP02_0001E,
            data[buffer][0].DP03_0057E / data[buffer][0].DP02_0001E,
            data[buffer][0].DP03_0058E / data[buffer][0].DP02_0001E,
            data[buffer][0].DP03_0059E / data[buffer][0].DP02_0001E,
            data[buffer][0].DP03_0060E / data[buffer][0].DP02_0001E,
            data[buffer][0].DP03_0061E / data[buffer][0].DP02_0001E,
          ]
          let arr = 0
          for (let i = 0; i < incomePercents.length; i++) {
            arr += incomePercents[i]
            if (arr >= .5) {
              const remainder = arr - .5
              const range = medianHHIncomes[i][1] - medianHHIncomes[i][0]
              const plus = range * remainder
              const medianHHIncomeCalc = (plus + medianHHIncomes[i][0]).toFixed(0)
              setMedianHHIncome(medianHHIncomeCalc)
              break
            }
          }
          setIncomeLoading(false)
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

    calcHHIncome();
  }, [buffer]);

    //Calculate Median Age 
  useEffect(() => {
    const calcMedianAge = async () =>{
      try {
          const agePercents = [
            data[buffer][0].DP05_0005E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0006E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0007E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0008E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0009E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0010E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0011E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0012E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0013E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0014E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0015E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0016E / data[buffer][0].DP05_0001E,
            data[buffer][0].DP05_0017E / data[buffer][0].DP05_0001E,
          ]
          let arr = 0
          for (let i = 0; i < agePercents.length; i++) {
            arr += agePercents[i]
            if (arr >= .5) {
              const remainder = arr - .5
              const range = ageRanges[i][1] - ageRanges[i][0]
              const plus = range * remainder
              const medianAgeCalc = (plus + ageRanges[i][0]).toFixed(0)
              setMedianAge(medianAgeCalc)
              break
            }
          }
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

    calcMedianAge();
  }, [buffer]);

    const topRowData = [
    {
        title: 'Total Population',
        metric: data[buffer][0].DP05_0001E.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        icon: HiUserGroup,
        color: 'indigo'
    },
    {
        title: 'Median Household Income',
        metric: `$ ${medianHHIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
        icon: FaSearchDollar,
        color: 'green'
    },
    {
        title: 'Household Size',
        metric: (data[buffer][0].DP02_0018E / data[buffer][0].DP02_0001E).toFixed(2),
        icon: GiFamilyHouse,
        color: 'amber'
    },
    {
        title: 'Median Age',
        metric: medianAge,
        icon: TbOld,
        color: 'fuchsia'
    },
    ];

    return (
        topRowData.map((item) => (
            <Card key={ item.title } decoration="top" decorationColor={ item.color }>
                <Flex justifyContent='justify-start' spaceX='space-x-4'>
                    <Icon
                        icon={ item.icon }
                        variant="light"
                        size="xl"
                        color={ item.color }
                    />
                    <Block truncate={ true }>
                        <Text>{ item.title }</Text>
                        <Metric truncate={ true }>{ item.metric }</Metric>
                    </Block>
                </Flex>
            </Card>
        ))
    )
}

export default KeyFacts