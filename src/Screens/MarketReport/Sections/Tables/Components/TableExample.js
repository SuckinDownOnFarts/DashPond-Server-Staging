import { Table, Anchor, ScrollArea, Card } from '@mantine/core';

const TableExample = ({ data }) => {

    const tableData = [
        {
            "bracket": "Less than $10,000",
            "number": data[0][14][0],
            "percent": (data[0][14][0] / data[0][13]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$10,000 to $14,999",
            "number": data[0][14][1],
            "percent": (data[0][14][1] / data[0][13]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$15,000 to $24,999",
            "number": data[0][14][2],
            "percent": (data[0][14][2] / data[0][13]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$25,000 to $34,999",
            "number": data[0][14][3],
            "percent": (data[0][14][3] / data[0][13]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$35,000 to $49,999",
            "number": data[0][14][4],
            "percent": (data[0][14][4] / data[0][13]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$50,000 to $74,999",
            "number": data[0][14][5],
            "percent": (data[0][14][5] / data[0][13]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$75,000 to $99,999",
            "number": data[0][14][6],
            "percent": (data[0][14][6] / data[0][13]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$100,000 to $149,999",
            "number": data[0][14][7],
            "percent": (data[0][14][7] / data[0][13]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$150,000 to $199,999",
            "number": data[0][14][8],
            "percent": (data[0][14][8] / data[0][13]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$200,000 or more",
            "number": data[0][14][9],
            "percent": (data[0][14][9] / data[0][13]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        }
    ];


    const rows = tableData.map((row) => {

        return (
            <tr key={row.bracket}>
                <td>
                    <Anchor component="button" fz="sm">
                        {row.bracket}
                    </Anchor>
                </td>
                <td>{row.number}</td>
                <td>
                    <Anchor component="button" fz="sm">
                        {row.percent}
                    </Anchor>
                </td>
            </tr>
        );
    });

    return (
        <Card withBorder>
            <ScrollArea>
                <Table verticalSpacing="xs">
                    <thead>
                        <tr>
                            <th>Income Bracket</th>
                            <th>Number of People</th>
                            <th>Distribution</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </Table>
            </ScrollArea>
        </Card>
    );
}

export default TableExample