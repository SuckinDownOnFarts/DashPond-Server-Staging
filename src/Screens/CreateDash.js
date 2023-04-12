import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import { useNavigate, generatePath } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { stateNames } from '../data/Data';
import MapModal from './MapModal';


const CreateDash = () => {

  const latLng = [
    {lat: null},
    {lng: null}
  ]

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Florida');
  const [zip, setZip] = useState('');
  const [pointData, setPointData] = useState(latLng);
  const [county, setCounty] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  // const navigate = useNavigate();

  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const newAddress = {
    address: `${address},${city},${state},${zip}`
  };

  const onSubmit = async () => {
    setPointData([
      {lat: null},
      {lng: null}
    ]);

    const url = `https://api.geocodify.com/v2/geocode?api_key=bfba24555d3582a0c359f1e4c0a731edc13eb066&q=${newAddress.address}`

    try {
      await fetch(url).then((response) => response.json())
      .then((data) => {

        setPointData([
          {lat: data.response.features[0].geometry.coordinates[1]},
          {lng: data.response.features[0].geometry.coordinates[0]}
        ]); 
        setCounty(data.response.features[0].properties.county)
      });

      setShowModal(true)
      setLoading(false)

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const logPointData = () => {
      console.log(pointData);
    }

    logPointData()
  }, [pointData])
  



  


  return (
    <main className='h-[calc(100vh-68px)] flex flex-col place-items-center '>

      {showModal && !loading ? 
        <MapModal 
          coordinates={pointData}
          county={county}
          address={newAddress.address}
          setShowModal={setShowModal}
        /> : <></>}

        <div className='mt-16 text-center'>
          <div className='text-4xl font-semibold tracking-tight'>
            Property Form
          </div>
          <div className='tracking-tight mt-4'>
            Provide the necessary property information and we'll create a data profile
          </div>
        </div>

        <form 
          className="w-full max-w-lg mt-16"
          onSubmit={handleSubmit(onSubmit)}
        >

          {/* ADDRESS */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:mb-0">
              <input 
                className={errors.address ? "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                : "appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}
                {...register('address', { required: true })}
                aria-invalid={errors.address ? "true" : "false"}
                id="address" 
                type="text" 
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {errors.address?.type === 'required' && <p className='text-red-500' role="alert">Address is required</p>}
            </div>
          </div>

          {/* CITY */}
          <div className="flex flex-wrap -mx-3">
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

            {/* STATE */}
            <div className="w-full md:w-1/3 px-3 mb-6">
              <div className={showModal ? "hidden" : "relative"}>
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

            {/* ZIP */}
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
          </div>

            {/* BUTTON */}
            <div className="flex flex-wrap -mx-3 mb-2 ">
              <div className="w-full px-3 mb-6">
                <button 
                  className='place-self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                >
                  Continue
                </button>
              </div>
            </div>

        </form>
    </main>
  )
}

export default CreateDash

  // async function geocode(post) {
  //   try {
  //     const response = await api.post('/posts', post);
  //     if (response == 404) {
  //       //handle invalid address
  //       //Set error message to 'invalid address'
  //     } else {
  //         const res = response.data.toString()
  //         const path = generatePath('/dataprofile/:id/overview', {
  //           id: res
  //         })
  //         navigate(path)
  //     }
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   };
  // }

  // async function postData(post) {
  //   try {
  //     const response = await api.post('/posts', post);
  //     if (response == 404) {
  //       //handle invalid address
  //       //Set error message to 'invalid address'
  //     } else {
  //         const res = response.data.toString()
  //         const path = generatePath('/dataprofile/:id/overview', {
  //           id: res
  //         })
  //         navigate(path)
  //     }
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   };
  // }

      // postData(newPost)
    //   .then((response) => {
    //     if (!response) {
    //       //Handle server error
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err)
    //  }); data.response.features[0].geometry.coordinates
