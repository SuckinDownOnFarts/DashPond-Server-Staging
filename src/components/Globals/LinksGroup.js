import { useNavigate } from 'react-router-dom';
import { Group, Box, ThemeIcon, UnstyledButton, Text } from '@mantine/core';
import { LinksGroupStyles as useStyles } from './GlobalStyles/GlobalStyles';

export const LinksGroupMobile = ({ icon: Icon, label, link, handlers }) => {
    const { classes, theme } = useStyles();
    const navigate = useNavigate();

    return (
        <>
            <UnstyledButton onClick={() => {navigate(link); handlers.toggle()}} className={classes.control}>
                <Group position="apart" spacing={0}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon color={theme.colorScheme === 'dark' ? 'orange.7' : 'pink'} size={30}>
                            <Icon size="1.1rem" />
                        </ThemeIcon>
                        <Text ml="md">{label}</Text>
                    </Box>
                </Group>
            </UnstyledButton>
        </>
    );
}

export const LinksGroupDesktop = ({ icon: Icon, label, link }) => {
    const { classes, theme } = useStyles();
    const navigate = useNavigate();

    return (
        <>
            <UnstyledButton onClick={() => navigate(link)} className={classes.control}>
                <Group position="apart" spacing={0}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon color={theme.colorScheme === 'dark' ? 'orange.7' : 'pink'} size={30}>
                            <Icon size="1.1rem" />
                        </ThemeIcon>
                        <Text ml="md" size="xs" c="dimmed" className='font-bold uppercase'>{label}</Text>
                    </Box>
                </Group>
            </UnstyledButton>
        </>
    );
}