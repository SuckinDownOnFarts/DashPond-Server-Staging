import { Header, Group, Button, Divider, Burger, Drawer, ScrollArea, rem } from '@mantine/core';
import Logo from '../../Globals/Logo';
import { useDisclosure } from '@mantine/hooks';
import { Link, useNavigate } from 'react-router-dom';
import DesktopUserAvatar from './DesktopUserAvatar';
import MobileUserAvatar from './MobileUserAvatar';
import useAuth from '../../../hooks/useAuth';
import { navbarStyles } from '../LayoutStyles/LayoutStyles';
import ColorSchemeToggle from './ColorSchemeToggle';

const Navbar = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, theme } = navbarStyles();
    const { auth } = useAuth();
    const navigate = useNavigate();

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
                        <a href={'/solutions'} className={classes.link}>
                            Solutions
                        </a>
                        <a href={'/property+search/address+input'} className={classes.link}>
                            Property Search
                        </a>
                        <a href={'/contact'} className={classes.link}>
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


                            </div>
                            : <div>
                                <DesktopUserAvatar
                                    user={auth}
                                />
                                <MobileUserAvatar
                                    user={auth}
                                />
                            </div> } 
                        <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
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

                    <a href="/" className={classes.link}>
                        Home
                    </a>
                    <a href="/solutions" className={classes.link}>
                        Solutions
                    </a>
                    <a href="/property+search/address+input" className={classes.link}>
                        Property Search
                    </a>
                    <a href="/contact" className={classes.link}>
                        Contact
                    </a>


                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.5'} />

                    {!auth?.accessToken
                        ? <Group position="center" grow pb="xl" px="md">
                            <Button
                                onClick={() => {
                                    toggleDrawer();
                                    navigate('/login');
                                }}
                                variant="default"
                            >
                                Log in
                            </Button>

                            <Button
                                onClick={() => {
                                    toggleDrawer();
                                    navigate('/register');
                                }}
                                variant="filled"
                                gradient={theme.colorScheme === 'dark' ? 'orange' : 'pink'}
                            >
                                Sign up
                            </Button>
                        </Group>
                        : null}
                </ScrollArea>
            </Drawer>
        </div>
    );
}

export default Navbar


{/* <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
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
                                /> 

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
                        </HoverCard> */}