import { Image, Text, Container, ThemeIcon, Title, SimpleGrid } from '@mantine/core';
import { UseCasesStyles as useStyles } from '../HomeStyles/HomeStyles';

const UseCases = () => {
    const { classes, theme } = useStyles();

    const data = [
        {
            "image": theme.colorScheme === 'dark' ? "/images/UseCases/investor-orange.svg" : "/images/UseCases/investor-pink.svg",
            "title": "Investors",
            "description": "Analyze any prospective investment property ",
            "alt": 'person with charts and graphs'
        },
        {
            "image": theme.colorScheme === 'dark' ? "/images/UseCases/developer-orange.svg" : "/images/UseCases/developer-pink.svg",
            "title": "Developers",
            "description": "Make certain your development opportunities will be profitable",
            "alt": 'A nice neighborhood'
        },
        {
            "image": theme.colorScheme === 'dark' ? "/images/UseCases/broker-orange.svg" : "/images/UseCases/broker-pink.svg",
            "title": "Brokers & Agents",
            "description": "Provide your clients with unparalleled property insights to match your listings to their needs ",
            "alt": 'group of people communicating'
        },
        {
            "image": theme.colorScheme === 'dark' ? "/images/UseCases/drone-orange.svg" : "/images/UseCases/drone-pink.svg",
            "title": "Any RE Professional",
            "description": "Every RE professional relies heavily on demographic insights - why not use a simple solution",
            "alt": 'person flying a drone'
        }
    ]
    

    const items = data.map((item) => (
        <div className={classes.item} key={item.image}>
            <ThemeIcon variant="light" className={classes.itemIcon} size={120} radius="md">
                <Image src={item.image} alt={item.alt}/>
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
                    DashPond's custom built web api handles all the intensive tasks when it comes to cleaning, compiling, and transforming demographic data
                    into an easy to handle format. Thus, making it a pleasure for any real estate professional to make more informed investment decisions.  
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