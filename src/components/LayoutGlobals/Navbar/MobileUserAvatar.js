import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Tabs, Container, Button, Group, Text, Menu, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconHeart, IconStar, IconSettings, IconSwitchHorizontal, IconChevronDown } from '@tabler/icons-react';
import LogoutModal from '../LogoutModal';
import { UserAvatarStyles as useStyles } from '../LayoutStyles/LayoutStyles';


const UserAvatar = ({ user }) => {
    const { classes, theme, cx } = useStyles();
    const [openLogout, { open, close }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={classes.hiddenDesktop}>
            <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
            >
                <Menu.Target>
                    <Button
                        className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                        variant='outline'
                        color={theme.colorScheme === 'dark' ? 'orange.7' : 'pink'}
                    >
                        <Group spacing={7}>
                            <Avatar src={!user.image ? '/images/office1.jpg' : user.image} alt={user.email} radius="xl" size={20} />
                            <IconChevronDown size={rem(12)} stroke={1.5} color={theme.colorScheme === 'dark' ? theme.colors.orange[5] : theme.colors.pink[3]} />
                        </Group>
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item
                        icon={<IconHeart size="0.9rem" stroke={1.5} color={theme.colors.red[6]} />}
                        onClick={() => navigate(`/profile/${user.id}/data+profiles`)}
                    >
                        Your data profiles
                    </Menu.Item>

                    <Menu.Item
                        icon={<IconSettings size="0.9rem" stroke={1.5} />}
                        onClick={() => navigate(`/profile/${user.id}/info`)}
                    >
                        Account settings
                    </Menu.Item>

                    <Menu.Divider />


                    <Menu.Item
                        icon={<IconLogout size="0.9rem" stroke={1.5} />}
                        onClick={open}
                    >
                        Logout
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <LogoutModal
                openLogout={openLogout}
                close={close}
            />
            {/* <Container>
                <Tabs
                    defaultValue="Home"
                    variant="outline"
                    classNames={{
                        root: classes.tabs,
                        tabsList: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                </Tabs>
            </Container> */}
        </div>
    )
}

export default UserAvatar