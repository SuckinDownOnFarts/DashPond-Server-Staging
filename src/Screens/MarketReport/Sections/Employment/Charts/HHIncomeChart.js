import { useState } from 'react';
import { nivoDarkTheme, nivoLightTheme } from '../../../../../NivoTheme/theme';
import { useMantineTheme, SegmentedControl } from '@mantine/core';
import { ResponsiveFunnel } from '@nivo/funnel'

const HHIncomeChart = ({ data }) => {
    const [radius, setRadius] = useState(0);
    const theme = useMantineTheme();

    const chartData = [
        {
            "id": "Less than $10,000",
            'label': "Less than $10,000",
            "value": data.DP03_0052E[radius],
        },
        {
            "id": '$10,000 to $14,999',
            'label': '$10,000 to $14,999',
            "value": data.DP03_0053E[radius],
        },
        {
            "id": '$15,000 to $24,999',
            'label': '$15,000 to $24,999',
            "value": data.DP03_0054E[radius],
        },
        {
            "id": '$25,000 to $34,999',
            'label': '$25,000 to $34,999',
            "value": data.DP03_0055E[radius],
        },
        {
            "id": '$35,000 to $49,999',
            'label': '$35,000 to $49,999',
            "value": data.DP03_0056E[radius],
        },
        {
            "id": '$50,000 to $74,999',
            'label': '$50,000 to $74,999',
            "value": data.DP03_0057E[radius],
        },
        {
            "id": '$75,000 to $99,999',
            'label': '$75,000 to $99,999',
            "value": data.DP03_0058E[radius],
        },
        {
            "id": '$100,000 to $149,999',
            'label': '$100,000 to $149,999',
            "value": data.DP03_0059E[radius],
        },
        {
            "id": '$150,000 to $199,999',
            'label': '$150,000 to $199,999',
            "value": data.DP03_0060E[radius],
        },
        {
            "id": '$200,000 or more',
            'label': '$200,000 or more',
            "value": data.DP03_0061E[radius],
        },
    ]

    return (
        <div className='flex flex-col'>

            <div className='h-[400px]'>
                <ResponsiveFunnel
                    data={chartData}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    theme={theme.colorScheme === 'dark' ? nivoDarkTheme : nivoLightTheme}
                    valueFormat=">-.4s"
                    colors={{ scheme: 'set3' }}
                    // borderWidth={20}
                    labelColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                3
                            ]
                        ]
                    }}
                    beforeSeparatorLength={100}
                    beforeSeparatorOffset={20}
                    afterSeparatorLength={100}
                    afterSeparatorOffset={20}
                    currentPartSizeExtension={10}
                    currentBorderWidth={40}
                    motionConfig="wobbly"
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

export default HHIncomeChart