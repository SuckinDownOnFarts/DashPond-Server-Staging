import { Text, Container } from '@mantine/core';
import { useFooterStyles as useStyles } from './LayoutStyles/LayoutStyles';
import Logo from '../Globals/Logo'

const FeatureFooter = () => {
    const { classes } = useStyles();

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Logo size={30} />
                    <Text size="xs" color="dimmed" className={classes.description}>
                        Helping You Make Better Real Estate Investment Decisions
                    </Text>
                </div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2023 DashPond. All rights reserved.
                </Text>
            </Container>
        </footer>
    );
}

export default FeatureFooter