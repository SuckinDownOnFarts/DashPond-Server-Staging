import React from 'react';
import { Text } from '@mantine/core';
import { useHHIncomeStyles as useStyles } from '../../../Styles/MRStyles';

const HouseholdIncomeFacts = ({ data }) => {

    const cardData = [
        // {
        //     "title": "Vacancy Rate",
        //     "stats": data.vacancy_rate[0],
        //     "description": "24% more than in the same month last year, 33% more that two years ago"
        // },
        // {
        //     "title": "Average Home Built Year",
        //     "stats": data.home_age[0],
        //     "description": "13% less compared to last month, new user engagement up by 6%"
        // },
        // {
        //     "title": "Average Home Value",
        //     "stats": ` $ ${data.home_value[0]}`,
        //     "description": "1994 orders were completed this month, 97% satisfaction rate"
        // }
    ]

    const { classes } = useStyles();

    const stats = cardData.map((stat) => (
        <div key={stat.title} className={classes.stat}>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.description}>{stat.description}</Text>
        </div>
    ));

    return (
        <div className={classes.root}>
            {stats}
        </div>
    )
}

export default HouseholdIncomeFacts