import { Title, Text, Button, Container } from '@mantine/core';
import Dots from './Dots';
import { useHeroSectionStyles as useStyles } from '../Styles/FeatureStyles';

const HeroSection = () => {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1700}>
      <Dots className={classes.dots} style={{ left: 0, top: 20 }} />
      <Dots className={classes.dots} style={{ left: 160, top: 220 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 220 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 20 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 220 }} />
      <Dots className={classes.dots} style={{ right: 160, top: 220 }} />


      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated {' '}
          <Text component="span" className={classes.highlight} inherit>
            report generation
          </Text>{' '}
          for any marketing requirement
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Build reliable demographic reports to better help clients make more informed buying and leasing decisions. 
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button className={classes.control} size="lg" variant="default" color="gray">
            View Documentation
          </Button>
          <Button className={classes.control} size="lg">
            Get in touch 
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection