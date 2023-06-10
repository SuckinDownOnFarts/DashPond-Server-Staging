import React, {useState, useEffect} from 'react';
import { Outlet, generatePath, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import api from '../../../api/axios'
import Stepper from './Stepper';
import { Group, Button } from '@mantine/core';
import { css } from '@emotion/react'

const DashLayout = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();

    const latLng = [
        {lat: null},
        {lng: null}
      ];

    // const [activeIndex, setActiveIndex] = useState(0);

    //Map Modal States
    const [pointData, setPointData] = useState(latLng);
    const [county, setCounty] = useState('');
    const [fullAddress, setFullAddress] = useState('');
    const [city, setCity] = useState('');//Stays
    const [state, setState] = useState('Florida');//Stays
    const [zip, setZip] = useState(''); //Stays
    const [center, setCenter] = useState();
    const [position, setPosition] = useState();
    const [image, setImage] = useState();
    const [isAppLoading, setIsAppLoading] = useState();
    const [active, setActive] = useState(1);
    const [form, setForm] = useState();
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    useEffect(() => {
      const createCenter = () => {
        if (pointData[0].lat && pointData[1].lng) {
          setCenter([pointData[0].lat, pointData[1].lng])
          
        }
      }
      createCenter()
    }, [pointData])
    
    const config = {
      headers: {
       'content-type': 'multipart/form-data'
      }
    };

    // useEffect(() => {
    //   const imageToFormData = () => {
    //     if (image) {
    //       const formData = new FormData();
    //       formData.append('file', image);
    //       setForm(formData)
    //     }
    //   }
    //   imageToFormData();
    // }, [image]);

    useEffect(() => {
      const invokePosition = () => {
        if (center) {
          setPosition(center)
        }
      }
      invokePosition()
    }, [center])

    // const center = [pointData[0].lat, pointData[1].lng];
    

    //////////////////////////////////////FORM SUBMIT//////////////////////////////////////////
    async function postData(form) {
        try {
          setIsAppLoading(true);
          const response = await api.post('/createdash', {
            address: fullAddress,
            latLng: position,
            county: county,
            id: auth.id, 
            propImage: image
          });
    
          if (!response?.data) { 
            console.log('no response') 
          } else {
            const path = generatePath('/dataprofile/:id/overview', {
              id: response.data.toString()
            });
            navigate(path)
            setIsAppLoading(false);
          }
          } catch (err) {
          console.log(err.message);
        }
      };

      const submitForm = () => {

        // e.preventDefault();
        postData()
          .then((response) => {
            if (!response) {
              console.log('no res');
            }
          })
          .catch(err => {
            console.log(err)
         });
      }
    ////////////////////////////////////////////END FORM SUBMIT/////////////////////////////////////
    


  return (
    <main className='h-[calc(100vh-68px)] flex flex-col place-items-center mx-8'>
        {/************************** Header *********************************/}
        <div className='mt-8 mb-8 bg-white rounded h-[100%] w-[100%] shadow-sm flex flex-row'>
            {/* <div className='mt-8 mb-8 ml-4 w-[20%] border-r-4'>
                <div className=' text-4xl font-semibold tracking-tight'>
                    Property Form
                </div>
                <div className='tracking-tight mt-4'>
                    Provide the necessary property information and we'll create a data profile
                </div>
            </div> */}

            <div className='w-[100%] mx-16 my-8'>

                <Stepper 
                  nextStep={nextStep}
                  prevStep={prevStep}
                  active={active}
                  setActive={setActive}
                />

                <div className={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}>
                    <Outlet context={{
                        pointData, setPointData,
                        county, setCounty,
                        fullAddress, setFullAddress,
                        city, setCity,
                        state, setState,
                        zip, setZip,
                        position, setPosition,
                        center,
                        setImage,
                        submitForm,
                        isAppLoading, setIsAppLoading,
                        nextStep, prevStep,
                        setActive
                    }}/>
                  {/* <Group position="center" mt="xl">
                    <Button variant="default" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep}>Next step</Button>
                  </Group> */}
                </div>
                
            </div>

            
        </div>

        


    </main>
  )
}

export default DashLayout