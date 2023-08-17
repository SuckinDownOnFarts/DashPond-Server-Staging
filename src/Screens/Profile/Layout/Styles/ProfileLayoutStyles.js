import { createStyles, rem } from "@mantine/core";

export const useStylesNavbar = createStyles((theme) => ({
    link: {
      width: rem(50),
      height: rem(50),
      borderRadius: theme.radius.md,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7],
      opacity: 0.85,
  
      '&:hover': {
        opacity: 1,
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.colorScheme === 'dark' ? 'dark' : 'gray.4'}).background,
          0.1
        ),
      },
    },

  
    active: {
      opacity: 1,
      '&, &:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.colorScheme === 'dark' ? 'dark' : 'gray.3'}).background,
          0.15
        ),
      },
    },
  }));