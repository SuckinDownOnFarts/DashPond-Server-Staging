import { useNavigate } from 'react-router-dom';
import { Title, Text, Button, Container } from '@mantine/core';
import { useHeroSectionStyles as useStyles } from '../HomeStyles/HomeStyles';

const HeroSection = () => {
    const { classes, theme } = useStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.wrapper} >
            <div className={classes.inner}>
                <Title className={classes.title}>
                    Back Up Your Real Estate Investment Decisions With the   {' '}
                    <Text component="span" className={classes.highlight} inherit>
                        Right
                    </Text>{' '}
                    Insights
                </Title>

                <Container p={0} size={600}>
                    <Text size="lg" color="white" className={classes.description}>

                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} size="lg" variant="default" color="dark" onClick={() => navigate('/register')}>
                        Get Started
                    </Button>
                    <Button className={classes.control} size="lg" variant='filled' color={theme.colorScheme === 'dark' ? 'orange.5' : 'pink.9'} onClick={() => navigate('/contact')}>
                        Get in touch
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection