import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { LoadingOverlay, Box } from '@mantine/core';
import api from '../../../api/axios';
import EmptyStack from './Components/UserInfoStacks/EmptyStack';
import Profile from './Components/Profile';
import UserTabs from './Components/UserTabs';
import UserSigninSecurity from './Components/UserInfoStacks/UserSigninSecurity';
import UserPersonalInfo from './Components/UserInfoStacks/UserPersonalInfo';
import UserPaymentInfo from './Components/UserInfoStacks/UserPaymentInfo';
import UserPreferences from './Components/UserInfoStacks/UserPreferences';

const UserProfileInfo = () => {
  const { setActive } = useOutletContext();
  const { id } = useParams();
  setActive(0);

  const data = [
    {
      "avatar": "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Robert Wolfkisser",
      "job": "Engineer",
      "email": "rob_wolf@gmail.com",
      "rate": 22
    },
    {
      "avatar": "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Jill Jailbreaker",
      "job": "Engineer",
      "email": "jj@breaker.com",
      "rate": 45
    },
    {
      "avatar": "https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Henry Silkeater",
      "job": "Designer",
      "email": "henry@silkeater.io",
      "rate": 76
    },
    {
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Bill Horsefighter",
      "job": "Designer",
      "email": "bhorsefighter@gmail.com",
      "rate": 15
    },
    {
      "avatar": "https://images.unsplash.com/photo-1630841539293-bd20634c5d72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
      "name": "Jeremy Footviewer",
      "job": "Manager",
      "email": "jeremy@foot.dev",
      "rate": 98
    }
  ];

  const [userData, setUserData] = useState();
  const [activeTab, setActiveTab] = useState('personal+info');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setUserData();
        const response = await api.post('/profileinfo', {
          id: id
        })
        setUserData(response.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchUserInfo();
  }, []);

  return (
    <div className='m-8'>
      <div className='flex mt-8'>
        {!userData
          ? <Profile />
          : <Profile
            avatar='https://res.cloudinary.com/djlalgsmk/image/upload/v1686638025/UserProfilePictures/Wah_zgr0bp.jpg'
            name={`${userData[0].first_name} ${userData[0].last_name}`}
            title=''
            email={userData[0].email}
            phone={userData[0].phone}
            company={userData[0].company}
          />}
      </div>

      <div className='mt-8'>
        <UserTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {activeTab === 'personal+info' 
      ? <div className='mt-4'>
        {!userData 
        ? <Box pos="relative">
            <LoadingOverlay visible={true} overlayBlur={2} />
            <EmptyStack />
          </Box>
        : <UserPersonalInfo
            firstName={userData[0].first_name}
            lastName={userData[0].last_name}
            email={userData[0].email}
            phone={userData[0].phone}
            roles={userData[0].roles}
            company={userData[0].company}
            setUserData={setUserData}
            // setDataUpdated={setDataUpdated}
          /> }
        </div>
      : activeTab === 'signin+security' 
      ? <div className='mt-4'>
          <UserSigninSecurity
            data={data}
          />
        </div>
      : activeTab === "payment" 
      ? <div className='mt-4'>
          <UserPaymentInfo
            data={data}
          />
        </div>
      : <div className='mt-4'>
          <UserPreferences
            data={data}
          />
        </div>
      }
    </div>
  )
}

export default UserProfileInfo

