import { ThemeIcon, Text, Title, Container, Button } from '@mantine/core';
import { useSecondSectionStyles as useStyles } from '../HomeStyles/HomeStyles';
import useEmblaCarousel from 'embla-carousel-react'
import { useNavigate } from 'react-router-dom';
import { IconExternalLink } from '@tabler/icons-react'

export function Feature({ icon: Icon, title, description }) {
    const { theme } = useStyles();

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

const SecondFeatureSection = () => {
    const { classes, theme } = useStyles();
    const [emblaRef] = useEmblaCarousel();

    const navigate = useNavigate();

    return (
        <Container className={classes.wrapper}>
            <Title className={classes.title}>
                Easily Gain Market Insight
            </Title>

            <Container size={560} pb={10}>
                <Text size="md" className={classes.description}>
                    Explore hidden market trends, evaluate more opportunities, and make reliable decisions through our dynamic property reports
                </Text>
            </Container>

            <Container className='zero:hidden frontPageCarousel:flex'>
                <div className="overflow-hidden" ref={emblaRef}>
                    {theme.colorScheme === 'dark'
                        ? <div className="flex">
                            <img className={classes.emblaSlide} src={'/images/SampleReports/Dark-Page.png'} alt='' />
                            <img className={classes.emblaSlide} src={'/images/SampleReports/Dark-Table.png'} alt='' />
                        </div>
                        : <div className="flex">
                            <img className={classes.emblaSlide} src={'/images/SampleReports/Light-Page.png'} alt='' />
                            <img className={classes.emblaSlide} src={'/images/SampleReports/Light-Table.png'} alt='' />
                        </div>
                    }
                </div>
            </Container>

            <div className='flex w-full justify-center mt-8'>
                <Button component="a" href='/market+report/1006/population' target='_blank' leftIcon={<IconExternalLink size="0.9rem" />}>
                    Explore a Sample Report
                </Button>

            </div>

        </Container>
    );
}

export default SecondFeatureSection