import { Title, Text, Button, Container } from '@mantine/core';
import Dots from './Dots';
import { useHeroSectionStyles as useStyles } from '../FeatureStyles/FeatureStyles';

const HeroSection = () => {
    const { classes, theme } = useStyles();

    return (
        <div className={classes.wrapper} >
            <div className={classes.inner}>
                <Title className={classes.title}>
                    Make the  {' '}
                    <Text component="span" className={classes.highlight} inherit>
                        Correct
                    </Text>{' '}
                    Real Estate Decision
                </Title>

                <Container p={0} size={600}>
                    <Text size="lg" color="white" className={classes.description}>
                        
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} size="lg" variant="default" color="dark">
                        View Documentation
                    </Button>
                    <Button className={classes.control} size="lg" variant='filled' color={theme.colorScheme === 'dark' ? 'orange.5' : 'pink'}>
                        Get in touch
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection