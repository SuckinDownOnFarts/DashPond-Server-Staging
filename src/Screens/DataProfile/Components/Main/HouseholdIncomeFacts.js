import React, { useEffect, useState } from 'react';
import { generatePath } from 'react-router-dom';
import api from '../../../../api/axios';
import { Text } from '@mantine/core';
import { bufferData } from '../../../../data/Data';
import { useHHIncomeStyles } from './Styles/DPStyles';

const HouseholdIncomeFacts = ({ data }) => {

    const incomesPath = generatePath('/incomes');

    const [buffer, setBuffer] = useState(0);
    const [largestBracket, setLargestBracket] = useState(null);
    const [smallestBracket, setSmallestBracket] = useState(null);
    const [parishes, setParishes] = useState();
    // const [parishSelected, setParishSelected] = useState(county.trimStart());
    const [parishesLoading, setParishesLoading] = useState(true);
    const [incomeData, setIncomeData] = useState();
    const [loading, setLoading] = useState(true);

    //Percentages of Income Bracket Breakdowns used in Table for Property
    // const propIncome = [
    //     {
    //         p1: (data[buffer][0].DP03_0053E + data[buffer][0].DP03_0052E) / data[buffer][0].DP02_0001E,
    //         p2: data[buffer][0].DP03_0054E / data[buffer][0].DP02_0001E,
    //         p3: data[buffer][0].DP03_0055E / data[buffer][0].DP02_0001E,
    //         p4: data[buffer][0].DP03_0056E / data[buffer][0].DP02_0001E,
    //         p5: data[buffer][0].DP03_0057E / data[buffer][0].DP02_0001E,
    //         p6: data[buffer][0].DP03_0058E / data[buffer][0].DP02_0001E,
    //         p7: data[buffer][0].DP03_0059E / data[buffer][0].DP02_0001E,
    //         p8: data[buffer][0].DP03_0060E / data[buffer][0].DP02_0001E,
    //         p9: data[buffer][0].DP03_0061E / data[buffer][0].DP02_0001E,
    //     },
    // ];

    //Local parishes Percantages used in diference calculations
    // let localIncomes = []
    // !loading && parishSelected ? 
    //     localIncomes = [
    //         {
    //             p1: (parseInt(incomeData[2][parishSelected]) + parseInt(incomeData[1][parishSelected])) / parseInt(incomeData[0][parishSelected]),
    //             p2: parseInt(incomeData[3][parishSelected]) / parseInt(incomeData[0][parishSelected]),
    //             p3: parseInt(incomeData[4][parishSelected]) / parseInt(incomeData[0][parishSelected]),
    //             p4: parseInt(incomeData[5][parishSelected]) / parseInt(incomeData[0][parishSelected]),
    //             p5: parseInt(incomeData[6][parishSelected]) / parseInt(incomeData[0][parishSelected]),
    //             p6: parseInt(incomeData[7][parishSelected]) / parseInt(incomeData[0][parishSelected]),
    //             p7: parseInt(incomeData[8][parishSelected]) / parseInt(incomeData[0][parishSelected]),
    //             p8: parseInt(incomeData[9][parishSelected]) / parseInt(incomeData[0][parishSelected]),
    //             p9: parseInt(incomeData[10][parishSelected]) / parseInt(incomeData[0][parishSelected])
    //         }
    //     ]
    // : localIncomes = []


    // let incomeTable = []
    // !loading ? 
    //     incomeTable = [
    //     {
    //         bracket: '<$15,000',
    //         percentage: propIncome[0].p1.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         calc: ((data[buffer][0].DP03_0053E + data[buffer][0].DP03_0052E) / data[buffer][0].DP02_0001E),
    //         localP: localIncomes[0].p1.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         difference: !loading ? (propIncome[0].p1 - localIncomes[0].p1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2})  : 'Select a County to Compare',
    //     },
    //     {
    //         bracket: '$15,000 - $24,999',
    //         percentage: propIncome[0].p2.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         calc: (data[buffer][0].DP03_0054E / data[buffer][0].DP02_0001E),
    //         localP: localIncomes[0].p2.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         difference: !loading ? (propIncome[0].p2 - localIncomes[0].p2).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}) : 'Select a County to Compare',
    //     },
    //     {
    //         bracket: '$25,000 - $34,999',
    //         percentage: propIncome[0].p3.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         calc: (data[buffer][0].DP03_0055E / data[buffer][0].DP02_0001E),
    //         localP: localIncomes[0].p3.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         difference: !loading ? (propIncome[0].p3 - localIncomes[0].p3).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}) : 'Select a County to Compare',
    //     },
    //     {
    //         bracket: '$35,000 - $49,999',
    //         percentage: propIncome[0].p4.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         calc: (data[buffer][0].DP03_0056E / data[buffer][0].DP02_0001E),
    //         localP: localIncomes[0].p4.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         difference: !loading ? (propIncome[0].p4 - localIncomes[0].p4).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}) : 'Select a County to Compare',
    //     },
    //     {
    //         bracket: '$50,000 - $74,999',
    //         percentage: propIncome[0].p5.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         calc: (data[buffer][0].DP03_0057E / data[buffer][0].DP02_0001E),
    //         localP: localIncomes[0].p5.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         difference: !loading ? (propIncome[0].p5 - localIncomes[0].p5).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}) : 'Select a County to Compare',
    //     },
    //     {
    //         bracket: '$75,000 - $99,999',
    //         percentage: propIncome[0].p6.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         calc: (data[buffer][0].DP03_0058E / data[buffer][0].DP02_0001E),
    //         localP: localIncomes[0].p6.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         difference: !loading ? (propIncome[0].p6 - localIncomes[0].p6).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}) : 'Select a County to Compare',
    //     },
    //     {
    //         bracket: '$100,000 - $149,999',
    //         percentage: propIncome[0].p7.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         calc: (data[buffer][0].DP03_0059E / data[buffer][0].DP02_0001E),
    //         localP: localIncomes[0].p7.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         difference: !loading ? (propIncome[0].p7 - localIncomes[0].p7).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}) : 'Select a County to Compare',
    //     },
    //     {
    //         bracket: '$150,000 - $199,999',
    //         percentage: propIncome[0].p8.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         calc: (data[buffer][0].DP03_0060E / data[buffer][0].DP02_0001E),
    //         localP: localIncomes[0].p8.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         difference: !loading ? (propIncome[0].p8 - localIncomes[0].p8).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}) : 'Select a County to Compare',
    //     },
    //     {
    //         bracket: '$200,000+',
    //         percentage: propIncome[0].p9.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         calc: (data[buffer][0].DP03_0061E / data[buffer][0].DP02_0001E),
    //         localP: localIncomes[0].p9.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
    //         difference: !loading ? (propIncome[0].p9 - localIncomes[0].p9).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}) : 'Select a County to Compare',
    //     },
    // ] : incomeTable = []

    //Calculates the largest income bracket
    // useEffect(() => {
    //     const calcLargest = () => {
    //         if (!loading) {
    //             const largest = Math.max(...incomeTable.map(o => o.calc))
    //             var result = incomeTable.filter(obj => {
    //                 return obj.calc === largest
    //             })
    //             setLargestBracket(result[0].bracket) 
    //         } else {

    //         }
    //     }
    //     calcLargest()
    // }, [buffer, loading])

    //Calculates the smallest bracket
    // useEffect(() => {
    //     const calcSmallest = () => {
    //         if (!loading) {
    //             const smallest = Math.min(...incomeTable.map(o => o.calc))
    //             var result = incomeTable.filter(obj => {
    //                 return obj.calc === smallest
    //             })
    //             setSmallestBracket(result[0].bracket)
    //         } else {

    //         }
    //     }

    //     calcSmallest()
    // }, [buffer, loading])

    //Query for Parishes Incomes
    // useEffect(() => {
    //     const fetchIncomeData = async () => {
    //       try {
    //           const response = await api.get(incomesPath);
    //           setIncomeData(response.data);
    //           setLoading(false);
    //       } catch (err) {
    //         if (err.response) {
    //           console.log(err.response.data);
    //           console.log(err.response.status);
    //           console.log(err.response.headers); 
    //         } else { 
    //           console.log(`Error: ${err.message}`)
    //         }
    //       }
    //     }
    
    //     fetchIncomeData();
    //   }, [])


    //Creates an array of parishes
    // useEffect(() => {
    //     const parishesArray = () => {
    //         if (!loading) { 
    //             const parishes = Object.keys(incomeData[0])   
    //             parishes.shift()
    //             setParishes(parishes)
    //             setParishesLoading(false)
    //          } else {
                
    //          }
    //     }
    //     parishesArray()
    // }, [loading]);


    const cardData = [
        {
          "title": "Vacancy Rate",
          "stats": data[0][0][6],
          "description": "24% more than in the same month last year, 33% more that two years ago"
        },
        {
          "title": "Average Home Built Year",
          "stats": data[0][0][7],
          "description": "13% less compared to last month, new user engagement up by 6%"
        },
        {
          "title": "Average Home Value",
          "stats": ` $ ${data[0][0][8]}`,
          "description": "1994 orders were completed this month, 97% satisfaction rate"
        }
      ]
    

    const { classes } = useHHIncomeStyles();

    const stats = cardData.map((stat) => (
      <div key={stat.title} className={classes.stat}>
        <Text className={classes.count}>{stat.stats}</Text>
        <Text className={classes.title}>{stat.title}</Text>
        <Text className={classes.description}>{stat.description}</Text>
      </div>
    ));

    return (
        <div className={classes.root}>{stats}</div>
    )
}

