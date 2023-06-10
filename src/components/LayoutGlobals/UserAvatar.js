import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Tabs, Container, Button, Group, Text, Menu, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLogout, IconHeart, IconStar, IconMessage, IconSettings, IconPlayerPause, IconTrash, IconSwitchHorizontal, IconChevronDown } from '@tabler/icons-react';
import LogoutModal from './LogoutModal';
import { useStylesAvatar } from './Styles/Styles';


const UserAvatar = ({ user, tabs }) => {
    const { classes, theme, cx } = useStylesAvatar();
    const [openLogout, { open, close }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);
    const navigate = useNavigate();

  return (
    <div>
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
                variant='gradient'
                gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
              >
                <Group spacing={7}>
                   <Avatar src={!user.image ? '/images/office1.jpg' : user.image} alt={user.email} radius="xl" size={20} />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1, color: theme.white }} mr={3}>
                    {user.email}
                  </Text>
                  <IconChevronDown size={rem(12)} stroke={1.5} />
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
                icon={<IconStar size="0.9rem" stroke={1.5} color={theme.colors.yellow[6]} />}
                onClick={() => navigate(`/profile/${user.id}/insights`)}
              >
                Insights
              </Menu.Item>
              {/* <Menu.Item
                icon={<IconMessage size="0.9rem" stroke={1.5} color={theme.colors.blue[6]} />}
              >
                Your comments
              </Menu.Item> */}

              <Menu.Label>Settings</Menu.Label>
              <Menu.Item 
                icon={<IconSettings size="0.9rem" stroke={1.5} />}
                onClick={() => navigate(`/profile/${user.id}/info`)}
              >
                Account settings
              </Menu.Item>
              <Menu.Item 
                icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}
                onClick={() => navigate(`/profile/${user.id}/billing+plan`)}
              >
                Subscription & billing
              </Menu.Item>

              <Menu.Divider />

              <Menu.Label>Options</Menu.Label>

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