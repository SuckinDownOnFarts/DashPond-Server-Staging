import { createStyles, rem } from "@mantine/core";


export const useStylesAvatar = createStyles((theme) => ({
    user: {
      color: theme.primaryColor,
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      borderRadius: theme.radius.sm,
      transition: 'background-color 100ms ease',
  
      '&:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
          0.1
        ),
      },
  
      [theme.fn.smallerThan('xs')]: {
        display: 'none',
      },
    },
  
    burger: {
      [theme.fn.largerThan('xs')]: {
        display: 'none',
      },
    },
  
    userActive: {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
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