import { Tabs } from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';

const UserTabs = ({ activeTab, setActiveTab }) => {
    return (
        <Tabs
            color="green" 
            radius="md" 
            value={activeTab}
            onTabChange={setActiveTab}
        >
            <Tabs.List>
                <Tabs.Tab value="personal+info" icon={<IconUserCircle size="0.8rem" />}>Account Information</Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}

export default UserTabs