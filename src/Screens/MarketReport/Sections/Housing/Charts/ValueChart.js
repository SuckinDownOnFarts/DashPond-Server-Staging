import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';

const ValueChart = ({ data }) => {
    const [radius, setRadius] = useState(0);
    const theme = useMantineTheme();

    const chartData = [
        {
            "id": "Less than $50,000",
            'label': "Less than $50,000",
            "value": data.DP04_0081E[radius],
        },
        {
            "id": '$50,000 to $99,999',
            'label': '$50,000 to $99,999',
            "value": data.DP04_0082E[radius],
        },
        {
            "id": '$100,000 to $149,999',
            'label': '$100,000 to $149,999',
            "value": data.DP04_0083E[radius],
        },
        {
            "id": '$150,000 to $199,999',
            'label': '$150,000 to $199,999',
            "value": data.DP04_0084E[radius],
        },
        {
            "id": '$200,000 to $299,999',
            'label': '$200,000 to $299,999',
            "value": data.DP04_0085E[radius],
        },
        {
            "id": '$300,000 to $499,999',
            'label': '$300,000 to $499,999',
            "value": data.DP04_0086E[radius],
        },
        {
            "id": '$500,000 to $999,999',
            'label': '$500,000 to $999,999',
            "value": data.DP04_0087E[radius],
        },
        {
            "id": '$1,000,000 or more',
            'label': '$1,000,000 or more',
            "value": data.DP04_0088E[radius],
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

export default ValueChart