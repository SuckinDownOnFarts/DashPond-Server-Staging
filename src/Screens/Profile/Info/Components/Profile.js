import { Text, Group } from '@mantine/core';
import { IconPhoneCall, IconAt, IconBuildingSkyscraper } from '@tabler/icons-react';
import { useProfileStyles as useStyles } from '../InfoStyles/InfoStyles';


const Profile = ({  name, company, phone, email }) => {
    const { classes } = useStyles();
    return (
        <div>
            <Group noWrap>
                <div>
                    <Text fz="lg" fw={700} className={classes.name}>
                        {name}
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                        <IconAt stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            {email}
                        </Text>
                    </Group>

                    <Group noWrap spacing={10} mt={5}>
                        <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            {phone}
                        </Text>
                    </Group>

                    <Group noWrap spacing={10} mt={5}>
                        <IconBuildingSkyscraper stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            {company}
                        </Text>
                    </Group>
                </div>
            </Group>
        </div>
    );
}

export default Profile