import { Tabs } from '@mantine/core';
import { IconUserCircle, IconLock, IconCreditCard, IconTool } from '@tabler/icons-react';

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
                {/* <Tabs.Tab value="signin+security" icon={<IconLock size="0.8rem" />}>Sign in & Security</Tabs.Tab> */}
                {/* <Tabs.Tab value="payment" icon={<IconCreditCard size="0.8rem" />}>Payment Information</Tabs.Tab> */}
                {/* <Tabs.Tab value="preferences" icon={<IconTool size="0.8rem" />}>Account Preferences</Tabs.Tab> */}
            </Tabs.List>
        </Tabs>
    );
}

export default UserTabs