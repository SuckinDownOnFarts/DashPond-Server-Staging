import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { useFooterStyles as useStyles } from '../FeatureStyles/FeatureStyles';
import { featureFooterData as data } from '../../../data/Data';
import Logo from '../../../components/Globals/Logo'

const FeatureFooter = () => {
    const { classes } = useStyles();

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Logo size={30} />
                    <Text size="xs" color="dimmed" className={classes.description}>
                        Make Commericial Real Estate Decisions More Confidently than Ever
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2023 DashPond. All rights reserved.
                </Text>

                <Group spacing={0} className={classes.social} position="right" noWrap>
                    <ActionIcon size="lg">
                        <IconBrandTwitter size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandYoutube size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <IconBrandInstagram size="1.05rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}

export default FeatureFooter