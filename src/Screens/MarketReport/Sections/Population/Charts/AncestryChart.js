import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie'
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { SegmentedControl } from '@mantine/core';
import { chartStyles as useStyles } from '../../../Styles/MRStyles';

const AncestryChart = ({ data }) => {
    const { classes, theme } = useStyles();
    const [radius, setRadius] = useState(0);

    const chartData = [
        {
            'id': 'American',
            'label': 'American',
            'value': data.DP02_0125E[radius],
        },
        {
            'id': 'Arab',
            'label': 'Arab',
            'value': data.DP02_0126E[radius],
        },
        {
            'id': 'Czech',
            'label': 'Czech',
            'value': data.DP02_0127E[radius],
        },
        {
            'id': 'Danish',
            'label': 'Danish',
            'value': data.DP02_0128E[radius],
        },
        {
            'id': "Dutch",
            'label': 'Dutch',
            'value': data.DP02_0129E[radius],
        },
        {
            'id': "English",
            'label': 'English',
            'value': data.DP02_0130E[radius],
        },
        {
            'id': "French",
            'label': 'French',
            'value': data.DP02_0131E[radius],
        },
        {
            'id': "French Canadian",
            'label': 'French Canadian',
            'value': data.DP02_0132E[radius],
        },
        {
            'id': "German",
            'label': 'German',
            'value': data.DP02_0133E[radius],
        },
        {
            'id': "Greek",
            'label': 'Greek',
            'value': data.DP02_0134E[radius],
        },
        {
            'id': "Hungarian",
            'label': 'Hungarian',
            'value': data.DP02_0135E[radius],
        },
        {
            'id': "Irish",
            'label': 'Irish',
            'value': data.DP02_0136E[radius],
        },
        {
            'id': "Italian",
            'label': 'Italian',
            'value': data.DP02_0137E[radius],
        },
        {
            'id': "Lithuanian",
            'label': 'Lithuanian',
            'value': data.DP02_0138E[radius],
        },
        {
            'id': "Norwegian",
            'label': 'Norwegian',
            'value': data.DP02_0139E[radius],
        },
        {
            'id': "Polish",
            'label': 'Polish',
            'value': data.DP02_0140E[radius],
        },
        {
            'id': "Portuguese",
            'label': 'Portuguese',
            'value': data.DP02_0141E[radius],
        },
        {
            'id': "Russian",
            'label': 'Russian',
            'value': data.DP02_0142E[radius],
        },
        {
            'id': "Scotch-Irish",
            'label': 'Scotch-Irish',
            'value': data.DP02_0143E[radius],
        },
        {
            'id': "Scottish",
            'label': 'Scottish',
            'value': data.DP02_0144E[radius],
        },
        {
            'id': "Slovak",
            'label': 'Slovak',
            'value': data.DP02_0145E[radius],
        },
        {
            'id': "Sub-saharan African",
            'label': 'Sub-saharan African',
            'value': data.DP02_0146E[radius],
        },
        {
            'id': "Swedish",
            'label': 'Swedish',
            'value': data.DP02_0147E[radius],
        },
        {
            'id': "Swiss",
            'label': 'Swiss',
            'value': data.DP02_0148E[radius],
        },
        {
            'id': "Ukrainian",
            'label': 'Ukrainian',
            'value': data.DP02_0149E[radius],
        },
        {
            'id': "Welsh",
            'label': 'Welsh',
            'value': data.DP02_0150E[radius],
        },
        {
            'id': "West Indian",
            'label': 'West Indian',
            'value': data.DP02_0151E[radius],
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

export default AncestryChart