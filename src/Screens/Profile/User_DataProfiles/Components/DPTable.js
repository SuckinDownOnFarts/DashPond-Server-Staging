import React, { useMemo } from 'react';
import { MantineReactTable } from 'mantine-react-table';
import { Box, Button, Menu, Text, Title } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconUserCircle, IconSend } from '@tabler/icons-react';
import { tableData } from '../../../../data/Data';

const Example = ({ userDPData }) => {
    const columns = useMemo(
        () => [
            {
                id: 'dataProfile',
                header: 'Data Profiles',
                columns: [
                    {
                        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
                        id: 'name',
                        header: 'Name',
                        size: 250,
                        Cell: ({ renderedCellValue, row }) => (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <img alt="avatar" height={30} src={row.original.avatar} style={{ borderRadius: '50%' }} />
                                <span>{renderedCellValue}</span>
                            </Box>
                        ),
                    },
                    {
                        accessorKey: 'email',
                        enableClickToCopy: true,
                        header: 'Email',
                        size: 300,
                    },
                ],
            },
            {
                id: 'info',
                header: 'Info',
                columns: [
                    {
                        accessorKey: 'salary',
                        filterVariant: 'range',
                        header: 'Salary',
                        size: 200,
                        Cell: ({ cell }) => (
                            <Box
                                sx={(theme) => ({
                                    backgroundColor:
                                        cell.getValue() < 50_000
                                            ? theme.colors.red[8]
                                            : cell.getValue() >= 50_000 && cell.getValue() < 75_000
                                                ? theme.colors.yellow[8]
                                                : theme.colors.green[8],
                                    borderRadius: '4px',
                                    color: '#fff',
                                    maxWidth: '9ch',
                                    padding: '4px',
                                })}
                            >
                                {cell.getValue()?.toLocaleString?.('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                })}
                            </Box>
                        ),
                    },
                    {
                        accessorFn: (row) => new Date(row.startDate),
                        id: 'startDate',
                        header: 'Start Date',
                        filterFn: 'lessThanOrEqualTo',
                        sortingFn: 'datetime',
                        Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(),
                        Header: ({ column }) => <em>{column.columnDef.header}</em>,
                        Filter: ({ column }) => (
                            <DatePickerInput
                                placeholder="Filter by Start Date"
                                onChange={(newValue) => {
                                    column.setFilterValue(newValue);
                                }}
                                value={column.getFilterValue()}
                                modalProps={{ withinPortal: true }}
                            />
                        ),
                    },
                ],
            },
        ],
        []
    );

    return (
        <MantineReactTable
            columns={columns}
            data={tableData}
            enableColumnFilterModes
            enableColumnOrdering
            enableGrouping
            enablePinning
            enableRowActions
            enableRowSelection
            initialState={{ showColumnFilters: true }}
            positionToolbarAlertBanner="bottom"
            // renderDetailPanel={({ row }) => (
            //     <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            //         <img alt="avatar" height={200} src={row.original.avatar} style={{ borderRadius: '50%' }} />
            //         <Box sx={{ textAlign: 'center' }}>
            //             <Title>Signature Catch Phrase:</Title>
            //             <Text>&quot;{row.original.signatureCatchPhrase}&quot;</Text>
            //         </Box>
            //     </Box>
            // )}

            renderRowActionMenuItems={() => (
                <>
                    <Menu.Item icon={<IconUserCircle />}>View Data Profile</Menu.Item>
                    <Menu.Item icon={<IconSend />}>Copy URL</Menu.Item>
                </>
            )}

            renderTopToolbarCustomActions={({ table }) => {
                const handleDeactivate = () => {
                    table.getSelectedRowModel().flatRows.map((row) => {
                        alert('deactivating ' + row.getValue('name'));
                    });
                };

                const handleActivate = () => {
                    table.getSelectedRowModel().flatRows.map((row) => {
                        alert('activating ' + row.getValue('name'));
                    });
                };

                const handleContact = () => {
                    table.getSelectedRowModel().flatRows.map((row) => {
                        alert('contact ' + row.getValue('name'));
                    });
                };

                return (
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Button
                            color="red"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleDeactivate}
                            variant="filled"
                        >
                            Deactivate
                        </Button>
                        <Button
                            color="green"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleActivate}
                            variant="filled"
                        >
                            Activate
                        </Button>
                        <Button
                            color="blue"
                            disabled={!table.getIsSomeRowsSelected()}
                            onClick={handleContact}
                            variant="filled"
                        >
                            Contact
                        </Button>
                    </div>
                );
            }}
        />
    );
};

export default Example;

