import { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { SegmentedControl } from '@mantine/core';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';

const EnrollmentChart = ({ data }) => {
    const { classes, theme } = useStyles();
    const [radius, setRadius] = useState(0);

    const chartData = [
        {
            "enrollment": 'Nursery school, preschool',
            "Nursery school, preschool": data.DP02_0054E[radius],
        },
        {
            "enrollment": 'Kindergarten',
            "Kindergarten": data.DP02_0055E[radius],
        },
        {
            "enrollment": 'Elementary school (grades 1-8)',
            "Elementary school (grades 1-8)": data.DP02_0056E[radius],
        },
        {
            "enrollment": 'High school (grades 9-12)',
            "High school (grades 9-12)": data.DP02_0057E[radius],
        },
        {
            "enrollment": "College or graduate school",
            "College or graduate school": data.DP02_0058E[radius],
        },
    ]

    return (
        <div className={theme.colorScheme === 'dark' ? 'flex flex-col border-solid border-[.5px] border-[#68686e] mx-4' : 'flex flex-col border-solid border-[.5px] border-[#babfc7] mx-4'}>

            <div className='h-[400px]'>
                <ResponsiveBar
                    data={chartData}
                    keys={[
                        "Nursery school, preschool",
                        "Kindergarten",
                        "Elementary school (grades 1-8)",
                        "High school (grades 9-12)",
                        "College or graduate school",
                    ]}
                    indexBy="enrollment"
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
                        legend: 'School Enrollment',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Population 3+',
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

export default EnrollmentChart