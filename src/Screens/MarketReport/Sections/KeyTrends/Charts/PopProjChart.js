import { useState } from 'react';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';
import { useMantineTheme, SegmentedControl } from '@mantine/core';
import { ResponsiveLine } from '@nivo/line';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PopProjChart = ({ data }) => {
    const [radius, setRadius] = useState(1);
    const { classes, theme } = useStyles();

    console.log(data);

    

    const chartData = [
        {
            "id": "Population",
            "color": "hsl(72, 70%, 50%)",
            "data": [
                {
                    "x": "2022",
                    "y": data[0].DP05_0002E[0]
                },
                {
                    "x": "2023",
                    "y": data[0].DP05_0002E[1]
                },
                {
                    "x": "2024",
                    "y": data[0].DP05_0002E[2]
                },
                {
                    "x": "2025",
                    "y": data[0].DP05_0002E[3]
                },
                {
                    "x": "2026",
                    "y": data[0].DP05_0002E[4]
                },
                {
                    "x": "2027",
                    "y": data[0].DP05_0002E[5]
                },
            ]
        }
    ]

    return (
        <div className={theme.colorScheme === 'dark' ? 'flex flex-col border-solid border-[.5px] border-[#68686e] mx-4' : 'flex flex-col border-solid border-[.5px] border-[#babfc7] mx-4'}>
            <div className='h-[400px] w-[1000px]'>
                <ResponsiveLine
                    data={chartData}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{
                        type: 'linear',
                        min: 'auto',
                        max: 'auto',
                        stacked: true,
                        reverse: false
                    }}
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'transportation',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'count',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 0.75,
                            symbolSize: 12,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
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

export default PopProjChart