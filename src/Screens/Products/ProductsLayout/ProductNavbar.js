import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, TextInput, Code, UnstyledButton, Badge, Text, Group, ActionIcon, Tooltip, rem } from '@mantine/core';
import { IconBulb, IconUser, IconCheckbox, IconSearch, IconPlus, IconSelector } from '@tabler/icons-react';
import UserButton from '../../../components/Globals/UserButton';
import { useProductNavbarStyles as useStyles } from '../ProductStyles/ProductStyles';
import useAuth from '../../../hooks/useAuth';


const links = [
    { icon: IconBulb, label: 'Activity', notifications: 3 },
    { icon: IconCheckbox, label: 'Tasks', notifications: 4 },
    { icon: IconUser, label: 'Contacts' },
];

const collections = [
    { emoji: '👍', label: 'Demographic Profile Generator', link: 'products/create/address+input' },
    { emoji: '🚚', label: 'Deliveries', link: '/' },
    { emoji: '💸', label: 'Discounts', link: '/' },
    { emoji: '💰', label: 'Profits', link: '/' },
    { emoji: '✨', label: 'Reports', link: '/' },
    { emoji: '🛒', label: 'Orders', link: '/' },
    { emoji: '📅', label: 'Events', link: '/' },
    { emoji: '🙈', label: 'Debts', link: '/' },
    { emoji: '💁‍♀️', label: 'Customers', link: '/' },
];

const ProductNavbar = () => {
    const { classes } = useStyles();
    const { auth } = useAuth();
    const navigate = useNavigate();

    console.log(auth);

    const mainLinks = links.map((link) => (
        <UnstyledButton key={link.label} className={classes.mainLink}>
            <div className={classes.mainLinkInner}>
                <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
                <span>{link.label}</span>
            </div>
            {link.notifications && (
                <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
                    {link.notifications}
                </Badge>
            )}
        </UnstyledButton>
    ));

    const collectionLinks = collections.map((collection) => (
        <a
            href={collection.link}
            // onClick={() => navigate(collection.link)}
            key={collection.label}
            className={classes.collectionLink}
        >
            <span style={{ marginRight: rem(9), fontSize: rem(16) }}>{collection.emoji}</span>{' '}
            {collection.label}
        </a>
    ));

    return (
        <Navbar width={{ sm: 300 }} className={classes.navbar}>
            <Navbar.Section className={classes.section}>
                <UserButton
                    image={`https://res.cloudinary.com/djlalgsmk/image/upload/v${auth.profile_image_version}/${auth.profile_image_public_id}`}
                    name={`${auth.firstName} ${auth.lastName}`}
                    email={auth.email}
                    icon={<IconSelector size="0.9rem" stroke={1.5} />}
                />
            </Navbar.Section>

            <TextInput
                placeholder="Search"
                size="xs"
                icon={<IconSearch size="0.8rem" stroke={1.5} />}
                rightSectionWidth={70}
                rightSection={<Code className={classes.searchCode}>Ctrl + K</Code>}
                styles={{ rightSection: { pointerEvents: 'none' } }}
                mb="sm"
            />

            <Navbar.Section className={classes.section}>
                <div className={classes.mainLinks}>{mainLinks}</div>
            </Navbar.Section>

            <Navbar.Section className={classes.section}>
                <Group className={classes.collectionsHeader} position="apart">
                    <Text size="xs" weight={500} color="dimmed">
                        Collections
                    </Text>
                    <Tooltip label="Create collection" withArrow position="right">
                        <ActionIcon variant="default" size={18}>
                            <IconPlus size="0.8rem" stroke={1.5} />
                        </ActionIcon>
                    </Tooltip>
                </Group>
                <div className={classes.collections}>{collectionLinks}</div>
            </Navbar.Section>
        </Navbar>
    );
}

export default ProductNavbar