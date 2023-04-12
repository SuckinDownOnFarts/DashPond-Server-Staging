import React, { useEffect, useState, useRef } from 'react';
import { Card } from '@tremor/react';
import api from '../../../api/axios';
import { base } from '../../../data/Data';

const AddonTable = ({ plan, modalControl, setMonthlyIncrement }) => {

    const planBase = base.find(obj => obj.Plan === plan);

    const [monthlyTotal, setMonthlyTotal] = useState(planBase.BaseMonthly);


    return (
        <div className='mt-8 p-4 w-full border rounded bg-slate-50'>
            <form onSubmit={modalControl}>
                    <table className=" table-auto w-full h-full text-left">
                        <thead className='text-left'>
                            <tr className='text-sm underline'>
                                <th className=''>Option</th>
                                <th className='text-center'>Addon</th>
                                <th className='text-center'>Total</th>
                            </tr>
                        </thead>
                        <tbody  className='tracking-tight'>
                            <tr>
                                <td className='text-sm'>Monthly Data Profiles</td>
                                <td className='text-md text-center'>
                                    <input 
                                        onChange={e => {setMonthlyTotal(parseInt(e.target.value) + planBase.BaseMonthly); setMonthlyIncrement(e.target.value)}} 
                                        className='w-10' 
                                        type='number' 
                                        min={0} 
                                        placeholder={0}
                                    />
                                </td>
                                <td className='text-md text-center font-bold'>{monthlyTotal}</td>
                            </tr>
                        </tbody>
                    </table>


                <button 
                    type='submit' 
                    className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border
                     border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 mt-8 w-full'
                >
                    Continue
                </button>
            </form>
        </div>
    )
}

export default AddonTable