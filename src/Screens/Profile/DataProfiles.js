import React, { useState, useEffect, useRef } from 'react';
import { generatePath, useNavigate, useOutletContext } from 'react-router-dom';

import api from '../../api/axios'
import useAuth from '../../hooks/useAuth';

import { Avatar, Badge, Table, Group, Text, Select, ScrollArea } from '@mantine/core';

const rolesData = ['Active', 'Sold', 'Hidden'];




const DataProfiles = ({}) => {
  const { setActive } = useOutletContext();
  const { auth } = useAuth(); 

  useEffect(() => {
    const setActiveIndex = () => {
      setActive(2)
    }
    setActiveIndex();
  }, []);

  const [profiles, setProfiles] = useState([]);

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



  const rows = profiles.map((item) => (
    <tr key={item.address}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={`https://res.cloudinary.com/djlalgsmk/image/upload/v${item.cloudinary_version}/${item.cloudinary_public_id}`} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.address.substring(0, item.address.indexOf(","))}
            </Text>
            <Text fz="xs" c="dimmed">
            {`${item.address.split(",")[1]}, ${item.address.split(",")[2]}, ${item.address.split(",")[3]}`}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Select data={rolesData} defaultValue={item.status} variant="unstyled" />
      </td>
      {/* <td>{Math.floor(Math.random() * 6 + 5)} days ago</td> */}
      <td>
        {item.status === 'Active' ? (
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
            <th>Profile Address</th>
            <th>Role</th>
            {/* <th>Last active</th> */}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>

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







