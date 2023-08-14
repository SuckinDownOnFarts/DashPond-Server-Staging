import React from 'react';
import { Paper, Text, ThemeIcon, Title, rem } from '@mantine/core';
import { useDocumentationHomeStyles as useStyles } from '../Documentaion_Styles/DocumentationStyles';
import { BASE_URL, docsHomeData as data } from '../../../data/Data';

const DocumentationHome = () => {
    const { classes, theme } = useStyles();
    const ICON_SIZE = rem(60);

    return (
        <div className={classes.root}>

            <div className='mb-8'>
                <Title className='mb-4' c='white'>SUP welcome to the docs</Title>
                <Text>Welcome to DashPond! Get familiar with all of our products and explore their features</Text>
            </div>

            <div className='mb-8 grid grid-cols-3 gap-4'>
                {data.map((element) => (
                    <Paper component='a' href={`${BASE_URL}/documentation${element.link}`} radius="md" withBorder className={classes.card} mt={`calc(${ICON_SIZE} / 3)`}>
                        <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE} color={theme.colorScheme === 'dark' ? 'orange.7' : 'pink'}>
                            <element.icon size="2rem" stroke={1.5} />
                        </ThemeIcon>

                        <Text ta="center" fw={700} className={classes.title}>
                            {element.title}
                        </Text>
                        <Text c="dimmed" ta="center" fz="sm" mt='lg' mb='md'>
                            {element.info}
                        </Text>
                    </Paper>
                ))}
            </div>
        </div>
    );
}

export default DocumentationHome