import React from 'react'

const Descriptors = ({ title, censusVar }) => {
  return (
    
        <div key={title} className='items-center bg-main-bg dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
          <div className=''>
              <div className="">{title}</div>
              <div className="text-lg font-semibold items-center">{censusVar}</div>
          </div>
        </div>
  )
  }

export default Descriptors