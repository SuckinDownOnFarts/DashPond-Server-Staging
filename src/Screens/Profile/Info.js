import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import api from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { accountInfoMenuItems } from '../../data/Data';
import { Title, Text } from '@tremor/react';
import { TabMenu } from 'primereact/tabmenu';
import { Divider } from 'primereact/divider';
import ConfirmationDialog from '../../components/Globals/ConfirmationDialog';

const UserProfileInfo = () => {

    const { auth } = useAuth();
    const [userData, setUserChangedInfo] = useOutletContext();

    const [name, setName] = useState('Danielll');
    const [activeIndex, setActiveIndex] = useState(0);


    function handleChange(e) {
        setName(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/changename', {
                name: name,
                id: auth.id
            });
            setUserChangedInfo(true);
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

    return (
        <main>
            <div className='mb-8'>
                <Title>Account Information</Title>
                <Text>View and edit your account's informartion</Text>
            </div>

            <div className="card">
                <TabMenu model={accountInfoMenuItems} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} />
            </div>

            {activeIndex === 0 ? 
                <div className='bg-white'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Divider align="left">
                        <div className="inline-flex items-center">
                            <i className="pi pi-user mr-2"></i>
                            <b>Username</b>
                        </div>
                    </Divider>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </div>
            : <></>}
        </main>
    )
}

export default UserProfileInfo