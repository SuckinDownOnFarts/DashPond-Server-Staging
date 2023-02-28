import React, { useEffect, useState } from 'react';
import { Outlet, generatePath, useParams } from 'react-router-dom';
// import Sidebar from '../../components/Globals/Sidebar';

import api from '../../api/axios';


const DashPage = () => {
  const { id } = useParams();

  const pathProperty = generatePath('/address/:id', {
    id: id
  });

  const [propData, setPropData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropData = async () => {
      try {
        const response = await api.get(pathProperty);
        setPropData(response.data);
        setLoading(false);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers); 
        } else { 
          console.log(`Error: ${err.message}`);
        }
      }
    }

    fetchPropData();
  }, []);

  // const { activeMenu } = useStateContext();
  
  return (
    <div>
      <div className='flex relative'>
        <div className='bg-slate-50 min-h-screen w-full'>
          {!loading ? 
            <Outlet 
              context={{someData: propData[0].prop_type}}
            />
          : <Outlet 
            context={{someData: 'loading'}}
          />}
        </div>     
      </div>     
    </div>
  );
};

export default DashPage