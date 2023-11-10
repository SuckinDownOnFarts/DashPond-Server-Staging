import { useDPSidebarStyles as useStyles } from '../Styles/MRStyles';
import { LinksGroupDesktop, LinksGroupMobile} from '../../../components/Globals/LinksGroup';
import { dataProfileSidebarData as data } from '../../../data/Data';
import { IconArrowBarToLeft } from '@tabler/icons-react';
import { UnstyledButton } from '@mantine/core';
import { Navbar, Code, Group, ScrollArea } from '@mantine/core';


const DPSidebar = ({ opened, handlers }) => {
    const { classes, theme } = useStyles();

    const linksDesktop = data.map((item) => (
        <LinksGroupDesktop {...item} key={item.label} link={`${item.link}`} />
    ));

    const linksMobile = data.map((item) => (
        <LinksGroupMobile {...item} key={item.label} link={`${item.link}`} handlers={handlers} />
    ));

    return (
        <div>
            <Navbar height={800} width={{ sm: 250 }} className={[classes.navbar, classes.hiddenMobile]}>
                <Navbar.Section className={classes.header}>
                    <Group position="apart">
                        <Code sx={{ fontWeight: 700 }}>v1.3.2</Code>
                    </Group>
                </Navbar.Section>

                <Navbar.Section grow className={classes.links} component={ScrollArea}>
                    <div className={classes.linksInner}>{linksDesktop}</div>
                </Navbar.Section>
            </Navbar>


            <Navbar height={800} width={{ sm: 250 }} className={[classes.hiddenDesktop, opened ? classes.navbar : 'hidden']}>
                <div className={[classes.hiddenDesktop]}>
                    <div className='pt-4'>
                        <UnstyledButton
                            onClick={() => handlers.toggle()}
                            className={theme.colorScheme === 'dark' ? 'flex bg-[#1a1b1e] cursor-pointer' : 'flex p-2 rounded-full bg-[#fcfcfc] cursor-pointer'}
                        >
                            <IconArrowBarToLeft
                                className={theme.colorScheme === 'dark' ? 'text-slate-100' : 'text-slate-500'}
                            />
                        </UnstyledButton>
                    </div>
                </div>

                <Navbar.Section grow className={classes.links} component={ScrollArea}>
                    <div className={classes.linksInner}>
                        {linksMobile}
                    </div>
                </Navbar.Section>
            </Navbar>
        </div>
    );
}

export default DPSidebar