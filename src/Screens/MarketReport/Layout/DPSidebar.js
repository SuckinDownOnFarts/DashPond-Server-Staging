import { Navbar, Code, Group, ScrollArea } from '@mantine/core';
import { useDPSidebarStyles } from './Styles/DPLayoutStyles';
import LinksGroup from '../../../components/Globals/LinksGroup';
import UserButton from '../../../components/Globals/UserButton';
import { dataProfileSidebarData as data } from '../../../data/Data';

const DPSidebar = ({ email, firstName, lastName }) => {
  const { classes } = useDPSidebarStyles();

  const links = data.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar height={800} width={{ sm: 300 }} className={classes.navbar}>
      {/* <Navbar.Section className={classes.header}>
        <Group position="apart">
          <Code sx={{ fontWeight: 700 }}>v1.3.2</Code>
        </Group>
      </Navbar.Section> */}

      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      {/* <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name={`${firstName} ${lastName}`}
          email={email}
        />
      </Navbar.Section> */}
    </Navbar>
  );
}

export default DPSidebar