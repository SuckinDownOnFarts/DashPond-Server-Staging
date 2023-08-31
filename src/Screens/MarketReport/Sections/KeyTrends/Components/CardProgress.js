import { ThemeIcon, Progress, Text, Group, Badge, Paper, rem } from '@mantine/core';
import { IconSwimming } from '@tabler/icons-react';
import { useCardProgressStyles as useStyles } from './Styles/DPStyles';

const CardProgress = () => {
    const { classes } = useStyles();
    const ICON_SIZE = rem(60);

    return (
        <Paper radius="md" withBorder className={classes.card} mt={`calc(${ICON_SIZE} / 3)`}>
            <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
                <IconSwimming size="2rem" stroke={1.5} />
            </ThemeIcon>

            <Text ta="center" fw={700} className={classes.title}>
                Swimming challenge
            </Text>
            <Text c="dimmed" ta="center" fz="sm">
                32 km / week
            </Text>

            <Group position="apart" mt="xs">
                <Text fz="sm" color="dimmed">
                    Progress
                </Text>
                <Text fz="sm" color="dimmed">
                    62%
                </Text>
            </Group>

            <Progress value={62} mt={5} />

            <Group position="apart" mt="md">
                <Text fz="sm">20 / 36 km</Text>
                <Badge size="sm">4 days left</Badge>
            </Group>
        </Paper>
    );
}

export default CardProgress