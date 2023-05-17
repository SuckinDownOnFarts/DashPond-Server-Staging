import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'primereact/menu';
import { Avatar } from 'primereact/avatar';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

import useLogout from '../../hooks/useLogout';

export default function PopupDoc({ email, id }) {

    const menu = useRef(null);
    const logout = useLogout();
    const navigate = useNavigate();
    const location = useLocation();

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    const [username, setUsername] = useState('User');

    const signout = async () => {
        await logout();
        navigate('/');
    }

    useEffect(() => {
        const setName = () => {
            if (email) {
                let nameParts = email.split("@");
                let name = nameParts.length==2 ? nameParts[0] : 'User';
                setUsername(name)
            }
        };
        setName();
    }, [email]);

    
    const confirmLogout = () => {
        confirmDialog({
            message: `Are you sure you want to logout?` ,
            header: 'Logout?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                // toast.current.show({ severity: 'info', summary: 'Confirmed', detail: `Successfully Logged Out`, life: 3000 });
                signout();
            },
        });
    };


    const items = [
        {
            label: `Hi, ${username.charAt(0).toUpperCase() + username.slice(1)}!`,
            items: [
                {
                    label: 'Account',
                    icon: 'pi pi-user',
                    url: `${BASE_URL}/profile/${id}/info`

                },
                {
                    label: 'Insights',
                    icon: 'pi pi-chart-bar',
                    url: `${BASE_URL}/profile/${id}/insights`

                },
                {
                    label: 'Subscriptions',
                    icon: 'pi pi-info-circle',
                    url: `${BASE_URL}/profile/${id}/billing+plan`

                },
                {
                    label: 'My Data Profiles',
                    icon: 'pi pi-map',
                    url: `${BASE_URL}/profile/${id}/dataprofiles`

                },
                {
                    label: 'Logout',
                    icon: 'pi pi-times',
                    command: () => confirmLogout()
                },
            ]
        },
    ];

    // console.log(location.pathname.split("/")[1]);

    return (
        <div className="card flex justify-content-center">
            {location.pathname.split("/")[1] !== 'profile' ?  
            <ConfirmDialog /> 
            : <></>}
            <Menu model={items} popup ref={menu} />
            <Avatar 
                label={email.charAt(0).toUpperCase()} 
                style={{ backgroundColor: '#14b8a6', color: '#ffffff' }}
                shape="circle"
                size="large"
                aria-label="User Profile Dropdown" 
                onClick={(e) => menu.current.toggle(e)}
            />
        </div>
    )
}