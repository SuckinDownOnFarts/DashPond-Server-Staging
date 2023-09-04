import { Button, Table, Text, ScrollArea, useMantineTheme } from '@mantine/core';

const EmptyStack = () => {

    const theme = useMantineTheme();

    const data = [
        {
            'value': 'First Name',
            'userData': 'firstName',
            'editValue': 'first name'
        },
        {
            'value': 'Last Name',
            'userData': 'lastName',
            'editValue': 'first name'
        },
        {
            'value': 'Email',
            'userData': 'email',
            'editValue': 'email'
        },
        {
            'value': 'Phone',
            'userData': 'phone',
            'editValue': 'phone'
        },
        {
            'value': 'Plan Type',
            'userData': 'planType',
            'editValue': 'plan'
        },
        {
            'value': 'Company',
            'userData': 'company',
            'editValue': 'company'
        },
    ];


    const rows = data.map((item) => (
        <tr key={item.value}>
            <td className='m-4'>
                <Text fz="md" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700 })}>
                    {item.value}
                </Text>
            </td>

            <td>
                <Text>{item.userData}</Text>
            </td>

            <td className=''>
                <Button size="xs" color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]}>Edit</Button>
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

export default EmptyStack