import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';


const UnitsChart = ({ data }) => {

    const [radius, setRadius] = useState(0);

    const chartData = [
        {
            "units": '1-unit, detached',
            "1-unit, detached": data.DP04_0007E[radius],
        },
        {
            "units": '1-unit, attached',
            "1-unit, attached": data.DP04_0008E[radius],
        },
        {
            "units": '2 units',
            "2 units": data.DP04_0009E[radius],
        },
        {
            "units": '3 or 4 units',
            "3 or 4 units": data.DP04_0010E[radius],
        },
        {
            "units": '5 to 9 units',
            "5 to 9 units": data.DP04_0011E[radius],
        },
        {
            "units": '10 to 19 units',
            "10 to 19 units": data.DP04_0012E[radius],
        },
        {
            "units": '20 or more units',
            "20 or more units": data.DP04_0013E[radius],
        },
        {
            "units": 'Mobile home',
            "Mobile home": data.DP04_0014E[radius],
        },
        {
            "units": 'Boat, RV, van, etc.',
            "Boat, RV, van, etc.": data.DP04_0015E[radius],
        },
    ]

    const theme = useMantineTheme()

    return (
        <div className='flex flex-col'>

            <div className='h-[400px]'>
                <ResponsiveBar
                    data={chartData}
                    keys={[
                        '1-unit, detached',
                        '1-unit, attached',
                        '2 units',
                        '3 or 4 units',
                        '5 to 9 units',
                        '10 to 19 units',
                        "20 or more units",
                        "Mobile home",
                        "Boat, RV, van, etc.",
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

export default UnitsChart