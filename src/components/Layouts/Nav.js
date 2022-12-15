import React from 'react';
import '../../css/nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='Nav'>  
      <img className='logo' src={'/images/logo1.png'} alt='' width='160px' height='35px' />
      <div className='topnav-right'>
        <a ><Link to='/'>Home</Link></a>
        <a><Link to='create'>Create</Link></a>
        <a><Link to='login'>Login</Link></a>
        <a><Link to='register'>Register</Link></a>
        <a><Link to='profile'>Profile</Link></a>
      </div>
    </nav>
  )
}

export default Nav