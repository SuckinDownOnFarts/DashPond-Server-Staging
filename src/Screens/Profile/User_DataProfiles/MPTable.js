import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Button, ScrollArea, Table, Pagination } from '@mantine/core';

const MPTable = ({ data }) => {
    const navigate = useNavigate();

    const [pageTotal, setPageTotal] = useState();
    const [activePage, setPage] = useState(1);
    const [sliceFirst, setSliceFirst] = useState(0);
    const [secondSlice, setSecondSlice] = useState(6);

    useEffect(() => {
        const calcPageTotal = () => {
            if (data.length % 5 !== 0) {
                const tempCalc = (data.length / 5) + 1
                setPageTotal(tempCalc)
            } else {
                setPageTotal((data.length / 5))
            }
        }
        calcPageTotal()
    }, [])

    useEffect(() => {
        const sliceData = () => {
            const secondValue = (activePage * 5) + 1
            const firstValue = secondValue - 6
            setSliceFirst(firstValue);
            setSecondSlice(secondValue);
        }
        sliceData()
    }, [activePage])


    const rows = data.slice(sliceFirst, secondSlice).map((item) => (
        <tr key={item.value}>
            <td>
                <Button variant="light" onClick={() => navigate(`/market+report/${item.id}/population`)}>
                    View
                </Button>
            </td>
            <td className='m-4'>
                <Text fz="md" tt="capitalize" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700 })}>
                    {item.address}
                </Text>
            </td>
            <td>
                <Text fz="md" tt="capitalize" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 700 })}>
                    {item.status}
                </Text>
            </td>
            <td>
                <Text>
                    {`${(new Date(item.created_at).getMonth() + 1)} / ${new Date(item.created_at).getDate()} / ${new Date(item.created_at).getFullYear()}`}
                </Text>
            </td>

            {/* <td className=''>
                <Group className=''>
                        <Button
                            size="xs"
                            variant="outline"
                            color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]}
                        >

                            Export to CSV
                        </Button>
                </Group>
            </td> */}
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
                            <th>Visibility</th>
                            <th>Date Created</th>
                            {/* <th>Options</th> */}
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