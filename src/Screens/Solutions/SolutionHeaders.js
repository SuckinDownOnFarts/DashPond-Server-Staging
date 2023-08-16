import React from 'react'
import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { SolutionHeaderStyles as useStyles } from './SolutionStyles/SolutionStyles';


const SolutionHeaders = () => {
    const { classes, theme } = useStyles();
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
                            DashPond's web api makes it simple to see professional market analysis for any prospective property
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
                                <b>TypeScript based</b> – build type safe applications, all components and hooks
                                export types
                            </List.Item>
                            <List.Item>
                                <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                                any project
                            </List.Item>
                            <List.Item>
                                <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                                keyboard
                            </List.Item>
                        </List>

                        {/* <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control}>
                                Get started
                            </Button>
                            <Button variant="default" radius="xl" size="md" className={classes.control}>
                                Source code
                            </Button>
                        </Group> */}
                    </div>
                
                    <Image src='/images/solution-header-image.svg' className={classes.image} />
                </div>
            </Container>
        </div>
    );
}

export default SolutionHeaders