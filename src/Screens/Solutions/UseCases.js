import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
// import IMAGES from './images';
import { UseCasesStyles as useStyles } from './SolutionStyles/SolutionStyles';




const UseCases = () => {

    const data = [
        {
            "image": "/images/UseCases/investor.svg",
            "title": "Investors",
            "description": "Azurill can be seen bouncing and playing on its big, rubbery tail"
        },
        {
            "image": "/images/UseCases/developer.svg",
            "title": "Developers",
            "description": "Fans obsess over the particular length and angle of its arms"
        },
        {
            "image": "/images/UseCases/broker.svg",
            "title": "Brokers & Agents",
            "description": "They divvy up their prey evenly among the members of their pack"
        },
        {
            "image": "/images/UseCases/drone.svg",
            "title": "Any RE Professional",
            "description": "Phanpy uses its long nose to shower itself"
        }
    ]
    const { classes, theme } = useStyles();

    const items = data.map((item) => (
        <div className={classes.item} key={item.image}>
            <ThemeIcon variant="light" className={classes.itemIcon} size={120} radius="md">
                <Image src={item.image} />
            </ThemeIcon>

            <div>
                <Text fw={700} fz="lg" className={classes.itemTitle}>
                    {item.title}
                </Text>
                <Text c="dimmed">{item.description}</Text>
            </div>
        </div>
    ));

    return (
        <Container size={900} className={classes.wrapper}>
            <Text className={classes.supTitle}>Use cases</Text>

            <Title className={classes.title} order={2} color={theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.dark[9]}>
                You Don't Need a PhD in Statistics to Analyze Real Estate
            </Title>

            <Container size={660} p={0}>
                <Text color="dimmed" className={classes.description}>
                    Its lungs contain an organ that creates electricity.
                    The crackling sound of electricity can be heard when it exhales.
                    Azurill’s tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow.
                </Text>
            </Container>

            <SimpleGrid
                cols={2}
                spacing={50}
                breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
                style={{ marginTop: 30 }}
            >
                {items}
            </SimpleGrid>
        </Container>
    );
}

export default UseCases