import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Title, Text, Button, Container, Group, rem } from '@mantine/core';
import { notFoundStyles } from './Styles';


const Missing = () => {
    const { classes } = notFoundStyles();
    const navigate = useNavigate();
  return (
      <Container className={classes.root}>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>You have found a secret place.</Title>
        <Text color="dimmed" size="lg" align="center" className={classes.description}>
          Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
          been moved to another URL.
        </Text>
        <Group position="center">
          <Button variant="subtle" size="md" onClick={() => {navigate('/')}}>
            Take me back to home page
          </Button>
        </Group>
      </Container>
  )
}

export default Missing