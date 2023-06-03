import React, { useState, useEffect, useRef } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import api from '../../api/axios'
import useAuth from '../../hooks/useAuth';
import { dataProfileMenuItems } from '../../data/Data';

import { Avatar, Badge, Table, Group, Text, Select, ScrollArea } from '@mantine/core';

const data = [
    {
      "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Robert Wolfkisser",
      "job": "Engineer",
      "email": "rob_wolf@gmail.com",
      "role": "Collaborator"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Jill Jailbreaker",
      "job": "Engineer",
      "email": "jj@breaker.com",
      "role": "Collaborator"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Henry Silkeater",
      "job": "Designer",
      "email": "henry@silkeater.io",
      "role": "Contractor"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Bill Horsefighter",
      "job": "Designer",
      "email": "bhorsefighter@gmail.com",
      "role": "Contractor"
    },
    {
      "avatar": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Jeremy Footviewer",
      "job": "Manager",
      "email": "jeremy@foot.dev",
      "role": "Manager"
    }
  ]


const rolesData = ['Manager', 'Collaborator', 'Contractor'];

const DataProfiles = ({}) => {

  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.name}
            </Text>
            <Text fz="xs" c="dimmed">
              {item.email}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Select data={rolesData} defaultValue={item.role} variant="unstyled" />
      </td>
      <td>{Math.floor(Math.random() * 6 + 5)} days ago</td>
      <td>
        {Math.random() > 0.5 ? (
          <Badge fullWidth>Active</Badge>
        ) : (
          <Badge color="gray" fullWidth>
            Disabled
          </Badge>
        )}
      </td>
    </tr>
  ));


  return (
    <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>Last active</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>

  )
}

export default DataProfiles

  // const confirmInactivate = (id, address) => {
  //   confirmDialog({
  //     message: `Are you sure you want to make ${address} inactive?` ,
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       toast.current.show({ severity: 'info', summary: 'Confirmed', detail: `Successfully inactivated data proflie for ${address}`, life: 3000 });
  //       setActiveProfileId(id)
  //     },
  //   });
  // };

  // const confirmReactivation = (id, address) => {
  //   confirmDialog({
  //     message: `Are you sure you want to reactivate ${address}?` ,
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       toast.current.show({ severity: 'info', summary: 'Confirmed', detail: `Successfully Reactivated Data Proflie for ${address}`, life: 3000 });
  //       setHiddenProfileId(id)
  //     },
  //   });
  // };

  // const deletePermanently = (id, address) => {
  //   confirmDialog({
  //     message: `Are you sure you want to permanently delete ${address}?` ,
  //     header: 'Confirmation',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       toast.current.show({ severity: 'info', summary: 'Confirmed', detail: `Permanently Deleted Data Proflie for ${address}`, life: 3000 });
  //       setDeletedProfileId(id)
  //     },
  //   });
  // };



  // const toast = useRef(null);

  // const [activeProfiles, setActiveProfiles] = useState([]);
  // const [hiddenProfiles, setHiddenProfiles] = useState([]);
  // const [activeProfileId, setActiveProfileId] = useState(null);
  // const [hiddenProfileId, setHiddenProfileId] = useState(null);
  // const [deletedProfileId, setDeletedProfileId] = useState(null);
  // const [activeIndex, setActiveIndex] = useState(0);
  // const navigate = useNavigate();

  // const { auth } = useAuth();



  // const fetchProfilePath = generatePath('/fetchdataprofiles/:id', {
  //   id: auth.id
  // });
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




  // const activeTemplate = (profile) => {
  //   return (
  //     <div className="col-12">
  //       <div className="flex flex-column p-4 gap-4 justify-between h-32 items-center">
  //         <img 
  //           className="w-24 h-24 shadow-2 block xl:block mx-auto rounded " 
  //           src={`https://res.cloudinary.com/djlalgsmk/image/upload/v${profile.cloudinary_version}/${profile.cloudinary_public_id}`} 
  //           alt={profile.name} 
  //         />

  //         <div className="flex flex-column sm:flex-row justify-content-between align-items-center flex-1 gap-4">
  //           <div className="text-2xl font-bold text-900">{profile.address}</div>
  //         </div>

  //         <div className="flex sm:flex-column align-items-center gap-3 sm:gap-2">
  //           <Button title="View" icon="pi pi-external-link" className="p-button-rounded" onClick={() => navigate(`/dataprofile/${profile.id}/overview`)}></Button>
  //           <Button title="Make Inactive" icon="pi pi-times" className="p-button-rounded" onClick={() => confirmInactivate(profile.id, profile.address)}></Button>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // };
  // const innactiveTemplate = (profile) => {
  //   return (
  //     <div className="col-12 h-32">
  //       <div className="flex flex-column p-4 gap-4 justify-between  items-center">
  //         <img 
  //           className="w-24 h-24 shadow-2 block xl:block mx-auto rounded " 
  //           src={`https://res.cloudinary.com/djlalgsmk/image/upload/v${profile.cloudinary_version}/${profile.cloudinary_public_id}`} 
  //           alt={profile.name} 
  //         />

  //         <div className="flex flex-column sm:flex-row justify-content-between align-items-center flex-1 gap-4">
  //           <div className="text-2xl font-bold text-900">{profile.address}</div>
  //         </div>

  //         <div className="flex sm:flex-column align-items-center gap-3 sm:gap-2">
  //           <Button title="View" icon="pi pi-external-link" className="p-button-rounded" onClick={() => navigate(`/dataprofile/${profile.id}/overview`)}></Button>
  //           <Button title="Reactivate" icon="pi pi-replay" className="p-button-rounded" onClick={() => confirmReactivation(profile.id, profile.address)}></Button>
  //           <Button title="Delete Permanently" icon="pi pi-times" className="p-button-rounded" onClick={() => deletePermanently(profile.id, profile.address)}></Button>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // };






      // <main>
    //   <div className='mb-6'>
    //     <Title>Data Profiles</Title>
    //     <Text>View and edit your data profiles</Text>
    //   </div>

    //   <Toast ref={toast} />

    //   <div className="card">
    //       {/* <Button onClick={() => setActiveIndex(0)} className="p-button-outlined mb-5" label="Activate 1st" /> */}
    //       <TabMenu model={dataProfileMenuItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
    //   </div>

    //   { activeIndex === 0 ? 
    //     <div className='card'>
    //       <DataView value={activeProfiles} itemTemplate={activeTemplate} paginator rows={5}/>
    //     </div>
    //   :
    //     <div className='card'>
    //       <DataView value={hiddenProfiles} itemTemplate={innactiveTemplate} paginator rows={5}/>
    //     </div>
    //   }
    // </main>