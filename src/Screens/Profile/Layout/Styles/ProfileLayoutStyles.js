import { createStyles, rem } from "@mantine/core";

export const useStylesNavbar = createStyles((theme) => ({
    link: {
      width: rem(50),
      height: rem(50),
      borderRadius: theme.radius.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.white,
      opacity: 0.85,
  
      '&:hover': {
        opacity: 1,
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: 'dark'}).background,
          0.1
        ),
      },
    },

  
    active: {
      opacity: 1,
      '&, &:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: 'dark' }).background,
          0.15
        ),
      },
    },
  }));