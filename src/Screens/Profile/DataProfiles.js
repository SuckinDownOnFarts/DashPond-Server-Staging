import React, { useState, useEffect, useRef } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import api from '../../api/axios'
import useAuth from '../../hooks/useAuth';
import { dataProfileMenuItems } from '../../data/Data';

import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { TabMenu } from 'primereact/tabmenu';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Title, Text } from '@tremor/react';

const DataProfiles = () => {
  const toast = useRef(null);

  const [activeProfiles, setActiveProfiles] = useState([]);
  const [hiddenProfiles, setHiddenProfiles] = useState([]);
  const [activeProfileId, setActiveProfileId] = useState(null);
  const [hiddenProfileId, setHiddenProfileId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const { auth } = useAuth();

  const confirmInactivate = (id, address) => {
    confirmDialog({
      message: `Are you sure you want to make ${address} inactive?` ,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: `Successfully inactivated data proflie for ${address}`, life: 3000 });
        setActiveProfileId(id)
      },
    });
  };

  const confirmReactivation = (id, address) => {
    confirmDialog({
      message: `Are you sure you want to reactivate ${address}?` ,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: `Successfully Reactivated Data Proflie for ${address}`, life: 3000 });
        setHiddenProfileId(id)
      },
    });
  };

  const fetchProfilePath = generatePath('/fetchdataprofiles/:id', {
    id: auth.id
  });
  const deleteProfilePath = generatePath('/deletedataprofile/:userid', {
    userid: auth.id
  });
  const restoreProfilePath = generatePath('/restoredataprofile/:userid', {
    userid: auth.id
  });


  // FETCHES THE DATA PROFILES AND SETS THEM TO STATE BASED ON STATUS
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await api.get(fetchProfilePath);
        // console.log(response.data);
        setActiveProfiles(response.data[1]);
        setHiddenProfiles(response.data[0]);
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
  }, [activeProfileId, hiddenProfileId]);


  //SETS THE DATA PROFILE TO HIDDEN
  useEffect(() => {
    const deleteProfile = async () => {
      try {
        if (activeProfileId) {
          const response = await api.post(deleteProfilePath, {
            profileId: activeProfileId
          });

          setActiveProfileId(null);
        } 
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

    deleteProfile();
  }, [activeProfileId]);


  //SETS THE SELECTED DATA PROFILE TO ACTIVE
  useEffect(() => {
    const restoreProfile = async () => {
      try {
        if (hiddenProfileId) {
          const response = await api.post(restoreProfilePath, {
            profileId: hiddenProfileId
          });

          setHiddenProfileId(null);
        } 
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

    restoreProfile();
  }, [hiddenProfileId]);


  const activeTemplate = (profile) => {
    return (
      <div className="col-12">
        <div className="flex flex-column p-4 gap-4 justify-between h-32 items-center">
          <img className="w-24 h-24 shadow-2 block xl:block mx-auto rounded " src={`/images/${profile.image_ref}`} alt={profile.name} />

          <div className="flex flex-column sm:flex-row justify-content-between align-items-center flex-1 gap-4">
            <div className="text-2xl font-bold text-900">{profile.address}</div>
          </div>

          <div className="flex sm:flex-column align-items-center gap-3 sm:gap-2">
            <Button title="View" icon="pi pi-external-link" className="p-button-rounded" onClick={() => navigate(`/dataprofile/${profile.id}/overview`)}></Button>
            <Button title="Make Inactive" icon="pi pi-times" className="p-button-rounded" onClick={() => confirmInactivate(profile.id, profile.address)}></Button>
          </div>
        </div>
      </div>
    )
  };

  const hiddenTemplate = (profile) => {
    return (
      <div className="col-12 h-32">
        <div className="flex flex-column p-4 gap-4 justify-between  items-center">
          <img className="w-24 h-24 shadow-2 block xl:block mx-auto rounded " src={`/images/${profile.image_ref}`} alt={profile.name} />

          <div className="flex flex-column sm:flex-row justify-content-between align-items-center flex-1 gap-4">
            <div className="text-2xl font-bold text-900">{profile.address}</div>
          </div>

          <div className="flex sm:flex-column align-items-center gap-3 sm:gap-2">
            <Button title="View" icon="pi pi-external-link" className="p-button-rounded" onClick={() => navigate(`/dataprofile/${profile.id}/overview`)}></Button>
            <Button title="Reactivate" icon="pi pi-times" className="p-button-rounded" onClick={() => confirmReactivation(profile.id, profile.address)}></Button>
          </div>
        </div>
      </div>
    )
  };


  return (
    <main>
      <div className='mb-6'>
        <Title>Data Profiles</Title>
        <Text>View and edit your data profiles</Text>
      </div>

      <Toast ref={toast} />

      <div className="card">
          {/* <Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" /> */}
          <TabMenu model={dataProfileMenuItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
      </div>

      { activeIndex === 0 ? 
        <div className='card'>
          <DataView value={activeProfiles} itemTemplate={activeTemplate} paginator rows={5}/>
        </div>
      :
        <div className='card'>
          <DataView value={hiddenProfiles} itemTemplate={hiddenTemplate} paginator rows={5}/>
        </div>
      }
    </main>
  )
}

export default DataProfiles