import { Title, Text, Card, SimpleGrid, rem } from '@mantine/core';
import { IconFriends, IconCash, IconHome, IconCertificate } from '@tabler/icons-react';
import { HeroStyles as useStyles } from '../HomeStyles/HomeStyles';

const mockdata = [
    {
        title: 'Population',
        description:
            'Total population, gender and age breakdowns, current, projected, and past population growth, migration flows, race breakdowns and more.',
        icon: IconFriends,
    },
    {
        title: 'Income',
        description:
            'Per capita Income, median and mean household income, income breakdowns, mortgage and rent costs, poverty figures, and more.',
        icon: IconCash,
    },
    {
        title: 'Housing',
        description:
            'Total housing units, size, age and values, renters vs. owner occupied, units in structure and more.',
        icon: IconHome,
    },
    {
        title: 'Employment & Education',
        description:
            'School enrollment figures, educational attainment, labor force statistics, employment and industry figures, occupations and classes of workers, and more.',
        icon: IconCertificate,
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
                <Title order={2} className={classes.title} ta="center" mt="sm" tt='uppercase'>
                    Select Data Insights
                </Title>

                <div className='flex flex-row lg:w-[90%] zero:px-8'>
                    <SimpleGrid cols={4} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'xl', cols: 2 }, {maxWidth: 'sm', cols: 1}]}>
                        {features}
                    </SimpleGrid>
                </div>
            </div>
        </div>
    );
}


export default SolutionsHero