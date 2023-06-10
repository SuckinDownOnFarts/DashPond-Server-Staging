import { createStyles, rem } from "@mantine/core";

export const featuresStyles = createStyles((theme) => ({
    paper: {

    }, 

    wrapper: {
      padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
      marginTop: '8%',
      marginLeft: '10%',
      marginRight: '10%',
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(36),
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  }));

export const secondSectionStyles = createStyles((theme) => ({
  wrapper: {
    marginTop: '8%',
    // paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));