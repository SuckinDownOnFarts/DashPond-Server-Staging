import { createStyles, rem } from "@mantine/core";

export const pricingStyles = createStyles((theme) => ({
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(28),
            textAlign: 'left',
          },
    },
    plans: {
        background: 'white',
        borderRadius: '0.25rem',
        width: '20%',
        display: 'flex'
    },
    button: {
        marginTop: 32
    },

    text: {
        fontFamily: 'Verdana, sans-serif',
    }
}))