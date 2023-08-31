import React from 'react';
import { useOutletContext } from 'react-router-dom';
import TotalPop from './Components/TotalPop';
import Bar from '../Charts/Bar'

const PopLayout = () => {
    const [data] = useOutletContext();

    console.log(data);

    return (
        <div className='flex flex-col space-y-4'>
            <TotalPop
                data={data}
            />
            <div className='h-[400px] '>
                {/* <Bar 
                data={[data[0][15], data[1][15], data[2][15]]}
            /> */}
            </div>

        </div>
    )
}

export default PopLayout