import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem } from '@mantine/core';
import {
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconHome2,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { useStylesNavbar } from './Styles/Styles';
import LogoutModal from '../../../components/LayoutGlobals/LogoutModal';



  const NavbarLink = ({ icon: Icon, label, active, onClick }) => {
    const { classes, cx } = useStylesNavbar();
    return (
      <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
        <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
          <Icon size="1.2rem" stroke={1.5} />
        </UnstyledButton>
      </Tooltip>
    );
  }

  const mockdata = [
    { icon: IconUser, label: 'Account',  },
    { icon: IconDeviceDesktopAnalytics, label: 'Insights' },
    { icon: IconGauge, label: 'Data Profiles' },
    { icon: IconSettings, label: 'Billing and Subscriptions' },
    // { icon: IconHome2, label: 'Home' },
    // { icon: IconCalendarStats, label: 'Releases' },
    // { icon: IconFingerprint, label: 'Security' },
  ];



const Sidebar = () => {
    const [active, setActive] = useState(2);
    const [openLogout, { open, close }] = useDisclosure(false);

    const links = mockdata.map((link, index) => (
        <NavbarLink
          {...link}
          key={link.label}
          active={index === active}
          onClick={() => setActive(index)}
        />
      ));

  return (
    <Navbar
        // height={750}
        width={{ base: 80 }}
        p="md"
        sx={(theme) => ({
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
            .background,
        })}
    >
    <Navbar.Section grow mt={20}>
      <Stack justify="center" spacing={0}>
        {links}
      </Stack>
    </Navbar.Section>
    <Navbar.Section>
      <Stack justify="center" spacing={0}>
        <NavbarLink icon={IconLogout} label="Logout" onClick={open}/>
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