import { ResponsiveRadialBar } from '@nivo/radial-bar';
import { useMantineTheme, Text } from '@mantine/core';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/KTtheme';

export const RadialChart1 = () => {
    const theme = useMantineTheme();

    const data = [
        {
            "id": "Supermarket",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 12
                },
                {
                    "x": "Fruits",
                    "y": 143
                },
                {
                    "x": "Meat",
                    "y": 74
                },
                {
                    "x": "Fish",
                    "y": 65
                }
            ]
        },
        {
            "id": "Combini",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 98
                },
                {
                    "x": "Fruits",
                    "y": 41
                },
                {
                    "x": "Meat",
                    "y": 300
                },
                {
                    "x": "Fish",
                    "y": 149
                }
            ]
        },
        {
            "id": "Online",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 256
                },
                {
                    "x": "Fruits",
                    "y": 112
                },
                {
                    "x": "Meat",
                    "y": 169
                },
                {
                    "x": "Fish",
                    "y": 200
                }
            ]
        },
        {
            "id": "Marché",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 259
                },
                {
                    "x": "Fruits",
                    "y": 242
                },
                {
                    "x": "Meat",
                    "y": 68
                },
                {
                    "x": "Fish",
                    "y": 150
                }
            ]
        }
    ]
    return (
        <div className={theme.colorScheme === 'dark' ? ' sm:w-1/2 w-full border-solid border-[0.0625rem] border-[#373A40] rounded-xl bg-[#1a1b1e]'
            : 'sm:w-1/2 w-full border-solid border-[0.0625rem] border-[#dee2e6] rounded-lg bg-[#ffffff]'}>
            <Text size="xs" c="dimmed" className='font-bold uppercase pt-4 pl-4'>
                Random Chart
            </Text>
            <div className='h-[400px]'>
                <ResponsiveRadialBar
                    data={data}
                    valueFormat=">-.2f"
                    padding={0.4}
                    cornerRadius={2}
                    colors={{ scheme: 'paired' }}
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
                    radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                    circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                    legends={[
                        {
                            anchor: 'right',
                            direction: 'column',
                            justify: false,
                            translateX: 80,
                            translateY: 0,
                            itemsSpacing: 6,
                            itemDirection: 'left-to-right',
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            symbolSize: 18,
                            symbolShape: 'square',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </div>
    )
}

export const RadialChart2 = () => {
    const theme = useMantineTheme();

    const data = [
        {
            "id": "Supermarket",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 155
                },
                {
                    "x": "Fruits",
                    "y": 39
                },
                {
                    "x": "Meat",
                    "y": 142
                },
                {
                    "x": "Fish",
                    "y": 297
                }
            ]
        },
        {
            "id": "Combini",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 167
                },
                {
                    "x": "Fruits",
                    "y": 41
                },
                {
                    "x": "Meat",
                    "y": 82
                },
                {
                    "x": "Fish",
                    "y": 149
                }
            ]
        },
        {
            "id": "Online",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 256
                },
                {
                    "x": "Fruits",
                    "y": 186
                },
                {
                    "x": "Meat",
                    "y": 215
                },
                {
                    "x": "Fish",
                    "y": 53
                }
            ]
        },
        {
            "id": "Marché",
            "data": [
                {
                    "x": "Vegetables",
                    "y": 259
                },
                {
                    "x": "Fruits",
                    "y": 242
                },
                {
                    "x": "Meat",
                    "y": 68
                },
                {
                    "x": "Fish",
                    "y": 241
                }
            ]
        }
    ]
    return (
        <div className={theme.colorScheme === 'dark' ? ' sm:w-1/2 w-full border-solid border-[0.0625rem] border-[#373A40] rounded-xl bg-[#1a1b1e]'
            : 'sm:w-1/2 w-full border-solid border-[0.0625rem] border-[#dee2e6] rounded-lg bg-[#ffffff]'}>
            <Text size="xs" c="dimmed" className='font-bold uppercase pt-4 pl-4'>
                Random Chart
            </Text>
            <div className='h-[400px]'>
                <ResponsiveRadialBar
                    data={data}
                    valueFormat=">-.2f"
                    padding={0.4}
                    cornerRadius={2}
                    colors={{ scheme: 'paired' }}
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
                    radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                    circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                    legends={[
                        {
                            anchor: 'right',
                            direction: 'column',
                            justify: false,
                            translateX: 80,
                            translateY: 0,
                            itemsSpacing: 6,
                            itemDirection: 'left-to-right',
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            symbolSize: 18,
                            symbolShape: 'square',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
        </div>
    )
}