import React from 'react'

const Footer = () => {
  return (
      <footer className="p-4 absolute inset-x-0 bottom-0 bg-white shadow md:flex md:items-center md:justify-between md:p-6 w-full mx-auto  z-50 border-t-.5 h-px">
        <span className="text-sm text-gray-500 sm:text-center ">© 2022 <a href="#" className="hover:underline">DashPond™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
          <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 ">Privacy
              Policy</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 ">Licensing</a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-500 hover:underline ">Contact</a>
          </li>
        </ul>
      </footer>
  )
}

export default Footer