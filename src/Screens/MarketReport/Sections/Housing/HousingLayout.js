import React from 'react';
import { useOutletContext } from 'react-router-dom';
import HHOccupancy from './Components/HHOccupancy'
import YearBuilt from './Components/YearBuilt';
import UnitsInStructure from './Components/UnitsInStructure';
import Rooms from './Components/Rooms';
import UnitValue from './Components/UnitValue';
import GrossRent from './Components/GrossRent';
import RentByIncome from './Components/RentByIncome'

const HousingLayout = () => {
    const [data] = useOutletContext();

    return (
        <div className='flex flex-col space-y-4'>
            <HHOccupancy
                data={data}
            />
            <YearBuilt
                data={data}
            />
            <UnitsInStructure
                data={data}
            />
            <Rooms
                data={data}
            />
            <UnitValue
                data={data}
            />
            <GrossRent
                data={data}
            />
            <RentByIncome
                data={data}
            />
        </div>
    )
}

export default HousingLayout