import React, { useState, useEffect } from 'react';
import { generatePath, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Steps } from 'primereact/steps';

import { IoIosArrowForward } from 'react-icons/io';
import { Toggle, ToggleItem } from '@tremor/react';
import { base } from '../../data/Data';
import { Button } from "@tremor/react";
import { Dialog } from 'primereact/dialog';
// import useAuth from '../../hooks/useAuth';
import Logo from '../../components/Globals/Logo';
import { pricingSteps } from '../../data/Data'


const PricingPlan = () => {
    const { plan } = useParams();
    // const { auth } = useAuth();
    // const navigate = useNavigate();

    const planBase = base.find(obj => obj.Plan === plan);

    const [totalPrice, setTotalPrice] = useState(planBase.Price);
    const [paymentFreq, setPayementFreq] = useState('monthly');
    const [basePrice, setBasePrice] = useState(planBase.Price);
    const [monthlyIncrement, setMonthlyIncrement] = useState(0)
    const [showModal, setShowModal] = useState(false);
    const [visible, setVisible] = useState(false);

    //Calculates the Total Price
    useEffect(() => {
        const calcTotalPrice = () => {
            if (paymentFreq === 'annually') {
                const total = ((parseFloat(basePrice) + parseFloat(monthlyIncrement)) * 11) + .1   
                setTotalPrice(total)
            } else {
                const total = (parseFloat(basePrice) + parseFloat(monthlyIncrement))
                setTotalPrice(total)
            }
        }
        calcTotalPrice()
    }, [paymentFreq, monthlyIncrement]);


    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    // const modalControl = (e) => {
    //     e.preventDefault();
    //     setShowModal(true);
    // }

    const activeIndex = 1


  return (
    <div className='flex'>

            {/* {showModal ? 
                <ConfirmationModal 
                    setShowModal={setShowModal}
                    monthlyIncrement={monthlyIncrement}
                    totalPrice={totalPrice}
                    paymentFreq={paymentFreq}
                /> 
            : <></> } */}

        
            <div className='w-[512px] p-16 float-left h-screen md:overflow-hidden  bg-white'>

                {/* Logo */}
                <div className='flex items-center'>
                    <Link to='/'>
                        <div>
                            <Logo />
                        </div>
                    </Link>
                </div>

                <div className=' mt-8'>
                    <Steps model={pricingSteps} activeIndex={activeIndex} readOnly={false}/>  
                </div>

                {/*********************************************HEADERS ************************************************************/}
                <div className='grid grid-cols-1 mt-8 min-h-[calc(100%-124px)] content-between '>
                    <div>
                        <div className='text-lg tracking-tight text-gray-800 font-bold'>
                            Confirm Plan
                        </div>
                        <div className='mt-4 text-sm tracking-tight text-gray-600'>
                            Select a plan that suits your needs.
                        </div>
                    </div>

                    <div className='rounded border mb-4 text-center p-4 flex flex-col space-y-2 bottom-0'>
                        <div className='text-xs tracking-tight leading-relaxed'>
                            This order process is conducted by our online reseller & Merchant of Record, Stripe.com, who also handles order-related inquiries and returns.
                        </div>
                        <div className='text-xs tracking-tight text-gray-500 leading-relaxed'>
                            Your data will be shared with DashPond Data Inc for product fulfilment. Stripe.com Inc, 3811 Ditmars Blvd #1071, Astoria, NY 11105-1803
                        </div>
                        <div className='text-xs tracking-tight flex flex-rol space-x-2 justify-center '>
                            <span onclick="window.location='/terms+conditions'" className='underline'>Terms & Conditions</span>
                            <span>|</span>
                            <span className='underline'>Privacy Policy</span>
                        </div>
                    </div>

                </div>
            </div>

                               {/********************************************* OTHERSIDE ************************************************************/}
            <div className='flex flex-col h-screen w-[calc(100%-512px)] float-right bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))]
            from-green-300 via-blue-500 to-purple-600 p-24 text-white'>
                <div className='w-[512px]'>
                    <div className='flex flex-row space-x-2 items-center mt-8'>
                        {/* Top Banner */}
                        {/* <div className='text-white font-semibold'>
                            All-access 
                        </div> */}
                        <div className='rounded-full bg-purple-100 tracking-tighter'>
                            <div className='px-2 text-emerald-500 text-sm font-semibold'>
                                Solo license
                            </div>
                            
                        </div>


                    </div>

                    {/* Price */}
                    <div className='flex flex-row mt-4 items-end'>
                        <div className=' text-4xl  tracking-tight font-bold'>
                            {USDollar.format(totalPrice)}
                        </div>
                        <div className='text-sm text-white tracking-tight font-bold'>
                            {paymentFreq === 'monthly' ? '/month' : '/year'}
                        </div>
                    </div>

                    <div className='w-full mt-4'>
                        <Toggle defaultValue='monthly' onValueChange={(value) => setPayementFreq(value)}>
                            <ToggleItem value='monthly' text='Monthly' />
                            <ToggleItem value='annually' text='Annually' />
                        </Toggle>
                    </div>

                    <div className='text-lg tracking-tight mt-4'>
                        Includes access to all 100+ data profile components and templates available in DashPond today, plus all future updates.
                    </div>

                    <div className='mt-8 text-sm tracking-tight'>
                        All prices in USD
                    </div>

                    <div className='flex flex-col space-y-4 mt-8 tracking-tight'>
                        <div className='flex flex-row justify-between'>
                            <span className='text-lg'>Subtotal</span>
                            <span>{USDollar.format(totalPrice)}</span>
                        </div>

                        <hr className={showModal ? 'opacity-0' : 'opacity-50'}/>

                        <div className='flex flex-row justify-between'>
                            <span className='text-lg'>Taxes</span>
                            <span>Calculated at next screen</span>
                        </div>

                        
                        <hr className={showModal ? 'opacity-0' : 'opacity-50'}/>

                        <div className='flex flex-row justify-between text-lg font-bold'>
                            <span className='text-lg font-bold'>Total price</span>
                            <span>{USDollar.format(totalPrice)}</span>
                        </div>


                    </div>
                    
                    <div className='mt-8'>
                        <Button className="" size="xl" onClick={() => setVisible(true)}>
                            Continue to Checkout
                        </Button>
                        <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Dialog>
                    </div>
                </div>
            </div>
        </div>
    // </div>
  )
}

export default PricingPlan

// h-[calc(100vh-68px)]

   //Fetch Plan Selected From DB
    // useEffect(() => {
    //     const fetchCartData = async () => {
    //         try {
    //             const response = await api.post('/cartdetails', {
    //                 id: auth.id
    //             })
    //             console.log(response);
    //             setPlanData(response.data)
    //             setDataLoading(false)
    //         } catch (err) {
    //             if (err.response) {
    //                 console.log(err.response.data);
    //                 console.log(err.response.status);
    //                 console.log(err.response.headers); 
    //             } else { 
    //                 console.log(`Error: ${err.message}`)
    //             }
    //         }
    //     }
    //     fetchCartData()
    // }, [])


    // //Sets Plan State 
    // useEffect(() => {
    //     const planSelected = () => {
    //         if (dataLoading) {

    //         } else {
    //             setPlan(planData[0].plan)
    //             setPlanLoading(false)
                
    //         }
    //     }

    //     planSelected()
    // }, [dataLoading])

    // !planLoading ? console.log(plan) : console.log('gay');