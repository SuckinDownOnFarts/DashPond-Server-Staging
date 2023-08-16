import { createStyles, rem } from '@mantine/core';

export const SolutionHeaderStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: `calc(${theme.spacing.xl} * 4)`,
        paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    },

    content: {
        maxWidth: rem(480),
        marginRight: `calc(${theme.spacing.xl} * 3)`,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(44),
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: rem(28),
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        borderRadius: theme.radius.sm,
        padding: `${rem(4)} ${rem(12)}`,
    },
}));

export const HeroStyles = createStyles((theme) => ({
    container : {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7],
        width: '100%'
    },


    title: {
        fontSize: rem(34),
        fontWeight: 900,
        color: theme.colors.gray[0],

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}));

export const UseCasesStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: rem(80),
      paddingBottom: rem(50),
    },
  
    item: {
      display: 'flex',
    },
  
    itemIcon: {
      padding: theme.spacing.xs,
      marginRight: theme.spacing.md,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.pink[7]
    // backgroundColor: 'transparent'
    },
  
    itemTitle: {
      marginBottom: `calc(${theme.spacing.xs} / 2)`,
    },
  
    supTitle: {
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 800,
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7],
      letterSpacing: rem(0.5),
    },
  
    title: {
      lineHeight: 1,
      textAlign: 'center',
      marginTop: theme.spacing.xl,
    },
  
    description: {
      textAlign: 'center',
      marginTop: theme.spacing.xs,
    },
  
    highlight: {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      padding: rem(5),
      paddingTop: 0,
      borderRadius: theme.radius.sm,
      display: 'inline-block',
      color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
    },
  }));