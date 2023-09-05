import { useNavigate } from 'react-router-dom';
import { Navbar, Tooltip, UnstyledButton, Stack } from '@mantine/core';
import { IconGauge, IconUser, IconLogout } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { profileNavbar as useStyles } from '../ProfileStyles/ProfileStyles';
import LogoutModal from '../../../components/LayoutGlobals/LogoutModal';
import useAuth from '../../../hooks/useAuth';


const NavbarLink = ({ icon: Icon, label, active, onClick }) => {
    const { classes, theme, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })} color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]}>
                <Icon size="1.2rem" stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
};


const Sidebar = ({ active }) => {
    const navigate = useNavigate();
    const { auth } = useAuth();
    const [openLogout, { open, close }] = useDisclosure(false);

    const mockdata = [
        { icon: IconGauge, label: 'Data Profiles', address: `/profile/${auth?.id}/data+profiles` },
        { icon: IconUser, label: 'Account Settings', address: `/profile/${auth?.id}/info` },
    ];

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => navigate(link.address)}
        />
    ));

    return (
        <Navbar
            width={{ base: 80 }}
            p="md"
            className='hidden md:flex'
        >
            <Navbar.Section grow mt={20}>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={0}>
                    <NavbarLink icon={IconLogout} label="Log out" onClick={open} />
                </Stack>
            </Navbar.Section>
            <LogoutModal
                openLogout={openLogout}
                close={close}
            />
        </Navbar>
    )
}

export default Sidebar