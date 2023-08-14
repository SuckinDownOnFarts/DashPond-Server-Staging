import { Header, HoverCard, Group, Button, UnstyledButton, Text, SimpleGrid, ThemeIcon, Anchor, Divider, Center, Box, Burger, Drawer, Collapse, ScrollArea, rem } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Logo from '../../Globals/Logo';
import { useDisclosure } from '@mantine/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { navbarFeatureList } from '../../../data/Data';
import UserAvatar from './UserAvatar';
import useAuth from '../../../hooks/useAuth';
import { BASE_URL } from '../../../data/Data';
import { navbarStyles } from '../LayoutStyles/LayoutStyles';
import ColorSchemeToggle from './ColorSchemeToggle';

const Navbar = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = navbarStyles();
    const { auth } = useAuth();
    const navigate = useNavigate();

    const links = navbarFeatureList.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group noWrap align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                    <item.icon size={rem(22)} color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" color="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    return (
        <div className='sticky top-0 z-50'>
            <Header height={60} px="md">
                <Group position="apart" sx={{ height: '100%' }}>

                    <Link to='/'>
                        <div>
                            <Logo />
                        </div>
                    </Link>


                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        <a href={`${BASE_URL}/documentation/home`} className={classes.link}>
                            Documentation
                        </a>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <a href={`${BASE_URL}/dashpond+features`} className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Features
                                        </Box>
                                        <IconChevronDown size={16} color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]} />
                                    </Center>
                                </a>
                            </HoverCard.Target>

                            <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                                <Group position="apart" px="md">
                                    <Text fw={500}>Features</Text>
                                    <Anchor href={`${BASE_URL}/dashpond+features`} fz="xs" color={theme.colorScheme === 'dark' ? 'orange.7' : 'pink.7'}>
                                        View all
                                    </Anchor>
                                </Group>

                                <Divider
                                    my="sm"
                                    mx="-md"
                                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.4'}
                                />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>

                                {/* <Divider
                                    my="sm"
                                    mx="-md"
                                    color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.4'}
                                /> */}

                                <div className={auth.accessToken ? 'hidden' : classes.dropdownFooter} >
                                    <Group position="apart">
                                        <div>
                                            <Text fw={500} fz="sm">
                                                Get started
                                            </Text>
                                            <Text size="xs" color="dimmed">
                                                Create an account and access our expanding product assortment
                                            </Text>
                                        </div>
                                        <Button variant="default" onClick={() => navigate('/register')}>Get started</Button>
                                    </Group>
                                </div>
                            </HoverCard.Dropdown>
                        </HoverCard>

                        <a href={`${BASE_URL}/pricing`} className={classes.link}>
                            Pricing
                        </a>
                        <a href={`${BASE_URL}/products`} className={classes.link}>
                            Products
                        </a>
                        <a href={`${BASE_URL}/contact`} className={classes.link}>
                            Contact
                        </a>

                    </Group>

                    <Group>
                        
                        <ColorSchemeToggle />
                        {!auth?.accessToken 
                            ? <div>
                                <Group className={classes.hiddenMobile}>
                                    <Button
                                        onClick={() => navigate('/login')}
                                        variant="default"
                                    >
                                        Log in
                                    </Button>

                                    <Button
                                        onClick={() => navigate('/register')}
                                        variant="filled"
                                        gradient={theme.colorScheme === 'dark' ? 'orange' : 'pink'}
                                    >
                                        Sign up
                                    </Button>
                                </Group>

                                <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                            </div>
                            : <UserAvatar
                                user={auth}
                            />}
                    </Group>
                </Group>

            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <UnstyledButton className={classes.link} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                                Features
                            </Box>
                            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a href="#" className={classes.link}>
                        Learn
                    </a>
                    <a href="#" className={classes.link}>
                        Academy
                    </a>


                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md">
                        <Button onClick={() => navigate('/login')} variant="default">Log in</Button>
                        <Button onClick={() => navigate('/register')} variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </div>
    );
}

export default Navbar