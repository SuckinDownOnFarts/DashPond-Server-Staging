import React from 'react';
import { pricingPlans } from '../data/Data';

const Pricing = () => {


  return (
    <div className="mx-4 my-16 h-screen">
        <div className="text-center">
            <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
                Our <span className="font-semibold">plans</span> for your <span className="font-semibold">strategies</span>
            </h1>
            <p className="text-sm font-normal text-gray-400">
                See below our main three plans for your business, for your startup and agency.
            </p>
            <p className="text-sm font-normal text-gray-400">
                It start from here! You can teach yourself what you really like.
            </p>
        </div>



        {/* <!-- Plans --> */}
        <div className=" flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
            {pricingPlans.map((item) => (
                <div className="flex-shrink-0" key={item.name}>
                    <span className="text-4xl font-medium tracking-tight">{item.price.monthly}</span>
                    <span className="text-gray-400">/monthly</span>

                    <div className="flex-shrink-0 pb-6 space-y-2 border-b">
                        <h2 className="text-2xl font-normal">{item.name}</h2>
                        <p className="text-sm text-gray-400" >{item.description}</p>
                    </div>

                    {/* Features   */}
                    <ul className="flex-1 space-y-4">
                        {item.features.map((feature) => (
                            <li className="flex items-start">
                                <span className="ml-3 text-base font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div class="flex-shrink-0 pt-4">
                        <button
                            className="inline-flex items-center justify-center w-full max-w-xs px-4 py-2 
                            transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2
                                focus:ring-indigo-500 hover:text-white"
                        >Get {item.name}</button>
                    </div>
                </div>
            ))}
        </div>   
    </div>
  )
}

export default Pricing

          {/* Plan switch
        <div class="flex items-center justify-center mt-10 space-x-4">
            <span class="text-base font-medium">Bill Monthly</span>
            <button
                class="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {}}>
                    {/* "billPlan == 'monthly' ? billPlan = 'annually' : billPlan = 'monthly'" 
                    <span class="w-16 h-8 transition bg-indigo-500 rounded-full shadow-md outline-none block"></span>
                    <span
                        class="block absolute items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1"
                         class="{ 'translate-x-0': billPlan == 'monthly', 'translate-x-8': billPlan == 'annually' }"
                    ></span>
                </button>
                <span class="text-base font-medium">Bill Annually</span>
            </div>  */}