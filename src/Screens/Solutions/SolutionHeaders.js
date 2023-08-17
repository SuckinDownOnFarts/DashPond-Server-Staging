import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, Container, Title, Text, List, ThemeIcon, Group, Button, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { SolutionHeaderStyles as useStyles } from './SolutionStyles/SolutionStyles';


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
                                <b>Quick, Simple, and Reliable</b> – Analyze more property, faster and easier with extremely accurate data insights
                            </List.Item>
                            <List.Item>
                                <b>Over 500 Individual Measurments</b> – Explore beautiful dynamic reports with highly granular levels of data detail including by radius and drive times
                            </List.Item>
                            <List.Item>
                                <b>Explore Anywhere</b> – Each report can be found at it's own web address, or you can export the data for offline usage
                            </List.Item>
                        </List>
                        <Group mt={30}>
                            <Button radius="xl" size="md" className={classes.control} onClick={() => navigate('/property+search/address+input')}>
                                Start Searching
                            </Button>
                        </Group>
                    </div>

                    <Image src='/images/solution-header-image.svg' className={classes.image} />
                </div>
            </Container>
        </div>
    );
}

export default SolutionHeaders