import React from 'react';
import { Outlet } from 'react-router-dom';
import ProductNavbar from './ProductNavbar';

const ProductLayout = () => {
  return (
    <div className='flex'>
      <ProductNavbar />

      <div className='w-full'>
        <Outlet />
      </div>

    </div>
  )
}

export default ProductLayout