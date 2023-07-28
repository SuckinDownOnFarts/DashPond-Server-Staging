import { createStyles, rem } from "@mantine/core";


export const useDPSidebarStyles = createStyles((theme) => ({
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      // paddingTop: rem(16),
      paddingLeft: rem(16),
      paddingRight: rem(16),
      height: 'calc(100% - 60px)',
      position: 'fixed',
      top: '60px',
      // marginBottom: 0,
    },
  
    header: {
      padding: theme.spacing.md,
      // paddingTop: 0,
      marginLeft: `calc(${theme.spacing.md} * -1)`,
      marginRight: `calc(${theme.spacing.md} * -1)`,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    links: {
      paddingTop: 8,
      marginLeft: `calc(${theme.spacing.md} * -1)`,
      marginRight: `calc(${theme.spacing.md} * -1)`,
    },
  
    linksInner: {
      // paddingTop: theme.spacing.xl,
      // paddingBottom: theme.spacing.xl,
    },
  
    footer: {
      marginLeft: `calc(${theme.spacing.md} * -1)`,
      marginRight: `calc(${theme.spacing.md} * -1)`,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  }));

export const useLinksGroupStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    paddingLeft: rem(31),
    marginLeft: rem(30),
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    borderLeft: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}));

