import { useState } from 'react';
import { Button, Table, Text, ScrollArea, TextInput, Group, useMantineTheme } from '@mantine/core';
import api from '../../../../../api/axios';
import useAuth from '../../../../../hooks/useAuth';

const UserPersonalInfo = ({ firstName, lastName, email, phone, roles, company, setUserData }) => {
    const { auth } = useAuth();
    const [edit, setEdit] = useState();
    const [initialValue, setInitialValue] = useState();
    const theme = useMantineTheme();

    let planType =  null
    roles === 11 
        ? planType = 'DashPond Admin'
        : roles === 10 
            ? planType = 'Beta Tester'
            : planType = 'Gold Plan'

    const data = [
        {
            'value': 'First Name',
            'userData': firstName,
            'editValue': 'first name'
        },
        {
            'value': 'Last Name',
            'userData': lastName,
            'editValue': 'first name'
        },
        {
            'value': 'Email',
            'userData': email,
            'editValue': 'email'
        },
        {
            'value': 'Phone',
            'userData': phone,
            'editValue': 'phone'
        },
        {
            'value': 'Plan Type',
            'userData': planType,
            'editValue': 'plan'
        },
        {
            'value': 'Company',
            'userData': company,
            'editValue': 'company'
        },
    ];

    const handleEditClick = (data) => {
        setEdit(data);
        setInitialValue(data);
    };

    const handleEditCancel = () => {
        setEdit();
        setInitialValue();
    };

    const handleEditSubmit = async (id, infoChangedValue, value) => {
        try {
            const response = await api.post('changeuserinfo', {
                userId: id,
                valueChange: infoChangedValue,
                value: value
            });
            setUserData(response.data.rows)
            // console.log(response.data.rows);
        } catch (err) {
            console.log(err.message);
        } finally {
            setEdit();
            setInitialValue();
        }
    };

    const rows = data.map((item) => (
        <tr key={item.value}>
            <td className='m-4'>
                <Text fz="md" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700 })}>
                    {item.value}
                </Text>
            </td>
            {edit === item.userData
                ? <td>
                    <div className='flex'>
                        <TextInput
                            value={initialValue}
                            onChange={(event) => setInitialValue(event.currentTarget.value)}
                        />
                    </div>
                    <div className='flex mt-4 '>
                        <Group position="apart">
                            <Button color="red" variant="outline" onClick={() => handleEditCancel()}>Cancel</Button>
                            <Button variant="outline" onClick={() => handleEditSubmit(auth.id, initialValue, item.editValue)}>Submit</Button>
                        </Group>
                    </div>
                </td>
                : <td>
                    <Text>{item.userData}</Text>
                </td>}

            <td className=''>
                {!edit && item.value !== 'Plan Type' ?
                    <Button size="xs" color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]} onClick={() => handleEditClick(item.userData)}>Edit</Button>
                    : <Button size="xs" variant="subtle" color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]} disabled>Edit</Button>}
            </td>
        </tr>
    ));

    return (
        <ScrollArea>
            <Table verticalSpacing="xl">
                <tbody>{rows}</tbody>
            </Table>
        </ScrollArea>
    );
}

export default UserPersonalInfo