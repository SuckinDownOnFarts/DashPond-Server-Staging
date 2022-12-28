import { useStateContext } from '../../Context/ContextProvider'

const Logo = () => {
  const { currentColor } = useStateContext();

  return (
    <img className='inline-block'  src={'/images/logo1.png'} alt='' width='160px' height='35px' />
  )
}

export default Logo