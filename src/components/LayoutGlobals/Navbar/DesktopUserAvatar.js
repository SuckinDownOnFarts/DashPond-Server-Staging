import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Tabs, Container, Button, Menu, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconHeart, IconSettings, IconChevronDown } from '@tabler/icons-react';
import LogoutModal from '../LogoutModal';
import { UserAvatarStyles as useStyles } from '../LayoutStyles/LayoutStyles';


const UserAvatar = ({ user }) => {
    const { classes, theme, cx } = useStyles();
    const [openLogout, { open, close }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const navigate = useNavigate();

    const userInitial = (user.email.substring(0, 1)).toUpperCase();

    return (
        <div className={classes.hiddenMobile}>
            <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: 'pop-top-right' }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
            >
                <Menu.Target>
                    <div className='cursor-pointer'>
                        <div className='flex flex-row items-center gap-2'>
                            <div
                                radius="xl"
                                size='md'
                                className={theme.colorScheme === 'dark' ? 'hover:bg-[#c2410c] bg-[#e8590c] py-2 px-4 rounded-full' : 'hover:bg-[#4E577E] bg-[#5D6998] py-2 px-4 rounded-full text-white'}
                            >{userInitial}</div>
                            <IconChevronDown size={rem(16)} stroke={1.5} color={theme.colorScheme === 'dark' ? theme.colors.orange[1] : theme.colors.pink[9]} className='flex items-center'/>
                        </div>
                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item
                        icon={<IconHeart size="0.9rem" stroke={1.5} color={theme.colors.red[6]} />}
                        onClick={() => navigate(`/profile/${user.id}/data+profiles`)}
                    >
                        Reports
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
                        Log out
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <LogoutModal
                openLogout={openLogout}
                close={close}
            />
            <Container>
                <Tabs
                    defaultValue="Home"
                    variant="outline"
                    classNames={{
                        root: classes.tabs,
                        tabsList: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    {/* <Tabs.List>{items}</Tabs.List> */}
                </Tabs>
            </Container>
        </div>
    )
}

export default UserAvatar