import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { SegmentedControl } from '@mantine/core';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';

const Rent2Chart = ({ data }) => {
    const { classes, theme } = useStyles();
    const [radius, setRadius] = useState(0);

    const chartData = [
        {
            "rent": 'Less than 15.0 percent',
            "Less than 15.0 percent": data.DP04_0137E[radius],
        },
        {
            "rent": '15.0 to 19.9 percent',
            "15.0 to 19.9 percent": data.DP04_0138E[radius],
        },
        {
            "rent": '20.0 to 24.9 percent',
            "20.0 to 24.9 percent": data.DP04_0139E[radius],
        },
        {
            "rent": '25.0 to 29.9 percent',
            "25.0 to 29.9 percent": data.DP04_0140E[radius],
        },
        {
            "rent": '30.0 to 34.9 percent',
            "30.0 to 34.9 percent": data.DP04_0141E[radius],
        },
        {
            "rent": '35.0 percent or more',
            "35.0 percent or more": data.DP04_0142E[radius],
        },
        {
            "rent": 'Not computed',
            "Not computed": data.DP04_0143E[radius],
        },
    ]

    return (
        <div className={theme.colorScheme === 'dark' ? 'flex flex-col border-solid border-[.5px] border-[#68686e] mx-4' : 'flex flex-col border-solid border-[.5px] border-[#babfc7] mx-4'}>
            <div className='h-[400px]'>
                <ResponsiveBar
                    data={chartData}
                    keys={[
                        'Less than 15.0 percent',
                        '15.0 to 19.9 percent',
                        '20.0 to 24.9 percent',
                        '25.0 to 29.9 percent',
                        '30.0 to 34.9 percent',
                        '35.0 percent or more',
                        "Not computed",
                    ]}
                    indexBy="rent"
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    margin={{ top: 50, right: 170, bottom: 50, left: 65 }}
                    padding={0.3}
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '% Rent Paid of Household Income',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '# of Renters',
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

export default Rent2Chart