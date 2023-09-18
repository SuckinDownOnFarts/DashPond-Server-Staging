import { Badge, Group, Title, Text, Card, SimpleGrid, Container, rem } from '@mantine/core';
import { useThirdSectionStyles as useStyles } from '../HomeStyles/HomeStyles';
import { thirdFeatureSectionData as data } from '../../../data/Data';


const ThirdFeatureSection = () => {
    const { classes, theme } = useStyles();
    const features = data.map((feature) => (
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
        <div className='mt-16'>
            <Container size="lg" py="xl">
                <Group position="center">
                    <Badge variant="filled" size="lg">
                        Evaluate Properties with Confidence
                    </Badge>
                </Group>

                <Title order={2} className={classes.title} ta="center" mt="sm" color={theme.colorScheme === 'dark' ? 'white' : 'black'}>
                    Take the Guesswork out of your Market Research
                </Title>

                <Text color={theme.colorScheme === 'dark' ? "dimmed": null} className={classes.description} ta="center" mt="md">
                    We build our market summaries with demographic data pulled directly from the Census and American Community Survey
                </Text>

                <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                    {features}
                </SimpleGrid>
            </Container>
        </div>
    );
}

export default ThirdFeatureSection