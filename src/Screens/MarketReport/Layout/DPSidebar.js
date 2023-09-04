import { useDPSidebarStyles as useStyles} from '../Styles/MRStyles';
import LinksGroup from '../../../components/Globals/LinksGroup';
import { dataProfileSidebarData as data } from '../../../data/Data';
import { IconArrowLeft } from '@tabler/icons-react'
import { Code } from '@mantine/core';

const DPSidebar = () => {
    const { classes } = useStyles();

    const links = data.map((item) => (
        <LinksGroup {...item} key={item.label} link={`${item.link}`}/>
    ));

    return (
        <div className={classes.navbar}>
            {/* <div className={classes.topSection}>
                <div className='flex align-middle pl-4'>
                    <IconArrowLeft />
                </div>
                <div className='flex align-middle'>
                    <Code>v1.0.1</Code>
                </div>
            </div> */}

            <div className={classes.links}>
                <div className={classes.linksInner}>
                    {links}
                </div>
            </div>

        </div>
    );
}

export default DPSidebar