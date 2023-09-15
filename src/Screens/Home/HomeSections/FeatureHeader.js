import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFeatureHeaderStyles as useStyles } from '../HomeStyles/HomeStyles';
import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, rem } from '@mantine/core';
import { features } from '../../../data/Data';


const Header = () => {
    const { classes, theme } = useStyles();
    const navigate = useNavigate();

    const items = features.map((feature) => (
        <div key={feature.title}>
            <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={theme.colorScheme === 'dark' ? { deg: 133, from: 'yellow', to: 'orange' } : { deg: 133, from: 'red', to: 'pink' }}
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
                        Market Intelligence at the Click of a Button
                    </Title>
                    <Text c="dimmed">
                        Analyze real estate opportunities by comparing over 500 demographic insights all bundled together in a dynamically 
                        generated report - as easily as typing in an address 
                    </Text>

                    <Button
                        variant="outline"
                        color={theme.colorScheme === 'dark' ? 'orange.7' : 'pink'}
                        size="lg"
                        radius="md"
                        mt="xl"
                        onClick={() => navigate('/register')}
                    >
                        Start Searching
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