import React from 'react';
import { Text, TextInput, Group, Button, ScrollArea, Table, useMantineTheme } from '@mantine/core';

const MPTable = ({ data }) => {
    const theme = useMantineTheme();

    const rows = data.map((item) => (
        <tr key={item.value}>
            <td className='m-4'>
                <Text fz="md" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700 })}>
                    {item.address}
                </Text>
            </td>
            <td>
                <Text>{item.created_at}</Text>
            </td>

            <td className=''>
                <Button size="xs" color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]} onClick={() => { }}>Edit</Button>
                <Button size="xs" variant="subtle" color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]} disabled>Edit</Button>
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

export default MPTable