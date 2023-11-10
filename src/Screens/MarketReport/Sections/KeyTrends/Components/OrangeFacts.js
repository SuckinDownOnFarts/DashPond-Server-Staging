import React, { useEffect, useState } from 'react';
import { UnstyledButton, Text, Paper, Group } from '@mantine/core';
import { IconCoins, IconCake, IconUserPlus, IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import dayjs from 'dayjs';
import { useEduEmpStyles as useStyles } from '../../../Styles/MRStyles';

const OrangeFacts = ({ data }) => {
    const { classes } = useStyles();
    const [date, setDate] = useState(new Date(2022, 9, 24));
    const [index, setIndex] = useState(0);
    const [disableUp, setDisableUp] = useState(false);
    const [disableDown, setDisableDown] = useState(false);

    const cardData = [
        // { icon: IconUserPlus, label: 'Population', popData: data.DP05_0001E[0] },
        { icon: IconCoins, label: 'Median HouseHold Income' },
        { icon: IconCake, label: 'Median Age' },
    ];

    const handleYearUp = () => {
        if (index <= 4) {
            setDate((current) => dayjs(current).add(1, 'year').toDate());
            setIndex((oldIndex) => oldIndex + 1);
        } 
    }

    const handleYearDown = () => {
        if (index > 0) {
            setDate((current) => dayjs(current).subtract(1, 'year').toDate());
            setIndex((oldIndex) => oldIndex - 1);
        }
    }

    useEffect(() => {
        const handleIndexConstraints = () => {
            if (index === 9) {
                setDisableUp(true)
            } else if (index === 0) {
                setDisableDown(true)
            } else {
                setDisableUp(false);
                setDisableDown(false);
            }
        }
        handleIndexConstraints()
    }, [index])

    const stats = cardData.map((stat) => (
        <Paper className={classes.stat} radius="md" shadow="md" p="xs" key={stat.label}>
          <stat.icon size={32} className={classes.icon} stroke={1.5} />
          <div>
            <Text className={classes.label}>{stat.label}</Text>
            <Text fz="xs" className={classes.count}>
              {/* <span className={classes.value}>{data[1][index]}</span> */}
              {/* <span className={classes.value}>{data.DP05_0001E[0]}</span> */}
            </Text>
          </div>
        </Paper>
      ));

    return (
        <div className={classes.root}>
            <div className={classes.controls}>
                <UnstyledButton
                    className={classes.control}
                    onClick={handleYearUp}
                    disabled={disableUp ? true : false}
                >
                    <IconChevronUp size="1rem" className={classes.controlIcon} stroke={1.5} />
                </UnstyledButton>

                <div className={classes.date}>
                    <Text className={classes.day}>{dayjs(date).format('YYYY')}</Text>
                    {/* <Text className={classes.month}>{dayjs(date).format('MMMM')}</Text> */}
                </div>

                <UnstyledButton
                    className={classes.control}
                    onClick={handleYearDown}
                >
                    <IconChevronDown size="1rem" className={classes.controlIcon} stroke={1.5} />
                </UnstyledButton>
            </div>
            <Group sx={{ flex: 1 }}>{stats}</Group>
        </div>
    )
}

export default OrangeFacts