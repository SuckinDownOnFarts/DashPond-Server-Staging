import { useOutletContext } from 'react-router-dom';
import TableExample from './Components/TableExample'

const TablesLayout = () => {
    const [data] = useOutletContext();

    return (
        <div className='mx-4'>
            <TableExample
                data={data}
            />
        </div>
    )
}

export default TablesLayout