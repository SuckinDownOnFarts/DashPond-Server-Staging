import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';

const RentChart = ({ data }) => {
    const [radius, setRadius] = useState(0);
    const theme = useMantineTheme();

    const chartData = [
        {
            "id": "Less than $500",
            'label': "Less than $500",
            "value": data.DP04_0127E[radius],
        },
        {
            "id": '$500 to $999',
            'label': '$500 to $999',
            "value": data.DP04_0128E[radius],
        },
        {
            "id": '$1,000 to $1,499',
            'label': '$1,000 to $1,499',
            "value": data.DP04_0129E[radius],
        },
        {
            "id": '$1,500 to $1,999',
            'label': '$1,500 to $1,999',
            "value": data.DP04_0130E[radius],
        },
        {
            "id": '$2,000 to $2,499',
            'label': '$2,000 to $2,499',
            "value": data.DP04_0131E[radius],
        },
        {
            "id": '$2,500 to $2,999',
            'label': '$2,500 to $2,999',
            "value": data.DP04_0132E[radius],
        },
        {
            "id": '$3,000 or more',
            'label': '$3,000 or more',
            "value": data.DP04_0133E[radius],
        },
        {
            "id": 'No rent paid',
            'label': 'No rent paid',
            "value": data.DP04_0135E[radius],
        },
    ]


    return (
        <div className='flex flex-col'>

            <div className='h-[400px]'>
                <ResponsivePie
                    data={chartData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
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
                                id: 'ruby'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'c'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'go'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'python'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'scala'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'lisp'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'elixir'
                            },
                            id: 'lines'
                        },
                        {
                            match: {
                                id: 'javascript'
                            },
                            id: 'lines'
                        }
                    ]}
                />
            </div>
            <SegmentedControl data={[
                { value: '0', label: '3 Mile Radius' },
                { value: '1', label: '5 Mile Radius' },
                { value: '2', label: '10 Mile Radius' },
            ]} 
            onChange={(value) => setRadius(parseInt(value))}
            />
        </div>
    )
}

export default RentChart