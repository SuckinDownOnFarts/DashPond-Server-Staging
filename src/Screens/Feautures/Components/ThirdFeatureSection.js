import { Badge, Group, Title, Text, Card, SimpleGrid, Container, rem } from '@mantine/core';
// import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
import { useThirdSectionStyles as useStyles } from '../Styles/FeatureStyles';
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
        <Container size="lg" py="xl">
            <Group position="center">
                <Badge variant="filled" size="lg">
                    Best company ever
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Integrate effortlessly with any technology stack
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
                hunger drives it to try biting a Steel-type Pokémon.
            </Text>

            <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                {features}
            </SimpleGrid>
        </Container>
    );
}

export default ThirdFeatureSection