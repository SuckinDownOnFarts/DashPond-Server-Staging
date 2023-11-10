import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import { useMantineTheme, Text } from '@mantine/core';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/KTtheme';

export const IndustryChart1 = () => {

    const data = [
        {

            "taste": "FRUITY",
            "chardonay": 96,
        },
        {
            "taste": "BITTER",
            "chardonay": 95,
        },
        {
            "taste": "HEAVY",
            "chardonay": 76,
        },
        {
            "taste": "STRONG",
            "chardonay": 107,
        },
        {
            "taste": "SUNNY",
            "chardonay": 50,
        }
    ];

    const theme = useMantineTheme();


    return (
        // <div className={theme.colorScheme === 'dark' ? '' : 'border-solid border-[.5px] border-[#babfc7]'}>
        <div className={theme.colorScheme === 'dark' ? ' sm:w-1/2 w-full border-solid border-[0.0625rem] border-[#373A40] rounded-xl bg-[#1a1b1e]'
            : 'sm:w-1/2 w-full border-solid border-[0.0625rem] border-[#dee2e6] rounded-xl bg-[#ffffff]'}>
            <Text size="xs" c="dimmed" className='font-bold uppercase pt-4 pl-4'>
                Random Chart
            </Text>
            <div className='h-[400px]'>
                <ResponsiveRadar
                    data={data}
                    keys={["chardonay"]}
                    indexBy="taste"
                    valueFormat=">-.2f"
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                    borderColor={{ from: 'color' }}
                    gridLabelOffset={36}
                    dotSize={10}
                    curve="catmullRomClosed"
                    dotColor={{ theme: 'background' }}
                    dotBorderWidth={2}
                    colors={'#f86e0e'}
                    blendMode="multiply"
                    motionConfig="wobbly"
                    legends={[
                        {
                            anchor: 'top-left',
                            direction: 'column',
                            translateX: -50,
                            translateY: -40,
                            itemWidth: 80,
                            itemHeight: 20,
                            itemTextColor: '#999',
                            symbolSize: 12,
                            symbolShape: 'circle',
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

export const IndustryChart2 = () => {

    const data = [
        {

            "taste": "FRUITY",
            "Chardonay": 15,
        },
        {
            "taste": "BITTER",
            "Chardonay": 35,
        },
        {
            "taste": "HEAVY",
            "Chardonay": 86,
        },
        {
            "taste": "STRONG",
            "Chardonay": 38,
        },
        {
            "taste": "SUNNY",
            "Chardonay": 99,
        }
    ];

    const theme = useMantineTheme();


    return (
        <div className={theme.colorScheme === 'dark' ? 'sm:w-1/2 w-full border-solid border-[0.0625rem] border-[#373A40] rounded-xl bg-[#1a1b1e]'
            : 'sm:w-1/2 w-full border-solid border-[0.0625rem] border-[#dee2e6] rounded-xl bg-[#ffffff]'}>
            <Text size="xs" c="dimmed" className='font-bold uppercase pt-4 pl-4'>
                Random Chart
            </Text>
            <div className='h-[400px]'>
                <ResponsiveRadar
                    data={data}
                    keys={["Chardonay"]}
                    indexBy="taste"
                    valueFormat=">-.2f"
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                    borderColor={{ from: 'color' }}
                    gridLabelOffset={36}
                    dotSize={10}
                    curve="catmullRomClosed"
                    dotColor={{ theme: 'background' }}
                    dotBorderWidth={2}
                    colors={'#f86e0e'}
                    blendMode="multiply"
                    motionConfig="wobbly"
                    legends={[
                        {
                            anchor: 'top-left',
                            direction: 'column',
                            translateX: -50,
                            translateY: -40,
                            itemWidth: 80,
                            itemHeight: 20,
                            itemTextColor: '#999',
                            symbolSize: 12,
                            symbolShape: 'circle',
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