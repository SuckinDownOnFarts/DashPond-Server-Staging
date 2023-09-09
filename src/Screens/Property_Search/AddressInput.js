import React, { useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { TextInput, Button, Group, Box, LoadingOverlay, Autocomplete } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form'

const AddressInput = () => {
    const { setPointData, setCounty, setFullAddress } = useOutletContext();
    const [loading, setLoading] = useState(true);
    const [visible, { toggle }] = useDisclosure(false);
    const [autoCompleteData, setAutoCompleteData] = useState([]);
    const [streetAddress, setStreetAddress] = useState();

    const navigate = useNavigate();

    const form = useForm({
        initialValues: { address: '' },
        validate: (values) => ({
            address:
                values.address.length === 0
                    ? 'Address is required'
                    : null,
        }),
    });

    useEffect(() => {
        const addAddressToState = () => {
            setStreetAddress(form.values.address)
        }
        addAddressToState()
    }, [form.values.address])

    const handleSubmit = async (value) => {
        toggle();
        setPointData([
            { lat: null },
            { lng: null }
        ]);

        const searchAddress = `${value.address}`;

        const url = `https://api.geocodify.com/v2/geocode?api_key=bfba24555d3582a0c359f1e4c0a731edc13eb066&q=${searchAddress}`;

        try {
            await fetch(url).then((response) => response.json()) //handle logic for incorrect address or address not found
                .then((data) => {
                    setPointData([
                        { lat: data.response.features[0].geometry.coordinates[1] },
                        { lng: data.response.features[0].geometry.coordinates[0] }
                    ]);
                    setCounty(data.response.features[0].properties.county)
                    setFullAddress(searchAddress)
                });
            setLoading(false);
            toggle();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const navigateAfterLoading = () => {
            if (!loading) {
                navigate('/property+search/address+input/map+confirmation');
            }
        };
        navigateAfterLoading();
    }, [loading]);

    useEffect(() => {
        const autoComplete = async () => {
            const url = `https://api.geocodify.com/v2/autocomplete?api_key=bfba24555d3582a0c359f1e4c0a731edc13eb066&q=${streetAddress}`
            try {
                if (streetAddress.length > 4) {
                    const autoAddress = await fetch(url).then((response) => response.json())
                        .then((data) => {
                            let arr = []
                            for (let i = 0; i < data.response.features.length; i++) {
                                arr.push(data.response.features[i].properties.label)
                            }
                            // console.log(data.response.features);
                            setAutoCompleteData(arr);
                        });
                }
            } catch (err) {
                console.log(err.message);
            }
        }
        autoComplete();
    }, [streetAddress]);


    return (
        <div className='flex flex-col flex-grow place-items-center '>
            <div>
                <div className='mb-8 mt-8 text-center'>
                    <div className='text-4xl font-semibold tracking-tight'>
                        Address Input
                    </div>
                    <div className='tracking-tight mt-4'>
                        Input the listing's address so we can find it on the map
                    </div>
                </div>

                <Box maw={300} mx="auto" mt='md' >
                    <LoadingOverlay visible={visible} overlayBlur={2} />
                    <form
                        onSubmit={form.onSubmit((values) => handleSubmit(values))}
                    >
                        {/* ADDRESS */}
                        <Autocomplete
                            withAsterisk
                            data={autoCompleteData}
                            label="Address"
                            placeholder="371 7th Ave, New York, NY 10001"
                            // value={streetAddress}
                            // onChange={setStreetAddress}
                        {...form.getInputProps('address')}
                        />

                        {/* BUTTON */}
                        <div className="flex flex-wrap -mx-3 mb-2 mt-2">
                            <div className="w-full px-3 mb-6">
                                <Group position="center" mt="xl">
                                    <Button type='submit'>Next step</Button>
                                </Group>
                            </div>
                        </div>
                    </form>
                </Box>
            </div>
        </div>
    )
}

export default AddressInput