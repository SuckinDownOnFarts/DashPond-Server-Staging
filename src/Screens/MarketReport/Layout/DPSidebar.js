import { useDPSidebarStyles as useStyles} from '../Styles/MRStyles';
import LinksGroup from '../../../components/Globals/LinksGroup';
import { dataProfileSidebarData as data } from '../../../data/Data';

const DPSidebar = () => {
    const { classes } = useStyles();

    const links = data.map((item) => (
        <LinksGroup {...item} key={item.label} link={`${item.link}`}/>
    ));

    return (
        <div className={classes.navbar}>

            <div className={classes.links}>
                <div className={classes.linksInner}>
                    {links}
                </div>
            </div>

        </div>
    );
}

export default DPSidebar