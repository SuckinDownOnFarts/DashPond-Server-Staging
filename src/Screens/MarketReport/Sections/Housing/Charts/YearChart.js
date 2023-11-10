import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { SegmentedControl } from '@mantine/core';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';

const YearChart = ({ data }) => {
    const { classes, theme } = useStyles();
    const [radius, setRadius] = useState(0);

    const chartData = [
        {
            "id": "Built 2020 or later",
            'label': "Built 2020 or later",
            "value": data.DP04_0017E[radius],
        },
        {
            "id": 'Built 2010 to 2019',
            'label': 'Built 2010 to 2019',
            "value": data.DP04_0018E[radius],
        },
        {
            "id": 'Built 1990 to 1999',
            'label': 'Built 1990 to 1999',
            "value": data.DP04_0020E[radius],
        },
        {
            "id": 'Built 1980 to 1989',
            'label': 'Built 1980 to 1989',
            "value": data.DP04_0021E[radius],
        },
        {
            "id": 'Built 1970 to 1979',
            'label': 'Built 1970 to 1979',
            "value": data.DP04_0022E[radius],
        },
        {
            "id": 'Built 1960 to 1969',
            'label': 'Built 1960 to 1969',
            "value": data.DP04_0023E[radius],
        },
        {
            "id": 'Built 1950 to 1959',
            'label': 'Built 1950 to 1959',
            "value": data.DP04_0024E[radius],
        },
        {
            "id": 'Built 1940 to 1949',
            'label': 'Built 1940 to 1949',
            "value": data.DP04_0025E[radius],
        },
        {
            "id": 'Built 1939 or earlier',
            'label': 'Built 1939 or earlier',
            "value": data.DP04_0026E[radius],
        },
    ];

    return (
        <div className={theme.colorScheme === 'dark' ? 'flex flex-col border-solid border-[.5px] border-[#68686e] mx-4' : 'flex flex-col border-solid border-[.5px] border-[#babfc7] mx-4'}>

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

export default YearChart