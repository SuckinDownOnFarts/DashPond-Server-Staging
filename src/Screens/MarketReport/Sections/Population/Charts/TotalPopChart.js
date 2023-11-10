import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';

const AncestryChart = ({ data }) => {
    const [radius, setRadius] = useState(1);
    const { classes, theme } = useStyles();

    const chartData = [
        {
            'id': 'Males',
            'label': 'Males',
            'value': data.DP05_0002E[radius],
        },
        {
            'id': 'Females',
            'label': 'Females',
            'value': data.DP05_0003E[radius],
        },
    ]

    return (
        <div className={theme.colorScheme === 'dark' ? 'flex flex-col border-solid border-[.5px] border-[#68686e] mx-4' : 'flex flex-col border-solid border-[.5px] border-[#babfc7] mx-4'}>

            <div className='h-[400px]'>
                <ResponsivePie
                    data={chartData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    innerRadius={0.5}
                    valueFormat=">-.4s"
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'category10' }}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.2
                            ]
                        ]
                    }}
                    // tooltip={false}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                2
                            ]
                        ]
                    }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'Males'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'Females'
                            },
                            id: 'lines'
                        },
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

export default AncestryChart