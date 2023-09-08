import React, { useState, useEffect } from 'react';
import { Outlet, generatePath, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import useAuth from '../../../hooks/useAuth'
import api from '../../../api/axios'
import { useMantineTheme, Modal, Title } from '@mantine/core';

const DashLayout = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();
    const theme = useMantineTheme();

    const latLng = [
        { lat: null },
        { lng: null }
    ];

    const [pointData, setPointData] = useState(latLng);
    const [county, setCounty] = useState('');
    const [fullAddress, setFullAddress] = useState('');
    const [center, setCenter] = useState();
    const [position, setPosition] = useState();
    const [visible, { toggle }] = useDisclosure(false);
    const [opened, { open, close }] = useDisclosure(false);

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


    /////////////////////////////////////////////////////////////////////////               FORM SUBMIT              ///////////////////////////////////////////////////////////////////////////
    async function postData() {
        try {
            const response = await api.post('/createdash', {
                address: fullAddress,
                latLng: position,
                county: county,
                id: auth.id,
            });

            if (!response?.data) {
                console.log('no response') //eventually handle this error
            } else {
                const path = generatePath('/market+report/:id/population', {
                    id: response.data.toString()
                });
                toggle();
                navigate(path);
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const submitForm = async () => {
        try {
            toggle();
            let url = `https://api.geocodify.com/v2/reverse?api_key=bfba24555d3582a0c359f1e4c0a731edc13eb066&lat=${position[0]}&lng=${position[1]}`
            const revGeocodeRes = await fetch(url).then((response) => response.json())
                .then((data) => {
                    if (data.response.features[0].properties.country !== 'United States') {
                        console.log(data.response.features[0].properties.country);
                        return 0
                    } else {
                        console.log('is in us');
                        return 1
                    }
                })
            if (revGeocodeRes === 1) {
                postData()
                    .then((response) => {
                        if (!response) {
                            toggle();
                            console.log('no res');
                        }
                    }).catch(err => {
                        console.log(err)
                    })
            } else {
                open();
                console.log('not in us');
            }
        } catch (err) {
            console.log(err);
        }
    }
    /////////////////////////////////////////////////////////////////////////             END FORM SUBMIT              /////////////////////////////////////////////////////////////////////////////



    return (
        <main className='h-[calc(100vh-68px)] flex flex-col place-items-center mx-8'>
            <Modal opened={opened} onClose={close} className='flex justify-center' centered title="Hmm... Something's Wrong"> 
                <div className='flex flex-col justify-center w-full'>
                    <Title className='flex flex-col justify-center w-full'>
                        Whoops!
                    </Title>
                    <div>
                        Looks like you picked a point on the map that is outside of the United States. 
                        Unfortunately, we dont offer market insights on properties out of the U.S. 
                    </div>
                </div>
            </Modal>
            {/************************** Header *********************************/}
            <div className={theme.colorScheme === 'dark' ? 'mt-8 mb-8 bg-[#1A1B1E] rounded shadow-sm flex flex-row' : 'mt-8 mb-8 bg-[#f8f9fa] rounded shadow-sm flex flex-row'}>
                <div className='w-[100%] mx-8 my-4'>
                    <Outlet context={{
                        pointData, setPointData,
                        fullAddress, setFullAddress,
                        position, setPosition,
                        center,
                        setCounty,
                        submitForm,
                        visible,
                        opened
                    }} />
                </div>

            </div>
        </main>
    )
}

export default DashLayout