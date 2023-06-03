import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import useLogout from '../../hooks/useLogout';

const LogoutModal = ({openLogout, close}) => {
  // const [opened, { open, close }] = useDisclosure(false);

  const logout = useLogout();
  const navigate = useNavigate();

  const signout = async () => {
    await logout();
    navigate('/');
  }

  return (
    <>
      <Modal opened={openLogout} onClose={close} title="Authentication" centered>
        {/* Modal content */}
        <h1>Confirm Logout?</h1>
        <Group position="center">
          <Button onClick={signout}>Logout</Button>
        </Group>
      </Modal>
    </>
  );
}

export default LogoutModal