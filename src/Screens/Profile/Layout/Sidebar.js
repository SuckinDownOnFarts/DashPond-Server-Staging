import { useNavigate } from 'react-router-dom';
import { Navbar, Tooltip, UnstyledButton, Stack } from '@mantine/core';
import { IconGauge, IconDeviceDesktopAnalytics, IconUser, IconSettings, IconLogout } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useStylesNavbar } from './Styles/ProfileLayoutStyles';
import LogoutModal from '../../../components/LayoutGlobals/LogoutModal';
import useAuth from '../../../hooks/useAuth';


const NavbarLink = ({ icon: Icon, label, active, onClick }) => {
    const { classes, cx } = useStylesNavbar();
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
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
        { icon: IconUser, label: 'Account', address: `/profile/${auth?.id}/info` },
        { icon: IconDeviceDesktopAnalytics, label: 'Insights', address: `/profile/${auth?.id}/insights` },
        { icon: IconGauge, label: 'Data Profiles', address: `/profile/${auth?.id}/data+profiles` },
        { icon: IconSettings, label: 'Billing and Subscriptions', address: `/profile/${auth?.id}/billing+plan` },
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
        >
            <Navbar.Section grow mt={20}>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={0}>
                    <NavbarLink icon={IconLogout} label="Logout" onClick={open} />
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