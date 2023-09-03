import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';


const AgeBreakdownChart = ({ data }) => {

    const [radius, setRadius] = useState(0);

    console.log(data.DP05_0005E[0]);


    const chartData = [
        {
            "age": 'Under 5',
            "Under 5": data.DP05_0005E[radius],
        },
        {
            "age": '5 to 9',
            "5 to 9": data.DP05_0006E[radius],
        },
        {
            "age": '10 to 14',
            "10 to 14": data.DP05_0007E[radius],
        },
        {
            "age": '15 to 19',
            "15 to 19": data.DP05_0008E[radius],
        },
        {
            "age": '20 to 24',
            "20 to 24": data.DP05_0009E[radius],
        },
        {
            "age": '25 to 34',
            "25 to 34": data.DP05_0010E[radius],
        },
        {
            "age": '35 to 44',
            "35 to 44": data.DP05_0011E[radius],
        },
        {
            "age": '45 to 54',
            "45 to 54": data.DP05_0012E[radius],
        },
        {
            "age": '55 to 59',
            "55 to 59": data.DP05_0013E[radius],
        },
        {
            "age": '60 to 64',
            "60 to 64": data.DP05_0014E[radius],
        },
        {
            "age": '65 to 74',
            "65 to 74": data.DP05_0015E[radius],
        },
        {
            "age": '75 to 84',
            "75 to 84": data.DP05_0016E[radius],
        },
        {
            "age": '85+',
            "85+": data.DP05_0017E[radius],
        },
    ]

    const theme = useMantineTheme()

    return (
        <div className='flex flex-col'>

            <div className='h-[400px]'>
                <ResponsiveBar
                    data={chartData}
                    keys={[
                        'Under 5',
                        '5 to 9',
                        '10 to 14',
                        '15 to 19',
                        '20 to 24',
                        '25 to 34',
                        "35 to 44",
                        "45 to 54",
                        "55 to 59",
                        "60 to 64",
                        "65 to 74",
                        "75 to 84",
                        "85+",
                    ]}
                    indexBy="age"
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    margin={{ top: 50, right: 130, bottom: 50, left: 100 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Age Ranges',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '# of People',
                        legendPosition: 'middle',
                        legendOffset: -80
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                />
            </div>
            <SegmentedControl data={[
                { value: '0', label: '3 Mile Radius' },
                { value: '1', label: '5 Mile Radius' },
                { value: '2', label: '10 Mile Radius' },
            ]} 
            onChange={(value) => setRadius(parseInt(value))}
            />
        </div>
    )
}

export default AgeBreakdownChart