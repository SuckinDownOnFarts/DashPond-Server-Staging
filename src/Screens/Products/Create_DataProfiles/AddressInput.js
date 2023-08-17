import React, { useState, useEffect } from 'react';
import { stateNames } from '../../../data/Data';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { TextInput, Select, Button, Group, Box, LoadingOverlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form'

const AddressInput = () => {
  const [streetAddress, setStreetAddress] = useState('');
  const [loading, setLoading] = useState(true);
  const [visible, { toggle }] = useDisclosure(false);

  const navigate = useNavigate();

  const form = useForm({
    initialValues: { address: '', city: '' , state: '', zip: ''},
    validate: (values) => ({
      address: 
        values.address.length === 0
        ? 'Address is required'
        : null,
      city: 
        values.city.length === 0
        ? 'City is required'
        : /[a-zA-Z][a-zA-Z ]+/.test(values.city)
        ? null
        : 'Cities can only contain letters',
      zip: 
        values.zip.length === 0 
        ? 'Zip code is required'
        : /^[0-9]+$/.test(values.zip)
        ? null
        : 'Zip code must contain only numbers',
      state: 
        values.state.length === 0
        ? 'State is required'
        : null,
    }),
  });

  const {
    setPointData,
    setCounty,
    setFullAddress,
    nextStep,
  } = useOutletContext();


  const handleSubmit = async (value) => {
    toggle();
    setPointData([
      {lat: null},
      {lng: null}
    ]);

    const searchAddress = `${value.address}, ${value.city}, ${value.state}, ${value.zip}`;
  

    const url = `https://api.geocodify.com/v2/geocode?api_key=bfba24555d3582a0c359f1e4c0a731edc13eb066&q=${searchAddress}`;

    try {
      await fetch(url).then((response) => response.json()) //handle logic for incorrect address or address not found
      .then((data) => {
        setPointData([
          {lat: data.response.features[0].geometry.coordinates[1]},
          {lng: data.response.features[0].geometry.coordinates[0]}
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
            autoComplete='on'
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
          >

            {/* ADDRESS */}
            <TextInput
              withAsterisk
              autoComplete='on'
              label="Address"
              placeholder="123 Paris Avenue"
              value={streetAddress}
              onChange={(event) => setStreetAddress(event.currentTarget.value)}
              {...form.getInputProps('address')}
            />

            <TextInput
              withAsterisk
              autoComplete='on'
              label="City"
              placeholder="New Iberia"
              {...form.getInputProps('city')}
            />

            {/* <TextInput
              withAsterisk
              label="State"
              placeholder="New York"
              {...form.getInputProps('state')}
            /> */}

            <Select
              withAsterisk
              searchable
              nothingFound="No states found"
              label="State"
              placeholder="New York"
              data={stateNames}
              {...form.getInputProps('state')}
            />

            <TextInput
              withAsterisk
              autoComplete='on'
              label="Zip"
              placeholder="90210"
              {...form.getInputProps('zip')}
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


/* <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-6 md:mb-0">
                <input 
                  className={errors.streetAddress ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}
                  {...register('streetAddress', { required: true })}
                  aria-invalid={errors.streetAddress ? "true" : "false"}
                  id="streetAddress" 
                  type="text" 
                  placeholder="Address"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
                {errors.streetAddress?.type === 'required' && <p className='text-red-500' role="alert">Address is required</p>}
              </div>
            </div> 

            
            {/* <div className="flex flex-wrap -mx-3">
              {/* CITY 
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <input 
                  className={errors.city ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"} 
                  id="city" 
                  {...register('city', { required: true })}
                  type="text" 
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  
                />
                {errors.city?.type === 'required' && <p className='text-red-500' role="alert">City is required</p>}
              </div>

              {/* STATE 
              <div className="w-full md:w-1/3 px-3 mb-6">
                <div className="relative">
                  <select 
                    className="block appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white" 
                    id="state"
                    {...register('state', { required: true })}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    
                  >
                    {stateNames.map((state) => (
                      <option key={state.name}>{state.name}</option>
                    ))}
                    
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* ZIP 
              <div className="w-full md:w-1/3 px-3 mb-6">
                <input 
                  className={errors.zip ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                  : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"} 
                  id="grid-zip" 
                  {...register('zip', { required: true, minLength: 5 })}
                  type="text" 
                  placeholder="Zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  
                />
                {errors.zip?.type === 'required' && <p className='text-red-500' role="alert">Zip code is required</p>}
              </div>
            </div> */
