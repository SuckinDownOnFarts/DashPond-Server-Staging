import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';


const AttainmentChart = ({ data }) => {

    const [radius, setRadius] = useState(0);

    const chartData = [
        {
            "attainment": '> 9th grade',
            "> 9th grade": data.DP02_0060E[radius],
        },
        {
            "attainment": '9th to 12th grade',
            "9th to 12th grade": data.DP02_0061E[radius],
        },
        {
            "attainment": 'High school graduate',
            "High school graduate": data.DP02_0062E[radius],
        },
        {
            "attainment": 'Some college, no degree',
            "Some college, no degree": data.DP02_0063E[radius],
        },
        {
            "attainment": "Associate's degree",
            "Associate's degree": data.DP02_0064E[radius],
        },
        {
            "attainment": "Bachelor's degree",
            "Bachelor's degree": data.DP02_0065E[radius],
        },
        {
            "attainment": 'Graduate degree',
            'Graduate degree': data.DP02_0066E[radius],
        },
    ]

    const theme = useMantineTheme()

    return (
        <div className='flex flex-col'>

            <div className='h-[400px]'>
                <ResponsiveBar
                    data={chartData}
                    keys={[
                        "> 9th grade",
                        "9th to 12th grade",
                        "High school graduate",
                        "Some college, no degree",
                        "Associate's degree",
                        "Bachelor's degree",
                        'Graduate degree',
                    ]}
                    indexBy="attainment"
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
                        legend: 'Educational Attainment',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Population 25+',
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

export default AttainmentChart