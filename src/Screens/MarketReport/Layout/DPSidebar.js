import { Navbar, ScrollArea } from '@mantine/core';
import { useDPSidebarStyles } from './Styles/DPLayoutStyles';
import LinksGroup from '../../../components/Globals/LinksGroup';
import { dataProfileSidebarData as data } from '../../../data/Data';

const DPSidebar = () => {
    const { classes } = useDPSidebarStyles();

    const links = data.map((item) => (
        <LinksGroup {...item} key={item.label} />
    ));

    return (
        <Navbar width={{ sm: 300 }} className={classes.navbar}>

            <Navbar.Section grow className={classes.links} component={ScrollArea}>
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

        </Navbar>
    );
}

export default DPSidebar