import { createStyles, rem } from "@mantine/core";

const CARD_PROGRESS_ICON_SIZE = rem(60);

export const useDocumentationNavbarStyles = createStyles((theme) => ({
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      paddingBottom: 0,
      position: 'fixed',
    },
  
    header: {
      padding: theme.spacing.md,
      paddingTop: 0,
      marginLeft: `calc(${theme.spacing.md} * -1)`,
      marginRight: `calc(${theme.spacing.md} * -1)`,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    links: {
      marginLeft: `calc(${theme.spacing.md} * -1)`,
      marginRight: `calc(${theme.spacing.md} * -1)`,
    },
  
    linksInner: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },
  
    footer: {
      marginLeft: `calc(${theme.spacing.md} * -1)`,
      marginRight: `calc(${theme.spacing.md} * -1)`,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
}));

export const useDocumentationHomeStyles = createStyles((theme) => ({

  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: `calc(${theme.spacing.xl} * 1.5 + ${CARD_PROGRESS_ICON_SIZE} / 3)`,

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },

  icon: {
    position: 'absolute',
    top: `calc(-${CARD_PROGRESS_ICON_SIZE} / 3)`,
    left: `calc(50% - ${CARD_PROGRESS_ICON_SIZE} / 2)`,

  },

  label: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));