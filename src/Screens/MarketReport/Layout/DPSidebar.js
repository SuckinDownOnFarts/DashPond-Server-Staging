import { useDPSidebarStyles as useStyles } from '../Styles/MRStyles';
import LinksGroup from '../../../components/Globals/LinksGroup';
import { dataProfileSidebarData as data } from '../../../data/Data';
import { IconArrowsMinimize } from '@tabler/icons-react';


const DPSidebar = ({ opened, handlers }) => {
    const { classes, theme } = useStyles();

    const links = data.map((item) => (
        <LinksGroup {...item} key={item.label} link={`${item.link}`} handlers={handlers} />
    ));

    return (
        <div className={opened ? classes.navbar : 'hidden'}>
            <div className='pt-4 pl-4'>
                <button
                    onClick={() => handlers.toggle()}
                    className={theme.colorScheme === 'dark' ? 'flex p-2 rounded-full bg-[#1a1b1e] cursor-pointer' : 'flex p-2 rounded-full bg-[#fcfcfc] cursor-pointer'}
                >
                    <IconArrowsMinimize
                        className={theme.colorScheme === 'dark' ? 'text-slate-100' : 'text-slate-500'}
                    />
                </button>
            </div>

            <div className={classes.links}>
                <div className={classes.linksInner}>
                    {links}
                </div>
            </div>



        </div>
    );
}

export default DPSidebar