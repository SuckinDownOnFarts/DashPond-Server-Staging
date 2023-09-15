import { createStyles, rem } from "@mantine/core";

export const notFoundStyles = createStyles((theme) => ({
    root: {
        paddingTop: rem(80),
        paddingBottom: rem(80),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        maxWidth: '400px',
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(38),

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(32),
        },
    },

    description: {
        maxWidth: rem(500),
        margin: 'auto',
        marginTop: theme.spacing.xl,
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    },
}));