import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { SegmentedControl } from '@mantine/core';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';

const CommutingChart = ({ data }) => {
    const { classes, theme } = useStyles();
    const [radius, setRadius] = useState(0);

    const chartData = [
        {
            "id": "Car, truck, or van -- drove alone",
            'label': "Car, truck, or van -- drove alone",
            "value": data.DP03_0019E[radius],
        },
        {
            "id": 'Car, truck, or van -- carpooled',
            'label': 'Car, truck, or van -- carpooled',
            "value": data.DP03_0020E[radius],
        },
        {
            "id": 'Public transportation',
            'label': 'Public transportation',
            "value": data.DP03_0021E[radius],
        },
        {
            "id": 'Walked',
            'label': 'Walked',
            "value": data.DP03_0022E[radius],
        },
        {
            "id": 'Other means',
            'label': 'Other means',
            "value": data.DP03_0023E[radius],
        },
        {
            "id": 'Worked from home',
            'label': 'Worked from home',
            "value": data.DP03_0024E[radius],
        },
    ]


    return (
        <div className={theme.colorScheme === 'dark' ? 'flex flex-col border-solid border-[.5px] border-[#68686e] mx-4' : 'flex flex-col border-solid border-[.5px] border-[#babfc7] mx-4'}>

            <div className='h-[400px]'>
                <ResponsivePie
                    data={chartData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    colors={{ scheme: 'dark2' }}
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
            className={classes.root}
            onChange={(value) => setRadius(parseInt(value))}
            />
        </div>
    )
}

export default CommutingChart