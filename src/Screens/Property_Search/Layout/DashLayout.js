import React, { useState, useEffect } from 'react';
import { Outlet, generatePath, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import useAuth from '../../../hooks/useAuth'
import api from '../../../api/axios'
import { useMantineTheme } from '@mantine/core';

const DashLayout = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const theme = useMantineTheme();

    const latLng = [
        { lat: null },
        { lng: null }
    ];

    //Map Modal States
    const [pointData, setPointData] = useState(latLng);
    const [county, setCounty] = useState('');
    const [fullAddress, setFullAddress] = useState('');
    const [city, setCity] = useState('');//Stays
    const [state, setState] = useState('Florida');//Stays
    const [zip, setZip] = useState(''); //Stays
    const [center, setCenter] = useState();
    const [position, setPosition] = useState();
    const [visible, { toggle }] = useDisclosure(false);

    useEffect(() => {
        const createCenter = () => {
            if (pointData[0].lat && pointData[1].lng) {
                setCenter([pointData[0].lat, pointData[1].lng])
            }
        }
        createCenter()
    }, [pointData])

    useEffect(() => {
        const invokePosition = () => {
            if (center) {
                setPosition(center)
            }
        }
        invokePosition()
    }, [center])


    //////////////////////////////////////FORM SUBMIT//////////////////////////////////////////
    async function postData() {
        try {
            const response = await api.post('/createdash', {
                address: fullAddress,
                latLng: position,
                county: county,
                id: auth.id,
                // propImage: image
            });

            if (!response?.data) {
                console.log('no response')
            } else {
                const path = generatePath('/dataprofile/:id/overview', {
                    id: response.data.toString()
                });
                toggle();
                navigate(path);
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const submitForm = () => {
        toggle();
        postData()
            .then((response) => {
                if (!response) {
                    toggle();
                    console.log('no res');
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    ////////////////////////////////////////////END FORM SUBMIT/////////////////////////////////////



    return (
        <main className='h-[calc(100vh-68px)] flex flex-col place-items-center mx-8'>
            {/************************** Header *********************************/}
            <div className={theme.colorScheme === 'dark' ? 'mt-24 mb-8 bg-[#1A1B1E] rounded shadow-sm flex flex-row' : 'mt-24 mb-8 bg-[#f8f9fa] rounded shadow-sm flex flex-row'}>
                <div className='w-[100%] mx-8 my-4'>

                    <div className='flex justify-center items-center'>
                        <Outlet context={{
                            pointData, setPointData,
                            county, setCounty,
                            fullAddress, setFullAddress,
                            city, setCity,
                            state, setState,
                            zip, setZip,
                            position, setPosition,
                            center,
                            submitForm,
                            visible
                        }} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DashLayout