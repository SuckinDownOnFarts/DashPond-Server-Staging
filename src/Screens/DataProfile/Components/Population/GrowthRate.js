import React, { useState } from 'react';
import { AreaChart, Toggle, ToggleItem, Card, Title, Text, Flex, LineChart } from "@tremor/react";


const GrowthRate = ({ data, timeData }) => {

    const [buffer, setBuffer] = useState(1);

    const dataFormatter = (number) =>
        `${Intl.NumberFormat("us").format(number).toString()}%`;

    const popRate = [
            {
                year: 2013,
                'Population Growth Rate': ((timeData[buffer][1].DP05_0001E - timeData[buffer][0].DP05_0001E) / timeData[buffer][0].DP05_0001E) * 100, 
            }, 
            {
                year: 2014,
                'Population Growth Rate': ((timeData[buffer][2].DP05_0001E - timeData[buffer][1].DP05_0001E) / timeData[buffer][1].DP05_0001E) * 100,
            },
            {
                year: 2015, 
                'Population Growth Rate': ((timeData[buffer][3].DP05_0001E - timeData[buffer][2].DP05_0001E) / timeData[buffer][2].DP05_0001E) * 100, 
            },
            {
                year: 2016,
                'Population Growth Rate': ((timeData[buffer][4].DP05_0001E - timeData[buffer][3].DP05_0001E) / timeData[buffer][3].DP05_0001E) * 100, 
            },
            {
                year: 2017,
                'Population Growth Rate': ((timeData[buffer][5].DP05_0001E - timeData[buffer][4].DP05_0001E) / timeData[buffer][4].DP05_0001E) * 100, 
            },
            {
                year: 2018,
                'Population Growth Rate': ((timeData[buffer][6].DP05_0001E - timeData[buffer][5].DP05_0001E) / timeData[buffer][5].DP05_0001E) * 100, 
            },
            {
                year: 2019,
                'Population Growth Rate': ((timeData[buffer][7].DP05_0001E - timeData[buffer][6].DP05_0001E) / timeData[buffer][6].DP05_0001E) * 100,
            },
            {
                year: 2020,   
                'Population Growth Rate': ((data[buffer][0].DP05_0001E - timeData[buffer][7].DP05_0001E) / timeData[buffer][7].DP05_0001E) * 100,
            },
            {
                year: 2021, 
                'Population Growth Rate': ((timeData[buffer][8].DP05_0001E - data[buffer][0].DP05_0001E) / data[buffer][0].DP05_0001E) * 100,  
            },
        ] 

  return (
    <>
        <div className="mt-8">
            <Card>
                <div className="md:flex justify-between">
                    <div>
                        <Flex justifyContent="justify-start" alignItems="items-center" className='space-x-0.5'>
                            <Title> Population Growth Rate (2013 to 2021)</Title>
                        </Flex>
                        <Text> Yearly increase or decrease for selected radius </Text>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <Toggle
                            color="zinc"
                            defaultValue={ buffer }
                            onValueChange={ (value) => setBuffer(value) }
                        >
                            <ToggleItem value={0} text="3 Miles" />
                            <ToggleItem value={1} text="5 Miles" />
                            <ToggleItem value={2} text="10 Miles" />
                        </Toggle>
                    </div>
                </div>
                <LineChart
                    data={ popRate }
                    index="year"
                    categories={ ['Population Growth Rate'] }
                    colors={ ['blue'] }
                    showLegend={ false }
                    valueFormatter={dataFormatter} 
                    className="mt-8"
                /> 
            </Card> 
        </div>
    </>
  )
}

export default GrowthRate