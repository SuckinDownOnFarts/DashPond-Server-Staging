import { Navbar, Group, Code, ScrollArea } from '@mantine/core';
import { IconPlayerPlay, IconFileAnalytics, IconCircleDashed, IconHome2, IconBusinessplan, IconHelp, IconVersions } from '@tabler/icons-react';
import UserButton from '../../../components/Globals/UserButton';
import LinksGroup from '../../../components/Globals/LinksGroup';
import { useDocumentationNavbarStyles as useStyles } from '../Documentaion_Styles/DocumentationStyles';
// import { Logo } from './Logo';

const mockdata = [
  { label: 'Documentation Home', icon: IconHome2 },
  {
    label: 'Getting Started',
    icon: IconPlayerPlay,
    // initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Products',
    icon: IconFileAnalytics,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Plans', icon: IconBusinessplan },
  { label: 'Integrations', icon: IconCircleDashed },
  {
    label: 'Releases & Versions',
    icon: IconVersions,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
  { label: 'Support', icon: IconHelp },

];

const DocumentationNavbar = () => {
  const { classes } = useStyles();
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar height={800} width={{ sm: 300 }} p="md" className={classes.navbar}>
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          {/* <Logo width={rem(120)} /> */}
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section>

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      {/* <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Ann Nullpointer"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section> */}
    </Navbar>
  );
}

export default DocumentationNavbar