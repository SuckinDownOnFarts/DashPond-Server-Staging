import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';


const RoomsChart = ({ data }) => {

    const [radius, setRadius] = useState(0);

    const chartData = [
        {
            "units": '1 room',
            "1 room": data.DP04_0028E[radius],
        },
        {
            "units": '2 room',
            "2 room": data.DP04_0029E[radius],
        },
        {
            "units": '3 rooms',
            "3 rooms": data.DP04_0030E[radius],
        },
        {
            "units": '4 rooms',
            "4 rooms": data.DP04_0031E[radius],
        },
        {
            "units": '5 rooms',
            "5 rooms": data.DP04_0032E[radius],
        },
        {
            "units": '6 rooms',
            "6 rooms": data.DP04_0033E[radius],
        },
        {
            "units": '7 rooms',
            "7 rooms": data.DP04_0034E[radius],
        },
        {
            "units": '8 rooms',
            "8 rooms": data.DP04_0035E[radius],
        },
        {
            "units": '9 rooms or more',
            "9 rooms or more": data.DP04_0036E[radius],
        },
    ]

    const theme = useMantineTheme()

    return (
        <div className='flex flex-col'>

            <div className='h-[400px]'>
                <ResponsiveBar
                    data={chartData}
                    keys={[
                        '1 room',
                        '2 room',
                        '3 rooms',
                        '4 rooms',
                        '5 rooms',
                        '6 rooms',
                        "7 rooms",
                        "8 rooms",
                        "9 rooms or more",
                    ]}
                    indexBy="units"
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
                        legend: 'Units in Structure',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '# of Structures',
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

export default RoomsChart