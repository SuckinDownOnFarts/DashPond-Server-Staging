import React from 'react';
import { Group, Paper, Text, ThemeIcon, SimpleGrid } from '@mantine/core';
import { IconArrowUpRight, IconArrowDownRight } from '@tabler/icons-react';
import { useKeyFactsStyles as useStyles } from '../../../Styles/MRStyles';

const KeyFacts = ({ data }) => {

    const dData = [
        {
            "title": "Population 3 Mile" ,
            "value": data.total_population[0],
            "key": 1
        },
        {
            "title": "Population 5 Mile",
            "value": data.total_population[1],
            "key": 2
        },
        {
            "title": "Population 10 Mile",
            "value": data.total_population[2],
            "key": 3
        },
        {
            "title": "Median Age 3 Mile",
            "value": data.median_age[0],
            "key": 4
        },
        {
            "title": "Median Age 5 Mile",
            "value": data.median_age[1],
            "key": 5
        },
        {
            "title": "Median Age 10 Mile",
            "value": data.median_age[2],
            "key": 6
        },
        {
            "title": "Average Number in Households",
            "value": data.household_size[0],
            "key": 7
        },
        {
            "title": "Average Number in Households",
            "value": data.household_size[1],
            "key": 8
        },
        {
            "title": "Average Number in Households",
            "value": data.household_size[2],
            "key": 9
        },
        {
            "title": "Median Household Income",
            "value": `$ ${data.median_hh_income[0]}`,
            "key": 10
        },
        {
            "title": "Median Household Income",
            "value": `$ ${data.median_hh_income[1]}`,
            "key": 11
        },
        {
            "title": "Median Household Income",
            "value": `$ ${data.median_hh_income[2]}`,
            "key": 12
        },
        {
            "title": "Unemployment Rate",
            "value": data.unemployment_rate[0],
            "key": 13
        },
        {
            "title": "Unemployment Rate",
            "value": data.unemployment_rate[1],
            "key": 14
        },
        {
            "title": "Unemployment Rate",
            "value": data.unemployment_rate[2],
            "key": 15
        },
        {
            "title": "Percent of College Graduates",
            "value": data.college_degrees[0],
            "key": 16
        },
        {
            "title": "Percent of College Graduates",
            "value": data.college_degrees[1],
            "key": 17
        },
        {
            "title": "Percent of College Graduates",
            "value": data.college_degrees[2],
            "key": 18
        },
    ]

    const { classes } = useStyles();
    const stats = dData.map((stat) => {
        const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

        return (
            <Paper withBorder p="md" radius="md" key={stat.key}>
                <Group position="apart">
                    <div>
                        <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={classes.label}>
                            {stat.title}
                        </Text>
                        <Text fw={700} fz="xl">
                            {stat.value}
                        </Text>
                    </div>
                    {/* <ThemeIcon
                        color="gray"
                        variant="light"
                        sx={(theme) => ({ color: stat.diff > 0 ? theme.colors.teal[6] : theme.colors.red[6] })}
                        size={38}
                        radius="md"
                    >
                        <DiffIcon size="1.8rem" stroke={1.5} />
                    </ThemeIcon> */}
                </Group>
                {/* <Text c="dimmed" fz="sm" mt="md">
                    <Text component="span" c={stat.diff > 0 ? 'teal' : 'red'} fw={700}>
                        {stat.diff}%
                    </Text>{' '}
                    {stat.diff > 0 ? 'increase' : 'decrease'} compared to last year
                </Text> */}
            </Paper>
        );
    });

    return (
        <div className={classes.root}>
            <SimpleGrid cols={6} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {stats}
            </SimpleGrid>
        </div>
    );
}

export default KeyFacts