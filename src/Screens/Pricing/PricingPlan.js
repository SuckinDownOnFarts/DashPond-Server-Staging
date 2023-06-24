import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SegmentedControl, Title, Paper, Divider, Button } from '@mantine/core';
import { base, pricingSegmentedControlData } from '../../data/Data';
import api from '../../api/axios';
import PlanStepper from './Components/PlanStepper';
import Logo from '../../components/Globals/Logo';

const PricingPlan = () => {
    const { plan } = useParams();
    const navigate = useNavigate();

    const planBase = base.find(obj => obj.Plan === plan);

    const [totalPrice, setTotalPrice] = useState(planBase.Price);
    const [paymentFreq, setPayementFreq] = useState('monthly');
    const [basePrice, setBasePrice] = useState(planBase.Price);
    const [monthlyIncrement, setMonthlyIncrement] = useState(0)
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

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await api.post('/create-checkout-session');
    
          window.location = response.data.url
        } catch (err) {
          console.log(err.message)
        }
    }


    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

  return (
    <div className='flex'>
        <div className='w-[512px] p-16 float-left h-screen md:overflow-hidden  bg-white'>

            {/* Logo */}
            <div className='flex items-center'>
                <Link to='/'>
                    <div>
                        <Logo />
                    </div>
                </Link>
            </div>

            {/*********************************************HEADERS ************************************************************/}
            <div className='grid grid-cols-1 mt-8 min-h-[calc(100%-60px)] content-between'>
                <div>
                    <Title className=' tracking-tight text-gray-800 font-bold'>
                        Confirm Plan
                    </Title>
                    <Title className='mt-4 text-sm tracking-tight text-gray-600'>
                        Select a plan that suits your needs.
                    </Title>
                </div>
                
                <div className='h-full'>
                    <PlanStepper />
                </div>

                <Paper withBorder className='rounded border text-center p-4 flex flex-col space-y-2 bottom-0'>
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
                </Paper>

            </div>
        </div>

        {/********************************************* OTHERSIDE ************************************************************/}
        <div className='flex flex-col h-screen w-[calc(100%-512px)] float-right bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))]
        from-green-300 via-blue-500 to-purple-600 p-24 text-white'>

            <div className='w-[512px]'>
                <div className='flex flex-row space-x-2 items-center mt-8'>
                    {/* Top Banner */}
                    <div className='rounded-full bg-purple-100 tracking-tighter'>
                        <div className='px-2 text-emerald-500 text-sm font-semibold'>
                            Solo license
                        </div>
                    </div>
                </div>

                {/* Price */}
                <div className='flex flex-row mt-4 items-end'>
                    <Title className=' text-4xl  tracking-tight font-bold'>
                        {USDollar.format(totalPrice)}
                    </Title>
                    <div className='text-sm text-white tracking-tight font-bold'>
                        {paymentFreq === 'monthly' ? '/month' : '/year'}
                    </div>
                </div>

                <div className='w-full mt-4'>
                    <SegmentedControl 
                        data={pricingSegmentedControlData}
                        value={paymentFreq}
                        onChange={setPayementFreq}
                        color="green"
                        transitionDuration={500}
                        transitionTimingFunction="linear"
                        size="md"
                        radius="xl"
                    />
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

                    <Divider variant="dashed"/>

                    <div className='flex flex-row justify-between'>
                        <span className='text-lg'>Taxes</span>
                        <span>Calculated at next screen</span>
                    </div>

                    
                    <Divider variant="dashed"/>

                    <div className='flex flex-row justify-between text-lg font-bold'>
                        <span className='text-lg font-bold'>Total price</span>
                        <span>{USDollar.format(totalPrice)}</span>
                    </div>


                </div>
                
                <div className='mt-8'>
                    <Button color='green' size="lg" onClick={handleSubmit}>
                        Continue to Checkout
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingPlan
