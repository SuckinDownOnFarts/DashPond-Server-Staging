import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Button, ScrollArea, Table, useMantineTheme, Group, Pagination } from '@mantine/core';

const MPTable = ({ data }) => {
    const theme = useMantineTheme();
    const navigate = useNavigate();

    const pageTotal = data / 5

    const [activePage, setPage] = useState(1);

    const rows = data.map((item) => (
        <tr key={item.value}>
            <td>
                <Button variant="light" onClick={() => navigate(`/market+report/${item.id}/overview`)}>
                    View
                </Button>
            </td>
            <td className='m-4'>
                <Text fz="md"tt="capitalize" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700 })}>
                    {item.address}
                </Text>
            </td>
            <td>
                <Text>
                    {`${(new Date(item.created_at).getMonth() + 1)} / ${new Date(item.created_at).getDate()} / ${new Date(item.created_at).getFullYear()}`}
                </Text>
            </td>

            <td className=''>
                <Group className=''>
                    <Button size="xs" color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]} onClick={() => { }}>
                        Export to Excel
                    </Button>
                    <Button size="xs" variant="outline" color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]}>
                        Export to CSV
                    </Button>
                </Group>
            </td>
        </tr>
    ));

    return (
        <div>
            <ScrollArea>
                <Table verticalSpacing="xl" horizontalSpacing="sm" withBorder highlightOnHover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Address</th>
                            <th>Date Created</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ScrollArea>
            <div className='flex justify-center mt-2'>
                <Pagination value={activePage} onChange={setPage} total={pageTotal} />
            </div>
        </div>
    );
}

export default MPTable