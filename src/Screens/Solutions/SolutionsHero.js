import { Badge, Group, Title, Text, Card, SimpleGrid, Container, rem } from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import { HeroStyles as useStyles } from './SolutionStyles/SolutionStyles';

const mockdata = [
    {
        title: 'Population',
        description:
            'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
        icon: IconGauge,
    },
    {
        title: 'Income',
        description:
            'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
        icon: IconUser,
    },
    {
        title: 'Education',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconCookie,
    },
    {
        title: 'Employment',
        description:
            'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconCookie,
    },
];



const SolutionsHero = () => {
    const { classes, theme } = useStyles();

    const features = mockdata.map((feature) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ));

    return (
        <div className={classes.container}>
            <div className='flex flex-col justify-center items-center py-8'>
                <Title order={2} className={classes.title} ta="center" mt="sm">
                    Select Data Insights
                </Title>

                <div className='flex flex-row w-[75%] '>
                    <SimpleGrid cols={4} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                        {features}
                    </SimpleGrid>
                </div>
            </div>





        </div>
    );
}


export default SolutionsHero