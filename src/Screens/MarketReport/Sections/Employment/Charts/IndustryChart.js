import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { SegmentedControl } from '@mantine/core';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';

const IndustryChart = ({ data }) => {
    const { classes, theme } = useStyles();
    const [radius, setRadius] = useState(0);

    const chartData = [
        {
            "id": "Agriculture, forestry, fishing and hunting, and mining",
            'label': "Agriculture, forestry, fishing and hunting, and mining",
            "value": data.DP03_0033E[radius],
        },
        {
            "id": 'Construction',
            'label': 'Construction',
            "value": data.DP03_0034E[radius],
        },
        {
            "id": 'Manufacturing',
            'label': 'Manufacturing',
            "value": data.DP03_0035E[radius],
        },
        {
            "id": 'Wholesale trade',
            'label': 'Wholesale trade',
            "value": data.DP03_0036E[radius],
        },
        {
            "id": 'Retail trade',
            'label': 'Retail trade',
            "value": data.DP03_0037E[radius],
        },
        {
            "id": 'Transportation and warehousing, and utilities',
            'label': 'Transportation and warehousing, and utilities',
            "value": data.DP03_0038E[radius],
        },
        {
            "id": 'Information',
            'label': 'Information',
            "value": data.DP03_0039E[radius],
        },
        {
            "id": 'Finance and insurance, and real estate and rental and leasing',
            'label': 'Finance and insurance, and real estate and rental and leasing',
            "value": data.DP03_0040E[radius],
        },
        {
            "id": 'Professional, scientific, and management, and administrative and waste management services',
            'label': 'Professional, scientific, and management, and administrative and waste management services',
            "value": data.DP03_0041E[radius],
        },
        {
            "id": 'Educational services, and health care and social assistance',
            'label': 'Educational services, and health care and social assistance',
            "value": data.DP03_0042E[radius],
        },
        {
            "id": 'Arts, entertainment, and recreation, and accommodation and food services',
            'label': 'Arts, entertainment, and recreation, and accommodation and food services',
            "value": data.DP03_0043E[radius],
        },
        {
            "id": 'Other services, except public administration',
            'label': 'Other services, except public administration',
            "value": data.DP03_0044E[radius],
        },
        {
            "id": 'Public administration',
            'label': 'Public administration',
            "value": data.DP03_0045E[radius],
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

export default IndustryChart