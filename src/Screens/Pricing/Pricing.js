import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCheckLg } from 'react-icons/bs';
import { pricingPlans } from '../../data/Data';
import useAuth from '../../hooks/useAuth';


const Pricing = () => {

  const { auth } = useAuth();

  const navigate = useNavigate();

  const routeChange = (link) => {
    // console.log(link);
    let path = link;
    navigate(path);
  }

  return (
    <div className='flex-col'>

        {/* Title */}
        <div className="mx-auto max-w-screen-md text-center mt-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Level Up Your Commercial Real Estate Marketing</h2>
        </div>

        {/* Pricing Panes */}
        <div className='flex flex-row justify-center space-x-8 mt-24'>
        
          {pricingPlans.map((item, index) => (
            <div key={item.title} className='bg-gray-200 w-1/5 rounded flex'>
            <div className='w-full h-full  p-8 flex flex-col'>

            {index === 0 ? 
              <div className='justify-content-center flex mx-auto'>
                <div className={`rounded-full w-8 h-8 bg-gradient-to-r ${item.gradient}`} />
              </div>
                : index === 1 ? 
                <div className='justify-content-center flex mx-auto space-x-0.5'>
                  <div className={`rounded-full w-8 h-8 bg-gradient-to-r ${item.gradient}`} />
                  <div className={`rounded-full w-8 h-8 bg-gradient-to-r ${item.gradient}`} />
                </div>
                : 
                <div className='justify-content-center flex mx-auto space-x-0.5'>
                  <div className={`rounded-full w-8 h-8 bg-gradient-to-r ${item.gradient}`} />
                  <div className={`rounded-full w-8 h-8 bg-gradient-to-r ${item.gradient}`} />
                  <div className={`rounded-full w-8 h-8 bg-gradient-to-r ${item.gradient}`} />
                </div>
              }

              <div className='text-center'>
                <h2 className=' mt-4 text-3xl tracking-tight font-extrabold text-gray-900'>{item.title}</h2>
              </div>

              <div className='text-center'>
                <h2 className=' mt-4 text-xs tracking-tight text-gray-500'>{item.priceHead}</h2>
              </div>

              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
              </div>

              <div className='text-center'>
                <h2 className='text-sm tracking-tight font-bold text-gray-900'>{item.featureHead}</h2>
              </div>

              <div className='flex flex-col text-sm mt-4 space-y-2 tracking-tight align-middle'>
                <div className='flex flex-row items-center'>
                  <span className='mr-2 text-emerald-400'><BsCheckLg/></span>
                  {item.feature1}
                </div>
                <div className='flex flex-row items-center'>
                  <span className='mr-2 text-emerald-400'><BsCheckLg/></span>
                  {item.feature2}
                </div>
                <div className='flex flex-row items-center'>
                  <span className='mr-2 text-emerald-400'><BsCheckLg/></span>
                  {item.feature3}
                </div>
                <div className='flex flex-row items-center'>
                  <span className='mr-2 text-emerald-400'><BsCheckLg/></span>
                  {item.feature4}
                </div>
              </div>

              
                <button 
                  type="button"  
                  className={item.isDisabled ? `opacity-50 text-white mt-12 ${item.gradient} font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 tracking-tight w-full` 
                  : `text-white mt-12 ${item.gradient} font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 tracking-tight w-full`}
                  disabled={item.isDisabled}
                  onClick={() => routeChange(item.link)}
                >
                  {item.buttonText}
                </button>
            </div>
          </div>
          ))}


        
            {/* <div className='bg-gray-200 w-72 rounded'>
              <div className='w-full h-full  p-8 flex flex-col'>

                <div className='justify-content-center flex mx-auto space-x-0.5'>
                  <div className='rounded-full w-8 h-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 '></div>
                  <div className='rounded-full w-8 h-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 '></div>
                </div>

                <div className='text-center'>
                  <h2 className=' mt-4 text-3xl tracking-tight font-extrabold text-gray-900'>Team</h2>
                </div>

                <div className='text-center'>
                  <h2 className=' mt-4 text-xs tracking-tight text-gray-900'>Starts at $40/Month</h2>
                </div>

                <div class="relative flex py-4 items-center">
                  <div class="flex-grow border-t border-gray-400"></div>
                </div>

                <div className='text-center'>
                  <h2 className='text-sm tracking-tight font-bold text-gray-900'>WHAT YOU GET</h2>
                </div>

                <div className='flex flex-col text-sm mt-4 space-y-2'>
                  <div className='flex flex-row'>
                    <span className='mr-2 '><BsCheckLg/></span>
                    40 Initial Data Profiles*
                  </div>
                  <div className='flex flex-row '>
                    <span className='mr-2'><BsCheckLg/></span>
                    8 Data Profiles Per Month*
                  </div>
                  <div className='flex flex-row '>
                    <span className='mr-2'><BsCheckLg/></span>
                    5 Agent Profiles*
                  </div>
                  <div className='flex flex-row '>
                    <span className='mr-2'><BsCheckLg/></span>
                    24/7 Live Support
                  </div>
                </div>

                <button type="button" class="text-white mt-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                 focus:ring-4 focus:ring-blue-300 font-medium 
                  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    Get Started
                </button>
              
              </div>
            </div>

            <div className='bg-gray-200 w-72 rounded flex'>
              <div className='w-full h-full  p-8 flex flex-col'>

                <div className='justify-content-center flex mx-auto space-x-0.5'>
                  <div className='rounded-full w-8 h-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 '></div>
                  <div className='rounded-full w-8 h-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 '></div>
                  <div className='rounded-full w-8 h-8 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 '></div>
                </div>

                <div className='text-center'>
                  <h2 className=' mt-4 text-3xl tracking-tight font-extrabold text-gray-900'>Agency</h2>
                </div>

                <div className='text-center'>
                  <h2 className=' mt-4 text-xs tracking-tight text-gray-900'>Starts at $120/Month</h2>
                </div>

                <div class="relative flex py-4 items-center">
                  <div class="flex-grow border-t border-gray-400"></div>
                </div>

                <div className='text-center'>
                  <h2 className='text-sm tracking-tight font-bold text-gray-900'>WHAT YOU GET</h2>
                </div>

                <div className='flex flex-col text-sm mt-4 space-y-2'>
                  <div className='flex flex-row'>
                    <span className='mr-2 '><BsCheckLg/></span>
                    100 Initial Data Profiles*
                  </div>
                  <div className='flex flex-row '>
                    <span className='mr-2'><BsCheckLg/></span>
                    40 Data Profiles Per Month*
                  </div>
                  <div className='flex flex-row '>
                    <span className='mr-2'><BsCheckLg/></span>
                    30 Agent Profiles*
                  </div>
                  <div className='flex flex-row '>
                    <span className='mr-2'><BsCheckLg/></span>
                    24/7 Live Support
                  </div>
                </div>

                <button type="button" class="text-white mt-12 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
                 focus:ring-4 focus:ring-blue-300 font-medium 
                  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">
                    Get Started
                </button>
              </div>
            </div> */}

          </div>
    </div>
  )
}

export default Pricing
