import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { SegmentedControl } from '@mantine/core';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';

const UnitsChart = ({ data }) => {
    const { classes, theme } = useStyles();
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

    return (
        <div className={theme.colorScheme === 'dark' ? 'flex flex-col border-solid border-[.5px] border-[#68686e] mx-4' : 'flex flex-col border-solid border-[.5px] border-[#babfc7] mx-4'}>

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
                    margin={{ top: 50, right: 130, bottom: 50, left: 65 }}
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
                        legendOffset: -40
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
                { value: '0', label: '5 Minute Drive Time' },
                { value: '1', label: '10 Minute Drive Time' },
                { value: '2', label: '15 Minute Drive Time' },
            ]} 
            className={classes.root}
            onChange={(value) => setRadius(parseInt(value))}
            />
        </div>
    )
}

export default UnitsChart