import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, createStyles, Title, Text, Anchor, rem } from '@mantine/core';
import { BASE_URL } from '../../data/Data';
import useAuth from '../../hooks/useAuth';

const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: rem(900),
      backgroundSize: 'cover',
      backgroundImage:
        'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
    },
  
    form: {
      borderRight: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
      minHeight: rem(900),
      maxWidth: rem(450),
      paddingTop: rem(80),
  
      [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  }));

const AlreadyLoggedIn = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const { classes } = useStyles();
     return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Whoops! Looks like you're already sign in.
                </Title>

                <Text fw={700} ta="center" mt="md">
                    Wanna see your Account?{' '}
                    <Anchor href={`${BASE_URL}/profile/${auth?.id}/info`} weight={700} onClick={() => navigate(`/profile/${auth?.id}/info`)}>
                        Account
                    </Anchor>
                </Text>
                <Text fw={700} ta="center" mt="md">
                    Navigate to the homepage?{' '}
                    <Anchor href="#" weight={700} onClick={() => navigate('/')}>
                        Home
                    </Anchor>
                </Text>
                <Text fw={700} ta="center" mt="md">
                    Create a dashboard?{' '}
                    <Anchor href="#" weight={700} onClick={() => navigate('/create/address+input')}>
                        Create
                    </Anchor>
                </Text>

                <Text ta="center" mt="md">
                    Would you like to sign out and login again?{' '}
                    <Anchor href="#" weight={700} onClick={(event) => event.preventDefault()}> 
                    Sign out and re-login
                    </Anchor>
                </Text>
            </Paper>
        </div>
    )
}

export default AlreadyLoggedIn