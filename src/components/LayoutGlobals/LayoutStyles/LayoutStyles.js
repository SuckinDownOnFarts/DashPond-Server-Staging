import { createStyles, rem } from "@mantine/core";


export const useStylesAvatar = createStyles((theme) => ({
    user: {
      color: 'linear-gradient(to botton, #ed6ea0, #ec8c69)',
      // padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      borderRadius: theme.radius.sm,
      transition: 'background-color 100ms ease',
      padding: '0',
      paddingLeft: '1.125rem',
      paddingRight: '1.125rem',
  
      // '&:hover': {
      //   backgroundColor: theme.fn.lighten(
      //     theme.fn.variant({ variant: 'filled', color: 'dark' }).background,
      //     0.1
      //   ),
      // },
  
      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },

    // root: {
    //   padding: '0'
    // },
  
    burger: {
      [theme.fn.largerThan('xs')]: {
        display: 'none',
      },
    },
  
    userActive: {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: 'dark' }).background,
        0.1
      ),
    },
  
    tabs: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    tabsList: {
      borderBottom: '0 !important',
    },
  
    tab: {
      fontWeight: 500,
      height: rem(38),
      color: theme.white,
      backgroundColor: 'transparent',
      borderColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
  
      '&:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
          0.1
        ),
      },
  
      '&[data-active]': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
          0.1
        ),
        borderColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
      },
    },
  }));

export const navbarStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));

export const useLayoutStyles = createStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[6]
  }
}))