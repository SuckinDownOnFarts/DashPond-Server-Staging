import { createStyles, rem } from "@mantine/core";

export const useKeyFactsStyles = createStyles((theme) => ({
    root: {
    //   padding: `calc(${theme.spacing.xl} * 1.5)`,
    paddingTop: '0.875rem',
    paddingBottom: '0.875rem',
    // width: '100%',
    marginRight: '0.875rem',
    marginLeft: '0.875rem',
    },
  
    label: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
    }));

export const useEduEmpStyles = createStyles((theme) => ({
    root: {
      backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
        theme.colors[theme.primaryColor][7]
      } 100%)`,
      padding: theme.spacing.xl,
      borderRadius: theme.radius.md,
      display: 'flex',
      marginRight: '0.875rem',
      marginLeft: '0.875rem',
  
      [theme.fn.smallerThan('xs')]: {
        flexDirection: 'column',
      },
    },
  
    icon: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing.lg,
      color: theme.colors[theme.primaryColor][6],
    },
  
    stat: {
      minWidth: rem(98),
      paddingTop: theme.spacing.xl,
      minHeight: rem(140),
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: theme.white,
    },
  
    label: {
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: theme.fontSizes.xs,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      color: theme.colors.gray[6],
      lineHeight: 1.2,
    },
  
    value: {
      fontSize: theme.fontSizes.sm,
      fontWeight: 700,
      color: theme.black,
    },
  
    count: {
      color: theme.colors.gray[6],
    },
  
    day: {
      fontSize: rem(44),
      fontWeight: 700,
      color: theme.white,
      lineHeight: 1,
      textAlign: 'center',
      marginBottom: 5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    month: {
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      lineHeight: 1,
      textAlign: 'center',
    },
  
    controls: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: `calc(${theme.spacing.xl} * 2)`,
  
      [theme.fn.smallerThan('xs')]: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 0,
        marginBottom: theme.spacing.xl,
      },
    },
  
    date: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  
    control: {
      height: rem(28),
      width: '100%',
      color: theme.colors[theme.primaryColor][2],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.radius.md,
      transition: 'background-color 50ms ease',
  
      [theme.fn.smallerThan('xs')]: {
        height: rem(34),
        width: rem(34),
      },
  
      '&:hover': {
        backgroundColor: theme.colors[theme.primaryColor][5],
        color: theme.white,
      },
    },
  
    controlIcon: {
      [theme.fn.smallerThan('xs')]: {
        transform: 'rotate(-90deg)',
      },
    },
    }));

export const useHHIncomeStyles = createStyles((theme) => ({
    root: {
      display: 'flex',
      backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
        theme.colors[theme.primaryColor][7]
      } 100%)`,
      marginTop: '0.875rem',
      marginBottom: '0.875rem',
      marginRight: '0.875rem',
      marginLeft: '0.875rem',
      padding: `calc(${theme.spacing.xl} * 1.5)`,
      borderRadius: theme.radius.md,
  
      [theme.fn.smallerThan('sm')]: {
        flexDirection: 'column',
      },
    },
  
    title: {
      color: theme.white,
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: theme.fontSizes.sm,
    },
  
    count: {
      color: theme.white,
      fontSize: rem(32),
      lineHeight: 1,
      fontWeight: 700,
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    description: {
      color: theme.colors[theme.primaryColor][0],
      fontSize: theme.fontSizes.sm,
      marginTop: rem(5),
    },
  
    stat: {
      flex: 1,
  
      '& + &': {
        paddingLeft: theme.spacing.xl,
        marginLeft: theme.spacing.xl,
        borderLeft: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
  
        [theme.fn.smallerThan('sm')]: {
          paddingLeft: 0,
          marginLeft: 0,
          borderLeft: 0,
          paddingTop: theme.spacing.xl,
          marginTop: theme.spacing.xl,
          borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
        },
      },
    },
    }));

export const useIndustryStyles = createStyles((theme) => ({
    paper: {
        width: '50%',
        marginLeft: '1rem',
        flexBasis: '1',
    },

    progressLabel: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 1,
      fontSize: theme.fontSizes.sm,
      
    },
  
    stat: {
      borderBottom: `${rem(3)} solid`,
      paddingBottom: rem(5),
    },
  
    statCount: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      lineHeight: 1.3,
    },
  
    diff: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      display: 'flex',
      alignItems: 'center',
    },
  
    icon: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    },
  }));