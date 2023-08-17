import React, { useState, useEffect } from 'react';
import { generatePath, useOutletContext } from 'react-router-dom';
import MPTable from './MPTable';
import api from '../../../api/axios'
import useAuth from '../../../hooks/useAuth';

const DataProfiles = () => {
    const { setActive } = useOutletContext();
    const { auth } = useAuth();
    setActive(0);

    const [profiles, setProfiles] = useState(null);

    const fetchProfilePath = generatePath('/fetchdataprofiles/:id', {
        id: auth.id
    });

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await api.get(fetchProfilePath);
                setProfiles(response.data);
                console.log(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`)
                }
            }
        }

        fetchProfiles();
    }, []);



    return (
        <div className='m-8'>
            {!profiles ? <></> :
      <MPTable 
        data={profiles}
      />}
        </div>
    )
}

export default DataProfiles









