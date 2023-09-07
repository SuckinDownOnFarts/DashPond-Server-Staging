import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { SegmentedControl } from '@mantine/core';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';


const MaritalStatusChart = ({ data }) => {
    const { classes, theme } = useStyles();
    const [radius, setRadius] = useState(0);


    const chartData = [
        {
            "gender": 'Males 15+',
            "Never Married": data.DP02_0026E[radius],
            "Married": data.DP02_0027E[radius],
            "Seperated": data.DP02_0028E[radius],
            "Widowed": data.DP02_0029E[radius],
            "Divorced": data.DP02_0030E[radius]
        },
        {
            "gender": 'Females 15+',
            "Never Married": data.DP02_0032E[radius],
            "Married": data.DP02_0033E[radius],
            "Seperated": data.DP02_0034E[radius],
            "Widowed": data.DP02_0035E[radius],
            "Divorced": data.DP02_0036E[radius]
        },
    ]

    return (
        <div className={theme.colorScheme === 'dark' ? 'flex flex-col border-solid border-[.5px] border-[#68686e] mx-4' : 'flex flex-col border-solid border-[.5px] border-[#babfc7] mx-4'}>

            <div className='h-[400px]'>
                <ResponsiveBar
                    data={chartData}
                    keys={[
                        "Never Married",
                        "Married",
                        "Seperated",
                        "Widowed",
                        "Divorced",
                    ]}
                    indexBy="gender"
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
                        legend: 'Population 15+',
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

export default MaritalStatusChart