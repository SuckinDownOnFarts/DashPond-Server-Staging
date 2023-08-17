import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import { LoadingOverlay, Box } from '@mantine/core';
import api from '../../../api/axios';
import EmptyStack from './Components/UserInfoStacks/EmptyStack';
import Profile from './Components/Profile';
import UserTabs from './Components/UserTabs';
import UserPersonalInfo from './Components/UserInfoStacks/UserPersonalInfo';

const UserProfileInfo = () => {
    const { setActive } = useOutletContext();
    const { id } = useParams();
    setActive(1);

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
                        // avatar='https://res.cloudinary.com/djlalgsmk/image/upload/v1686638025/UserProfilePictures/Wah_zgr0bp.jpg'
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
                        />}
                </div>
                : <></>}
        </div>
    )
}

export default UserProfileInfo

