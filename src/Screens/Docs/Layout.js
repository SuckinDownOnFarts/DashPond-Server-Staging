import React from 'react';
import { Outlet } from 'react-router-dom';
import DocsNavbar from './Navbar';

const DocsLayout = () => {
  return (
    <div>
        <DocsNavbar />
        <Outlet />
    </div>
  )
}

export default DocsLayout