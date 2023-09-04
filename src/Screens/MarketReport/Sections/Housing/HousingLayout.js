import React from 'react';
import { useOutletContext } from 'react-router-dom';
import HHOccupancy from './Components/HHOccupancy'
import YearBuilt from './Components/YearBuilt';
import UnitsInStructure from './Components/UnitsInStructure';
import Rooms from './Components/Rooms';
import UnitValue from './Components/UnitValue';
import GrossRent from './Components/GrossRent';
import RentByIncome from './Components/RentByIncome';

import YearChart from './Charts/YearChart';
import UnitsChart from './Charts/UnitsChart';
import RoomsChart from './Charts/RoomsChart';
import ValueChart from './Charts/ValueChart';
import RentChart from './Charts/RentChart';
import Rent2Chart from './Charts/Rent2Chart';

const HousingLayout = () => {
    const [data] = useOutletContext();

    return (
        <div className='flex flex-col space-y-4'>
            <HHOccupancy
                data={data}
            />

            <div className='flex flex-col gap-4 pb-4'>
                <YearBuilt
                    data={data}
                />
                <YearChart
                    data={data}
                />
            </div>

            <div className='flex flex-col gap-4 pb-4'>
                <UnitsInStructure
                    data={data}
                />
                <UnitsChart
                    data={data}
                />
            </div>
            <div className='flex flex-col gap-4 pb-4'>
                <Rooms
                    data={data}
                />
                <RoomsChart
                    data={data}
                />
            </div>
            <div className='flex flex-col gap-4 pb-4'>
                <UnitValue
                    data={data}
                />
                <ValueChart
                    data={data}
                />
            </div>
            <div className='flex flex-col gap-4 pb-4'>
                <GrossRent
                    data={data}
                />
                <RentChart
                    data={data}
                />
            </div>
            <div className='flex flex-col gap-4 pb-4'>
                <RentByIncome
                    data={data}
                />
                <Rent2Chart
                    data={data}
                />
            </div>



        </div>
    )
}

export default HousingLayout