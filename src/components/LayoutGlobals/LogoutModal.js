import { useNavigate } from 'react-router-dom';
import { Modal, Group, Button } from '@mantine/core';
import useLogout from '../../hooks/useLogout';

const LogoutModal = ({ openLogout, close }) => {

    const logout = useLogout();
    const navigate = useNavigate();

    const signout = async () => {
        await logout();
        navigate('/');
    }

    return (
        <>
            <Modal opened={openLogout} onClose={close} title="Confirm Log Out" centered>
                <div className='flex flex-col justify-center'>
                    <div className='flex justify-center mb-8'>Do you wish to log out?</div>
                    <Group position="center">
                        <Button onClick={signout} className=''>Log out</Button>
                    </Group>
                </div>
            </Modal>
        </>
    );
}

export default LogoutModal