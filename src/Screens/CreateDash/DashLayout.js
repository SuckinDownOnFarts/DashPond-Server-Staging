import React, {useState} from 'react';
import { Outlet, generatePath, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import api from '../../api/axios'
import { createDashSteps } from '../../data/Data';
import { Steps } from 'primereact/steps';
// import { Card } from 'prime/card';

const DashLayout = () => {
    const { auth } = useAuth();
    const navigate = useNavigate();

    const latLng = [
        {lat: null},
        {lng: null}
      ];

    const [activeIndex, setActiveIndex] = useState(0);

    //Map Modal States
    const [pointData, setPointData] = useState(latLng);
    const [county, setCounty] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');//Stays
    const [state, setState] = useState('Florida');//Stays
    const [zip, setZip] = useState(''); //Stays
    const [position, setPosition] = useState();


    //////////////////////////////////////FORM SUBMIT//////////////////////////////////////////
    async function postData() {
        try {
          const response = await api.post('/posts', {
            address: address,
            latLng: position,
            county: county,
            id: auth.id
          });
    
          if (!response?.data) { 
            console.log('no response') 
          } else {
            const path = generatePath('/dataprofile/:id/overview', {
              id: response.data.toString()
            });
            navigate(path)
          }
          } catch (err) {
          console.log(err.message);
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
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
            <div className='mt-8 mb-8 ml-4 w-[20%] border-r-4'>
                <div className=' text-4xl font-semibold tracking-tight'>
                    Property Form
                </div>
                <div className='tracking-tight mt-4'>
                    Provide the necessary property information and we'll create a data profile
                </div>
            </div>

            <div className='w-[80%] mx-16 mt-8'>
                <Steps model={createDashSteps} activeIndex={activeIndex}/>

                <div className='flex justify-center'>
                    <Outlet context={{
                        pointData, setPointData,
                        county, setCounty,
                        address, setAddress,
                        city, setCity,
                        state, setState,
                        zip, setZip,
                        position, setPosition,
                        activeIndex, setActiveIndex
                    }}/>
                </div>
                
            </div>

            
        </div>

        


    </main>
  )
}

export default DashLayout