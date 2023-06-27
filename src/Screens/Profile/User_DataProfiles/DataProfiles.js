import React, { useState, useEffect } from 'react';
import { generatePath, useNavigate, useOutletContext } from 'react-router-dom';
import api from '../../../api/axios'
import useAuth from '../../../hooks/useAuth';
import DPTable from './Components/DPTable';

const rolesData = ['Active', 'Sold', 'Hidden'];

const DataProfiles = ({}) => {
  const { setActive } = useOutletContext();
  const { auth } = useAuth(); 
  setActive(2);

  const [profiles, setProfiles] = useState(null);

  const fetchProfilePath = generatePath('/fetchdataprofiles/:id', {
    id: auth.id
  });

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await api.get(fetchProfilePath);
        setProfiles(response.data);
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

  // profiles ? console.log(profiles) : console.log('loading profiles');


  return (
    <div className='m-8'>
      {!profiles ? <></> :
      <DPTable 
        data={profiles}
      />}
    </div>
  )
}

export default DataProfiles











  // 
  // const [hiddenProfiles, setHiddenProfiles] = useState([]);
  // const [activeProfileId, setActiveProfileId] = useState(null);
  // const [hiddenProfileId, setHiddenProfileId] = useState(null);
  // const [deletedProfileId, setDeletedProfileId] = useState(null);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const navigate = useNavigate();

  // const { auth } = useAuth();




  // const innactivateProfilePath = generatePath('/innactivatedataprofile/:userid', {
  //   userid: auth.id
  // });
  // const restoreProfilePath = generatePath('/restoredataprofile/:userid', {
  //   userid: auth.id
  // });
  // const deletePath = generatePath('/deletedataprofile/:userid', {
  //   userid: auth.id
  // });


  // // FETCHES THE DATA PROFILES AND SETS THEM TO STATE BASED ON STATUS
  // useEffect(() => {
  //   const fetchProfiles = async () => {
  //     try {
  //       const response = await api.get(fetchProfilePath);
  //       console.log(response.data);
  //       setActiveProfiles(response.data[1]);
  //       setHiddenProfiles(response.data[0]);
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers); 
  //       } else { 
  //         console.log(`Error: ${err.message}`)
  //       }
  //     }
  //   }

  //   fetchProfiles();
  // }, [activeProfileId, hiddenProfileId, deletedProfileId]);


  // //SETS THE DATA PROFILE TO HIDDEN
  // useEffect(() => {
  //   const deleteProfile = async () => {
  //     try {
  //       if (activeProfileId) {
  //         const response = await api.post(innactivateProfilePath, {
  //           profileId: activeProfileId
  //         });

  //         setActiveProfileId(null);
  //       } 
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers); 
  //       } else { 
  //         console.log(`Error: ${err.message}`)
  //       }
  //     }
  //   }

  //   deleteProfile();
  // }, [activeProfileId]);


  // //SETS THE SELECTED DATA PROFILE TO ACTIVE
  // useEffect(() => {
  //   const restoreProfile = async () => {
  //     try {
  //       if (hiddenProfileId) {
  //         const response = await api.post(restoreProfilePath, {
  //           profileId: hiddenProfileId
  //         });

  //         setHiddenProfileId(null);
  //       } 
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers); 
  //       } else { 
  //         console.log(`Error: ${err.message}`)
  //       }
  //     }
  //   }

  //   restoreProfile();
  // }, [hiddenProfileId]);

  // //PERMANENTLY DELETES DATA PROFILES
  // useEffect(() => {
  //   const deleteDataProfile = async () => {
  //     try {
  //       if (deletedProfileId) {
  //         const response = api.post(deletePath, {
  //           profileId: deletedProfileId
  //         });

  //         setDeletedProfileId(null)
  //       }
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers); 
  //       } else { 
  //         console.log(`Error: ${err.message}`)
  //       }
  //     }
  //   }
  //   deleteDataProfile()
  // }, [deletedProfileId])







