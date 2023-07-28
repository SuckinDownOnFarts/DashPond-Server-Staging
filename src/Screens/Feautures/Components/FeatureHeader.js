import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFeatureHeaderStyles } from '../Styles/FeatureStyles';
import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, rem } from '@mantine/core';
import { features } from '../../../data/Data';


const Header = () => {
    const { classes, theme } = useFeatureHeaderStyles();
    const navigate = useNavigate();

    const items = features.map((feature) => (
      <div key={feature.title}>
        <ThemeIcon
          size={44}
          radius="md"
          variant="gradient"
          gradient={{ deg: 133, from: 'yellow', to: 'orange' }}
        >
          <feature.icon size={rem(26)} stroke={1.5} />
        </ThemeIcon>
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <Text c="dimmed" fz="sm">
          {feature.description}
        </Text>
      </div>
    ));

  return (
    <div className={classes.wrapper}>
        <Grid gutter={80}>
            <Col span={12} md={5}>
                <Title className={classes.title} order={2}>
                    A fully featured demographic data report generator for all your real estate listings
                </Title>
                <Text c="dimmed">
                    Build dynamic web powered data reports easier and faster than ever – DashPond includes
                    more than 500 data insights and over 100 unique components to boost transaction volume 
                    {/* Build fully functional accessible web applications faster than ever – Mantine includes
                    more than 120 customizable components and hooks to cover you in any situation */}
                </Text>
    
                <Button
                    variant="outline"
                    color={theme.colorScheme === 'dark' ? 'orange.7' : 'pink'}
                    size="lg"
                    radius="md"
                    mt="xl"
                    onClick={() => navigate('/register')}
                >
                    Get started
                </Button>
            </Col>
            <Col span={12} md={7}>
                <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                    {items}
                </SimpleGrid>
            </Col>
        </Grid>
    </div>
  )
}

export default Header