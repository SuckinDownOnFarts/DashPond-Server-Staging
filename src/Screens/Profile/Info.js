import React, { useEffect, useState } from 'react';
import api from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { Card, Grid, Title, Text } from '@tremor/react';
import { useOutletContext, generatePath } from 'react-router-dom';

const UserProfileInfo = () => {

    const { auth } = useAuth();
    const [userData, setUserChangedInfo] = useOutletContext();

    const [name, setName] = useState('Danielll');

    // console.log(userData);

    // useEffect(() => {
    //     const fetchUserInfo = async () => {
    //         try {
    //             const response = await api.post('/profileinfo', {
    //                 id: auth.id
    //             })

    //             setUserData(response.data);
    //             setLoading(false)

    //         } catch (err) {
    //             
    //           }
    //     }

    //     fetchUserInfo()
    // }, [])

    // console.log(userData);

    function handleChange(e) {
        setName(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('starting');

            const response = await api.post('/changename', {
                name: name,
                id: auth.id
            });

            

            setUserChangedInfo(true);

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

    return (
        <main>
            <div className='mb-8'>
                <Title>Account Information</Title>
                <Text>View and edit your account's informartion</Text>
            </div>
    
            <Grid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } className=" gap-x-6 gap-y-6">
                <Card className='m-auto' decoration="top" decorationColor="indigo">
                    <div>
                        {userData[0].name}
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input type='text' onChange={handleChange}/>
                        <button type='submit'>Submit</button>
                    </form>
                </Card>
            </Grid>
        </main>
    )
}

export default UserProfileInfo