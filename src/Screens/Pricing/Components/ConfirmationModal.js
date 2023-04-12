import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pricingPlans } from '../../../data/Data';
import api from '../../../api/axios'

const ConfirmationModal = ({ setShowModal, monthlyIncrement, totalPrice, paymentFreq }) => {

    const { plan } = useParams();
    const basePlan = plan.charAt(0).toUpperCase() + plan.slice(1);

    const [baseDP, setBaseDP] = useState(null);

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        const getBaseDp = () => {
            var resultPlan = pricingPlans.find(item => item.title === basePlan);
            setBaseDP(resultPlan.baseDP)
        }
        getBaseDp()
    }, [basePlan])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // const post = await api.post('/proceedcheckout', {
    //         //     plan: plan,
    //         //     cost: parseFloat(totalPrice),
    //         //     payment_frequency: paymentFreq,
    //         //     monthly_data_profiles: (parseInt(planBase.BaseMonthly) + parseInt(monthlyIncrement)),
    //         //     user_id_fkey: auth.id
    //         // });

    //         // const path = generatePath('/:plan/checkout', {
    //         //     plan: plan
    //         // })

    //         // console.log(post);

    //         // navigate(path);
    //     } catch (err) {
    //         if (err.response) {
    //             console.log(err.response.data);
    //             console.log(err.response.status);
    //             console.log(err.response.headers); 
    //         } else { 
    //             console.log(`Error: ${err.message}`)
    //         }
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await api.post('/create-checkout-session');
    
          window.location = response.data.url
        } catch (err) {
          console.log(err.message)
        }
      }

  return (
    <div className='absolute rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-slate-100 border'>
        {/* <div className='flex flex-row justify-between p-2'> */}
            {/* <button onClick={() => setShowModal(false)}>Back</button> */}
            {/* <button onClick={handleSubmit}>Continue</button> */}
        {/* </div> */}

        <div className='flex justify-center tracking-tight text-xl font-semibold underline'>
            Confirm Your Plan 
        </div>

        <div className='flex flex-col px-8 mt-8'>

            <div className='flex flex-row space-x-2 '>
                <div className='text-lg'>
                    Base Plan: 
                </div>
                <div className='text-lg font-semibold'>
                    {basePlan}
                </div>
            </div>

            <div className='flex flex-row space-x-2 '>
                <div className='text-lg'>
                    Monthly Data Profiles Included: 
                </div>
                <div className='text-lg font-semibold'>
                    {baseDP}
                </div>
            </div>

            <div className='flex flex-row space-x-2 '>
                <div className='text-lg'>
                    Your Plans Additional Data Profiles: 
                </div>
                <div className='text-lg font-semibold'>
                    {monthlyIncrement} 
                    {/* Display the affect of an additional DP on total price */}
                </div>
            </div>

            {/* <hr className=''/> */}
            
            <div className='flex flex-row space-x-2 '>
                <div className='text-lg'>
                    Your Plan Includes   
                </div>
                <div className='text-lg font-bold'>
                    {parseInt(monthlyIncrement) + parseInt(baseDP)} 
                </div>
                <div className='text-lg'>
                    Total Monthly Data Profiles   
                </div>
            </div>

            {/* <div className='flex flex-row space-x-2 '>
                <div className='text-lg'>
                       Taxes:
                </div>
                <div className='text-lg font-bold'>
                    {parseInt(monthlyIncrement) + parseInt(baseDP)} 
                </div>
            </div> */}

            <div className='flex flex-row space-x-2 '>
                <div className='text-lg'>
                       Total Price:
                </div>
                <div className='text-lg font-bold'>
                    {USDollar.format(totalPrice)} 
                </div>
                <div className='text-sm'>
                       Billed {paymentFreq}
                </div>
            </div>

            <button 
                onClick={() => setShowModal(false)}
                className='py-2 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border
                     border-gray-200 hover:bg-gray-100 hover:text-blue-700 mt-8 w-full'
            >
                Return to Plan Customization
            </button>

            <form onSubmit={handleSubmit}>
            <button 
                type="submit"
                className='py-2 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border
                     border-gray-200 hover:bg-gray-100 hover:text-blue-700 mt-2 w-full'    
            >
                Contine to Checkout
            </button>
        </form>

        </div>




    </div>
  )
}

export default ConfirmationModal