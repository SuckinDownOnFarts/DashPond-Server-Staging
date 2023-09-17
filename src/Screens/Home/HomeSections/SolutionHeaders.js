import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Container, Title, Text, List, ThemeIcon, Group, Button, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { SolutionHeaderStyles as useStyles } from '../HomeStyles/HomeStyles';


const SolutionHeaders = () => {
    const { classes, theme } = useStyles();
    const navigate = useNavigate();

    return (
        <div className='mt-8'>
            <Container >
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title fz='lg' tt="uppercase" color={theme.colorScheme === 'dark' ? 'orange' : 'pink'}>
                            Solutions
                        </Title>
                        <Title className={classes.title}>
                            Analyze, Forecast and <br /> Screen Properties Like a Pro
                        </Title>
                        <Text color="dimmed" mt="md">
                            DashPond makes it easy to leverage professional market analysis for real estate investment decisions
                        </Text>
                        <List
                            mt={30}
                            spacing="sm"
                            size="sm"
                            icon={
                                <ThemeIcon size={20} radius="xl">
                                    <IconCheck size={rem(12)} stroke={1.5} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>
                                <b>Sign up for Beta</b> – Click on the sign up button in the navbar to gain access to our limited beta release
                            </List.Item>
                            <List.Item>
                                <b>Enter an Address and Verify its Location</b> – Once you've signed up, head to the property search page to enter any U.S. address and verify its location on the map
                            </List.Item>
                            <List.Item>
                                <b>Explore Your Market Report</b> – Finally, you'll be redirected to a dynamically generated market summary for that property
                            </List.Item>
                        </List>
                        <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control} onClick={() => navigate('/property+search/address+input')}>
                                Start Searching
                            </Button>
                        </Group>
                    </div>

                    <Image src='/images/solution-header-image.svg' className={classes.image} alt='Picture of woman at desk on her laptop'/>
                </div>
            </Container>
        </div>
    );
}

export default SolutionHeaders