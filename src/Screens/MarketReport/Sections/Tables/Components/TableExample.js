import { Table, Anchor, ScrollArea, Card } from '@mantine/core';

const TableExample = ({ data }) => {

    const tableData = [
        {
            "bracket": "Less than $10,000",
            "number": data.DP03_0052E[0],
            "percent": (data.DP03_0052E[0] / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$10,000 to $14,999",
            "number": data.DP03_0053E[0],
            "percent": (data.DP03_0053E[0] / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$15,000 to $24,999",
            "number": data.DP03_0054E[0],
            "percent": (data.DP03_0054E[0] / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$25,000 to $34,999",
            "number": data.DP03_0055E[0],
            "percent": (data.DP03_0055E[0] / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$35,000 to $49,999",
            "number": data.DP03_0056E[0],
            "percent": (data.DP03_0056E[0] / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$50,000 to $74,999",
            "number": data.DP03_0057E[0],
            "percent": (data.DP03_0057E[0] / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$75,000 to $99,999",
            "number": data.DP03_0058E[0],
            "percent": (data.DP03_0058E[0] / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$100,000 to $149,999",
            "number": data.DP03_0059E[0],
            "percent": (data.DP03_0059E[0] / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$150,000 to $199,999",
            "number": data.DP03_0060E[0],
            "percent": (data.DP03_0060E[0] / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
        },
        {
            "bracket": "$200,000 or more",
            "number": data.DP03_0061E[0],
            "percent": (data.DP03_0061E[0] / data.DP03_0051E[0]).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 }),
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