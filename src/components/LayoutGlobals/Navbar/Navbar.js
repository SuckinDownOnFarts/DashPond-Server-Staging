import { Header, Group, Button, Divider, Burger, Drawer, ScrollArea, rem, Badge } from '@mantine/core';
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

                    <Group>
                        <Link to='/'>
                            <div>
                                <Logo />
                            </div>
                        </Link>

                        {/* <Badge variant="gradient" gradient={{ from: 'red', to: 'orange' }}>Beta</Badge> */}
                    </Group>


                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        {/* <a href={'/solutions'} className={classes.link}>
                            Solutions
                        </a> */}
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
                            </div>}
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
                    {/* <a href="/solutions" className={classes.link}>
                        Solutions
                    </a> */}
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
                        : <MobileUserAvatar
                            user={auth}
                        />}
                </ScrollArea>
            </Drawer>
        </div>
    );
}

export default Navbar
