import React, { useMemo } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import { Box, Button, Menu, Text, Title } from '@mantine/core';
import { IconUserCircle, IconSend } from '@tabler/icons-react';
import { tableData as data } from '../../../../data/Data';

const DPTable = ({ data }) => {

    // console.log(userDPData);
    const columns = useMemo(
        () => [
            {
                id: 'dataProfile', //id used to define `group` column
                header: 'Your Data Profiles',
                columns: [
                    {
                        // accessorFn: (row) => row.address, //accessorFn used to join multiple data into a single cell
                        accessorKey: 'address',
                        id: 'address', //id is still required when using accessorFn instead of accessorKey
                        header: 'Address',
                        size: 250,
                        filterVariant: 'autocomplete',
                        Cell: ({ renderedCellValue, row }) => (
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                }}
                            >
                                <img
                                    alt="avatar"
                                    height={30}
                                    src={`https://res.cloudinary.com/djlalgsmk/image/upload/v${row.original.cloudinary_version}/${row.original.cloudinary_public_id}`}
                                    style={{ borderRadius: '10%' }}
                                />
                                <span>{renderedCellValue}</span>
                            </Box>
                        ),
                    },
                    // {
                    //     accessorKey: 'email', //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                    //     enableClickToCopy: true,
                    //     header: 'Email',
                    //     size: 300,
                    // },
                    {
                        accessorKey: 'status',
                        header: 'Status',
                        size: 200,
                        filterVariant: 'range-slider',
                        mantineFilterRangeSliderProps: {
                            color: 'indigo',
                            label: (value) =>
                                value?.toLocaleString?.('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                }),
                        },
                        //custom conditional format and styling
                        Cell: ({ cell }) => (
                            <Box
                                sx={(theme) => ({
                                    backgroundColor:
                                        cell.getValue() < 50_000
                                            ? theme.colors.red[9]
                                            : cell.getValue() >= 50_000 &&
                                                cell.getValue() < 75_000
                                                ? theme.colors.yellow[9]
                                                : theme.colors.green[9],
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
                        accessorFn: (row) => {
                            //convert to Date for sorting and filtering
                            const sDay = new Date(row.created_at);
                            sDay.setHours(0, 0, 0, 0); // remove time from date (useful if filter by equals exact date)
                            return sDay;
                        },
                        id: 'dateCreated',
                        header: 'Date Created',
                        filterVariant: 'date-range',
                        sortingFn: 'datetime',
                        enableColumnFilterModes: false, //keep this as only date-range filter with between inclusive filterFn
                        Cell: ({ cell }) => cell.getValue()?.toLocaleDateString(), //render Date as a string
                        Header: ({ column }) => <em>{column.columnDef.header}</em>, //custom header markup
                    },
                ],
            },
        ],
        [],
    );

    const table = useMantineReactTable({
        columns,
        data,
        enableColumnFilterModes: true,
        // enableColumnOrdering: true,
        enableFacetedValues: true,
        // enableGrouping: true,
        // enablePinning: true,
        enableRowActions: true,
        enableRowSelection: true,
        initialState: { showColumnFilters: true },
        positionToolbarAlertBanner: 'bottom',
        renderRowActionMenuItems: () => (
            <>
                <Menu.Item icon={<IconUserCircle />}>View Profile</Menu.Item>
                <Menu.Item icon={<IconSend />}>Send Email</Menu.Item>
            </>
        ),
        renderTopToolbarCustomActions: ({ table }) => {
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
                        Mark Innactive
                    </Button>
                    <Button
                        color="green"
                        disabled={!table.getIsSomeRowsSelected()}
                        onClick={handleActivate}
                        variant="filled"
                    >
                        Mark Active
                    </Button>
                    <Button
                        color="blue"
                        disabled={!table.getIsSomeRowsSelected()}
                        onClick={handleContact}
                        variant="filled"
                    >
                        Delete
                    </Button>
                </div>
            );
        },
    });

    return <MantineReactTable table={table} />;
};

export default DPTable;

