import React from 'react';
import { Progress, Box, Text, Group, Paper, SimpleGrid, rem } from '@mantine/core';
import { IconArrowUpRight, IconDeviceAnalytics } from '@tabler/icons-react';
import { useIndustryStyles as useStyles } from '../../../Styles/MRStyles';


const EmploymentFacts = ({ data }) => {
    const { classes } = useStyles();


    const total = data.DP03_0026E[0];
    const diff = 18;
    const cardData = [
        {
            "label": "White Collar",
            "count": data.DP03_0027E[0] + data.DP03_0029E[0],
            "part": (((data.DP03_0027E[0] + data.DP03_0029E[0]) / data.DP03_0026E[0]) * 100).toFixed(0),
            "tooltip": 'Number of White Collar Workers',
            "color": "#47d6ab"
        },
        {
            "label": "Blue Collar",
            "count": data.DP03_0030E[0] + data.DP03_0031E[0],
            "part": (((data.DP03_0030E[0] + data.DP03_0031E[0]) / data.DP03_0026E[0]) * 100).toFixed(0),
            "tooltip": 'Number of Blue Collar Workers',
            "color": "#03141a"
        },
        {
            "label": "Services",
            "count": data.DP03_0028E[0],
            "part": ((data.DP03_0028E[0] / data.DP03_0026E[0]) * 100).toFixed(0),
            "tooltip": 'Number of Service Workers',
            "color": "#4fcdf7"
        }
    ];

    const segments = cardData.map((segment) => ({
        value: segment.part,
        color: segment.color,
        label: `${segment.part}%`,
        tooltip: segment.tooltip
    }));

    const descriptions = cardData.map((stat) => (
        <Box key={stat.label} sx={{ borderBottomColor: stat.color }} className={classes.stat}>
            <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
                {stat.label}
            </Text>

            <Group position="apart" align="flex-end" spacing={0}>
                <Text fw={700}>{stat.count}</Text>
                <Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
                    {stat.part}%
                </Text>
            </Group>
        </Box>
    ));

    return (
        <Paper withBorder p="md" radius="md" className={classes.paper}>
            <Group position="apart">
                <Group align="flex-end" spacing="xs">
                    <Text fz="xl" fw={700}>
                        {total}
                    </Text>
                    <Text c="teal" className={classes.diff} fz="sm" fw={700}>
                        <span>{diff}%</span>
                        <IconArrowUpRight size="1rem" style={{ marginBottom: rem(4) }} stroke={1.5} />
                    </Text>
                </Group>
                <IconDeviceAnalytics size="1.4rem" className={classes.icon} stroke={1.5} />
            </Group>

            <Text c="dimmed" fz="sm">
                Page views compared to previous month
            </Text>

            <Progress
                sections={segments}
                size={34}
                classNames={{ label: classes.progressLabel }}
                mt={40}
            />
            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'xs', cols: 1 }]} mt="xl">
                {descriptions}
            </SimpleGrid>
        </Paper>
    )
}

export default EmploymentFacts