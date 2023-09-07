import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';

const RaceChart = ({ data }) => {

    const { classes, theme } = useStyles();
    const [radius, setRadius] = useState(0);

    const chartData = [
        {
            "race": 'White',
            "White": data.DP05_0037E[radius],
        },
        {
            "race": 'Black or African American',
            "Black or African American": data.DP05_0038E[radius],
        },
        {
            "race": 'American Indian',
            "American Indian/Alaska Native": data.DP05_0039E[radius],
        },
        {
            "race": 'Asian',
            "Asian": data.DP05_0044E[radius],
        },
        {
            "race": 'Pacific Islander',
            "Native Hawaiian/Pacific Islander": data.DP05_0052E[radius],
        },
        {
            "race": 'Some other race',
            "Some other race": data.DP05_0057E[radius],
        },
    ]

    return (
        <div className={theme.colorScheme === 'dark' ? 'flex flex-col border-solid border-[.5px] border-[#68686e] mx-4' : 'flex flex-col border-solid border-[.5px] border-[#babfc7] mx-4'}>

            <div className='h-[400px]'>
                <ResponsiveBar
                    data={chartData}
                    keys={[
                        'White',
                        'Black or African American',
                        'American Indian/Alaska Native',
                        'Asian',
                        'Native Hawaiian/Pacific Islander',
                        'Some other race',
                    ]}
                    indexBy="race"
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    margin={{ top: 50, right: 200, bottom: 50, left: 65 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Ethnicity',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '# of People',
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
                { value: '0', label: '3 Mile Radius' },
                { value: '1', label: '5 Mile Radius' },
                { value: '2', label: '10 Mile Radius' },
            ]} 
            className={classes.root}
            onChange={(value) => setRadius(parseInt(value))}
            />
        </div>
    )
}

export default RaceChart