export default HouseholdIncomeFacts


        // <>
        //     <Grid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } className="mt-8 gap-x-6 gap-y-6">

        //         <Card className='h-full'>
        //             <Flex>
        //                 <div className='text-start'>
        //                     <Title>Household Income Facts</Title>
        //                     <Subtitle>Largest Income Bracket: <Bold>{largestBracket}</Bold></Subtitle>
        //                     <Subtitle>Smallest Income Bracket: <Bold>{smallestBracket}</Bold></Subtitle>
        //                 </div>
        //                 <Flex justifyContent='justify-end' className='mt-2 space-x-2'>
        //                     <Dropdown
        //                         defaultValue={0}
        //                         onValueChange={(value) => setBuffer(value)}
        //                         placeholder="3 Mile"
        //                         className="mt-0 max-w-0"
        //                         >
        //                         {bufferData.map((item) => (
        //                         <DropdownItem
        //                             key={item.bufferName}
        //                             value={item.value}
        //                             text={item.bufferName}
        //                             />
        //                         ))}
        //                     </Dropdown>
        //                     <Dropdown className='max-w-xs' onValueChange={(value) => setParishSelected(value)} placeholder={parishSelected}> 
        //                         {!parishesLoading ? parishes.map((item) => (
        //                             <DropdownItem key={item} value={item} text={item}/>
        //                         )) : <DropdownItem value={0} text={'loading parishes'}/>}
        //                 </Dropdown> 
        //             </Flex>
        //             </Flex>

        //                 <Table className='mt-4'>
        //                     <TableHead>
        //                         <TableRow>
        //                             <TableHeaderCell>
        //                                 Income Bracket
        //                             </TableHeaderCell>
        //                             <TableHeaderCell>
        //                                 Percentage
        //                             </TableHeaderCell>
        //                             <TableHeaderCell>
        //                                 Selected Parish (%)  
        //                             </TableHeaderCell>
        //                             <TableHeaderCell>
        //                                 Percentage Difference  
        //                             </TableHeaderCell>
        //                             {/* <TableHeaderCell>
        //                                 Delta Bar 
        //                             </TableHeaderCell> */}
        //                         </TableRow>
        //                     </TableHead>
        //                     <TableBody>
        //                         { incomeTable.map((item) => (
        //                             <TableRow key={ item.bracket }>
        //                                 <TableCell>
        //                                     { item.bracket }
        //                                 </TableCell>
        //                                 <TableCell>
        //                                     <Text>{ item.percentage }</Text>
        //                                 </TableCell>
        //                                 <TableCell>
        //                                     <Text>{ item.localP }</Text>
        //                                 </TableCell>
        //                                 <TableCell>
        //                                     <Badge 
        //                                         color={parseInt(item.difference) < 0 ? 'red' : 'green'}
        //                                         tooltip={parseInt(item.difference) < 0 ? `This property has ${(parseFloat(item.difference) * -1)} more people than the selectedinside this income bracket`
        //                                             : `The selected parish has ${item.difference} less people inside this income bracket` }
        //                                     > {item.difference} </Badge>
        //                                 </TableCell> 
        //                                 {/* <TableCell>
        //                                     <DeltaBar 
        //                                         percentageValue={parseInt(item.difference) * 10}
        //                                         isIncreasePositive={true}
        //                                     />
        //                                 </TableCell> */}
        //                             </TableRow>
        //                         )) }
        //                     </TableBody>
        //                 </Table>
        //         </Card>
        //     </Grid>
        // </>