import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { colorToggleStyles as useStyles } from '../LayoutStyles/LayoutStyles';

const ColorSchemeToggle = () => {
    const { classes } = useStyles();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const theme = useMantineTheme();

    return (
        <Group position="center" className={classes.root}>
            <Switch
                checked={colorScheme === 'dark'}
                className={classes.body}
                onChange={() => toggleColorScheme()}
                size="md"
                onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
                offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
                aria-label="Color Scheme Toggle"
            />
        </Group>
    );
}

export default ColorSchemeToggle