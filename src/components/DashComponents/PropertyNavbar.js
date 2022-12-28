import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';


import NavProfile from '../NavbarDropdowns/NavProfile';

import { useStateContext } from '../../Context/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button 
      type='button'
      onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray hover:dark:bg-secondary-dark-bg'
    >
      <span 
        style={{ background: dotColor}}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
        {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, profileActive, handleProfileClick, screenSize, setScreenSize, currentColor, setCurrentMode, currentMode } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  // useEffect(() => {
  //   const currentMode = localStorage.getItem('themeMode');
  //   if (currentMode) {
  //   setCurrentMode(currentMode)
  //   };
  // }, [])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative dark:bg-main-dark-bg'>
      <NavButton 
        title="Menu" 
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
        color={currentColor}
        icon={<AiOutlineMenu />} 
        />
      <div className="flex items-center">
        
        {/* <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} /> */}
        {/* <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} /> */}
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray hover:dark:bg-secondary-dark-bg rounded-lg' onClick={() => handleProfileClick()}>
            <img className='rounded-full w-8 h-8' src='/images/office1.jpg'/>
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>Daniel</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14'/>
          </div>
        {profileActive && <NavProfile />}
      </div>
    </div>
  )
}

export default Navbar

      {/* <Logo />
      <nav className='float-right inline-block'>  
        <div className='topnav-right mr-5'>
          <h4 className="inline m-1"><Link to='/'>Home</Link></h4>
          <h4 className="inline m-1"><Link to='create'>Create</Link></h4>
          <h4 className="inline m-1"><Link to='login'>Login</Link></h4>
          <h4 className="inline m-1"><Link to='register'>Register</Link></h4>
          <h4 className="inline m-1"><Link to='profile'>Profile</Link></h4>
        </div>
      </nav> */}