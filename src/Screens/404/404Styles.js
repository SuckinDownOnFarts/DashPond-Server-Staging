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
        // textAlign: 'center',
        // fontWeight: 900,
        // fontSize: rem(220),
        // lineHeight: 1,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        // color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
        maxWidth: '400px',

        // [theme.fn.smallerThan('sm')]: {
        //     fontSize: rem(120),
        // },
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