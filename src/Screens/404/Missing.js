import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Text, Button, Container, Group, Image } from '@mantine/core';
import { notFoundStyles } from './404Styles';


const Missing = () => {
    const { classes, theme } = notFoundStyles();
    const navigate = useNavigate();
    return (
        <Container className={classes.root}>
            <Image src={theme.colorScheme === 'dark' ? '/images/404/404-orange.svg' : '/images/404/404-pink.svg'} className={classes.image} />
            <Title className={classes.title}>You have found a secret place.</Title>
            <Text color="dimmed" size="lg" align="center" className={classes.description}>
                Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
                been moved to another URL.
            </Text>
            <Group position="center">
                <Button size="md" onClick={() => { navigate('/') }}>
                    Take me back to home page
                </Button>
            </Group>
        </Container>
    )
}

export default Missing