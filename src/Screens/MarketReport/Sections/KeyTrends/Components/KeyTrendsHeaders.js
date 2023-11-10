import React from 'react';
import { Group, Paper, Text, ThemeIcon, SimpleGrid } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import { useKeyFactsStyles as useStyles } from '../../../Styles/MRStyles';

const KeyFacts = ({ data, proj }) => {

    console.log(data);

    const dData = [
        // {
        //     "title": "Current Population - 5 Min",
        //     "value": data.total_population[0],
        //     "key": 4
        // },
        // {
        //     "title": "Current Population - 10 Min",
        //     "value": data.total_population[1],
        //     "key": 5
        // },
        // {
        //     "title": "Current Population - 15 Min",
        //     "value": data.total_population[2],
        //     "key": 6
        // },
        {
            "title": "5 Year Population Growth Rate - 5 Min",
            "value": (((proj[0].DP05_0002E[5] + proj[0].DP05_0003E[5]) - (proj[0].DP05_0002E[0] + proj[0].DP05_0003E[0])) / (proj[0].DP05_0002E[0] + proj[0].DP05_0003E[0])).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            "key": 1
        },
        {
            "title": "5 Year Population Growth Rate - 10 Min",
            "value": (((proj[1].DP05_0002E[5] + proj[1].DP05_0003E[5]) - (proj[1].DP05_0002E[0] + proj[1].DP05_0003E[0])) / (proj[1].DP05_0002E[0] + proj[1].DP05_0003E[0])).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            "key": 2
        },
        {
            "title": "5 Year Population Growth Rate - 15 Min",
            "value": (((proj[2].DP05_0002E[5] + proj[2].DP05_0003E[5]) - (proj[2].DP05_0002E[0] + proj[2].DP05_0003E[0])) / (proj[2].DP05_0002E[0] + proj[2].DP05_0003E[0])).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}),
            "key": 3
        },
    ]

    const { classes } = useStyles();

    const stats = dData.map((stat) => {
        const DiffIcon = parseInt(stat.value.replace(/,/g, '')) > 0 ? IconArrowUpRight : IconArrowDownRight;

        return (
            <Paper withBorder p="md" radius="md" key={stat.title}>
                <div className='w-full'>
                    <Group position="apart">
                        <div>
                            <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
                                {stat.title}
                            </Text>
                            <Text fw={700} fz="lg">
                                {stat.value}
                            </Text>
                        </div>
                        <ThemeIcon
                            color="gray"
                            variant="light"
                            style={{
                                color: parseInt(stat.value.replace(/,/g, '')) > 0 ? 'teal' : 'red',
                            }}
                            size={38}
                            radius="md"
                        >
                            <DiffIcon size="1.8rem" stroke={1.5} />
                        </ThemeIcon>
                    </Group>
                    <Text c="dimmed" fz="sm" mt="xs">
                        <Text component="span" c={stat.diff > 0 ? 'teal' : 'red'} fw={700}>
                            {stat.diff}%
                        </Text>{' '}
                        {stat.diff > 0 ? 'increase' : 'decrease'} compared to last month
                    </Text>
                </div>
            </Paper>
        );
    });

    return (
        <div className={classes.root}>
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {stats}
          </SimpleGrid>
        </div>
    );
}

export default KeyFacts