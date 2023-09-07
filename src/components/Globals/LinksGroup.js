import { useNavigate } from 'react-router-dom';
import { Group, Box, ThemeIcon, UnstyledButton } from '@mantine/core';
import { LinksGroupStyles as useStyles } from './GlobalStyles/GlobalStyles';

const LinksGroup = ({ icon: Icon, label, link, handlers }) => {
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
                        <Box ml="md">{label}</Box>
                    </Box>
                </Group>
            </UnstyledButton>
        </>
    );
}

export default LinksGroup