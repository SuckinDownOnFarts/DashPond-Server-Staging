import { ResponsiveBar } from '@nivo/bar';
import { nivoDarkTheme, nivoLightTheme} from '../../../../NivoTheme/theme';
import { useMantineTheme } from '@mantine/core';

const MyResponsiveBar = () => {
    const data = [
        {
            "country": "AD",
            "hot dog": 75,
            "hot dogColor": "hsl(202, 70%, 50%)",
            "burger": 115,
            "burgerColor": "hsl(185, 70%, 50%)",
            "sandwich": 177,
            "sandwichColor": "hsl(253, 70%, 50%)",
            "kebab": 128,
            "kebabColor": "hsl(220, 70%, 50%)",
            "fries": 149,
            "friesColor": "hsl(172, 70%, 50%)",
            "donut": 0,
            "donutColor": "hsl(121, 70%, 50%)"
        },
        {
            "country": "AE",
            "hot dog": 41,
            "hot dogColor": "hsl(68, 70%, 50%)",
            "burger": 184,
            "burgerColor": "hsl(233, 70%, 50%)",
            "sandwich": 98,
            "sandwichColor": "hsl(95, 70%, 50%)",
            "kebab": 66,
            "kebabColor": "hsl(200, 70%, 50%)",
            "fries": 73,
            "friesColor": "hsl(180, 70%, 50%)",
            "donut": 44,
            "donutColor": "hsl(107, 70%, 50%)"
        },
        {
            "country": "AF",
            "hot dog": 83,
            "hot dogColor": "hsl(219, 70%, 50%)",
            "burger": 185,
            "burgerColor": "hsl(356, 70%, 50%)",
            "sandwich": 116,
            "sandwichColor": "hsl(142, 70%, 50%)",
            "kebab": 3,
            "kebabColor": "hsl(112, 70%, 50%)",
            "fries": 58,
            "friesColor": "hsl(45, 70%, 50%)",
            "donut": 151,
            "donutColor": "hsl(221, 70%, 50%)"
        },
        {
            "country": "AG",
            "hot dog": 145,
            "hot dogColor": "hsl(37, 70%, 50%)",
            "burger": 35,
            "burgerColor": "hsl(275, 70%, 50%)",
            "sandwich": 69,
            "sandwichColor": "hsl(103, 70%, 50%)",
            "kebab": 140,
            "kebabColor": "hsl(248, 70%, 50%)",
            "fries": 165,
            "friesColor": "hsl(140, 70%, 50%)",
            "donut": 188,
            "donutColor": "hsl(131, 70%, 50%)"
        },
        {
            "country": "AI",
            "hot dog": 57,
            "hot dogColor": "hsl(111, 70%, 50%)",
            "burger": 138,
            "burgerColor": "hsl(118, 70%, 50%)",
            "sandwich": 39,
            "sandwichColor": "hsl(321, 70%, 50%)",
            "kebab": 125,
            "kebabColor": "hsl(2, 70%, 50%)",
            "fries": 70,
            "friesColor": "hsl(280, 70%, 50%)",
            "donut": 93,
            "donutColor": "hsl(78, 70%, 50%)"
        },
        {
            "country": "AL",
            "hot dog": 160,
            "hot dogColor": "hsl(300, 70%, 50%)",
            "burger": 86,
            "burgerColor": "hsl(129, 70%, 50%)",
            "sandwich": 36,
            "sandwichColor": "hsl(97, 70%, 50%)",
            "kebab": 51,
            "kebabColor": "hsl(285, 70%, 50%)",
            "fries": 117,
            "friesColor": "hsl(275, 70%, 50%)",
            "donut": 129,
            "donutColor": "hsl(194, 70%, 50%)"
        },
        {
            "country": "AM",
            "hot dog": 107,
            "hot dogColor": "hsl(246, 70%, 50%)",
            "burger": 137,
            "burgerColor": "hsl(29, 70%, 50%)",
            "sandwich": 101,
            "sandwichColor": "hsl(122, 70%, 50%)",
            "kebab": 6,
            "kebabColor": "hsl(150, 70%, 50%)",
            "fries": 75,
            "friesColor": "hsl(206, 70%, 50%)",
            "donut": 154,
            "donutColor": "hsl(299, 70%, 50%)"
        }
    ]

    const theme = useMantineTheme()

    return (

        <ResponsiveBar
            data={data}
            keys={[
                'hot dog',
                'burger',
                'sandwich',
                'kebab',
                'fries',
                'donut'
            ]}
            indexBy="country"
            theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            // colors={{ scheme: 'nivo' }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            fill={[
                {
                    match: {
                        id: 'fries'
                    },
                    id: 'dots'
                },
                {
                    match: {
                        id: 'sandwich'
                    },
                    id: 'lines'
                }
            ]}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'country',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'food',
                legendPosition: 'middle',
                legendOffset: -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            // labelTextColor={{
            //     from: 'color',
            //     modifiers: [
            //         [
            //             'darker',
            //             1.6
            //         ]
            //     ]
            // }}
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
    )
}

export default MyResponsiveBar