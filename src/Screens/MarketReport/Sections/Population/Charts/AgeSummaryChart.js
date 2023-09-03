import { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';


const AgeSummaryChart = ({ data }) => {

    const [radius, setRadius] = useState(0);


    const chartData = [
        {
            "age": 'Under 15 Years',
            "Under 15 Years": data.DP05_0005E[radius] + data.DP05_0006E[radius] + data.DP05_0007E[radius],
        },
        {
            "age": '15-34 Years',
            "15-34 Years": data.DP05_0008E[radius] + data.DP05_0009E[radius] + data.DP05_0010E[radius],
        },
        {
            "age": '35-54 Years',
            "35-54 Years": data.DP05_0011E[radius] + data.DP05_0012E[radius],
        },
        {
            "age": '55-64 Years',
            "55-64 Years": data.DP05_0013E[radius] + data.DP05_0014E[radius],
        },
        {
            "age": '65+ Years',
            "65+ Years": data.DP05_0015E[radius] + data.DP05_0016E[radius] + data.DP05_0017E[radius],
        },
    ]

    const theme = useMantineTheme()

    return (
        <div className='flex flex-col'>

            <div className='h-[400px]'>
                <ResponsiveBar
                    data={chartData}
                    keys={[
                        'Under 15 Years',
                        '15-34 Years',
                        '35-54 Years',
                        '55-64 Years',
                        '65+ Years',
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
                        legend: 'Age Brackets',
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

export default AgeSummaryChart