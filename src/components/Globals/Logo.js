import { logoStyles } from "./GlobalStyles/GlobalStyles"

const Logo = () => {
    const { theme } = logoStyles();

    return (
        <img
            className='inline-block'
            src={theme.colorScheme === 'dark' ? '/images/Logos/logo-orange.png' : '/images/Logos/logo-pink.png'}
            alt='Beautiful Dashpond Logo'
            width='160px'
            height='35px'
        />
    )
}

export default Logo