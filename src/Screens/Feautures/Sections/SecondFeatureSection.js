import { ThemeIcon, Text, Title, Container, SimpleGrid } from '@mantine/core';
import { useSecondSectionStyles } from '../FeatureStyles/FeatureStyles';
import { secondFeatureSectionData as data } from '../../../data/Data';
import useEmblaCarousel from 'embla-carousel-react'

export function Feature({ icon: Icon, title, description }) {
    const { classes, theme } = useSecondSectionStyles();


    return (
        <div>
            <ThemeIcon variant="filled" color={theme.colorScheme === 'dark' ? 'orange' : 'pink'} size={40} radius={40}>
                <Icon size="1.1rem" stroke={1.5} />
            </ThemeIcon>
            <Text mt="sm" mb={7}>
                {title}
            </Text>
            <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
                {description}
            </Text>
        </div>
    );
}


const SecondFeatureSection = ({ description }) => {
    const { classes } = useSecondSectionStyles();
    const features = data.map((feature, index) => <Feature {...feature} key={index} />);
    const [emblaRef] = useEmblaCarousel()

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title}>
                Easily Gain Market Insight
            </Title>

            <Container size={560} p={0}>
                <Text size="sm" className={classes.description}>
                    {description}
                </Text>
            </Container>

            <Container>
                <div className="overflow-hidden" ref={emblaRef}>      
                    <div className="flex">        
                        <img className={classes.emblaSlide} src={'/images/Dark-Page.png'} alt=''/>        
                        <img className={classes.emblaSlide} src={'/images/Dark-Table.png'} alt=''/>        
                        <img className={classes.emblaSlide} src={'/images/Light-Page.png'} alt=''/>        
                        <img className={classes.emblaSlide} src={'/images/Light-Table.png'} alt=''/>            
                    </div>
                </div>
            </Container>

        </Container>
    );
}

export default SecondFeatureSection



{/* <SimpleGrid
    mt={60}
    cols={3}
    spacing={50}
    breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'xl' },
        { maxWidth: 755, cols: 1, spacing: 'xl' },
    ]}
>
    {features}
</SimpleGrid> */}