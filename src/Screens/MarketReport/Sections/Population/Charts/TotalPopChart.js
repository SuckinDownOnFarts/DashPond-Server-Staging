import { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';


const TotalPopChart = ({ data }) => {

    const [radius, setRadius] = useState(0);


    const chartData = [
        {
            "gender": "Males",
            "Males": data.DP05_0002E[radius],
            "MalesColor": "hsl(202, 70%, 50%)",
        },
        {
            "gender": "Females",
            "Females": data.DP05_0003E[radius],
            "FemalesColor": "hsl(202, 70%, 50%)",
        },
    ]

    const theme = useMantineTheme()

    return (
        <div className='flex flex-col'>

            <div className='h-[400px]'>
                <ResponsiveBar
                    data={chartData}
                    keys={[
                        'Males',
                        'Females',
                    ]}
                    indexBy="gender"
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
                        legend: 'Gender',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Total Population',
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

export default TotalPopChart