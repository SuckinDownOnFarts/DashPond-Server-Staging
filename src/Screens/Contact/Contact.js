import React from 'react';
import { Paper, Text, TextInput, Textarea, Button, Group, SimpleGrid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useContactMainStyles as useStyles } from './ContactStyles';
import api from '../../api/axios'


const Contact = () => {
    const { classes, theme } = useStyles();

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },

        validate: (values) => ({
            name:
                values.name.length === 0
                    ? 'Name is required'
                    : null,
            email:
                values.email.length === 0
                    ? 'Address is required'
                    : /^\S+@\S+$/.test(values.email)
                        ? null
                        : 'Invalid email format',
            subject:
                values.subject.length === 0
                    ? 'Subject is required'
                    : null,
            message:
                values.message.length === 0
                    ? 'Message is required'
                    : null,
        }),
    });

    const handleSubmit = async (values) => {
        try {
            const response = await api.post('/contactform', (values));
            // console.log(response); 
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className='grid min-h-[calc(100vh-60px)] w-full place-items-center '>
            <div className='flex pb-4'>
                <Paper shadow="md" radius="lg">
                    <div className={classes.wrapper}>

                        <form className={classes.form} onSubmit={form.onSubmit((values) => handleSubmit(values))}>
                            <Text fz="lg" fw={700} className={classes.title}>
                                Get in touch
                            </Text>

                            <div className={classes.fields}>
                                <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                                    <TextInput
                                        withAsterisk
                                        label="Your name"
                                        placeholder="Your name"
                                        {...form.getInputProps('name')}
                                    />
                                    <TextInput
                                        withAsterisk
                                        label="Your email"
                                        placeholder="hello@mantine.dev"
                                        {...form.getInputProps('email')}
                                    />
                                </SimpleGrid>

                                <TextInput
                                    withAsterisk
                                    mt="md"
                                    label="Subject"
                                    placeholder="Subject"
                                    {...form.getInputProps('subject')}
                                />

                                <Textarea
                                    withAsterisk
                                    mt="md"
                                    label="Your message"
                                    placeholder="Please include all relevant information"
                                    minRows={3}
                                    {...form.getInputProps('message')}
                                />

                                <Group position="right" mt="md">
                                    <Button 
                                        type="submit" 
                                        className={classes.control}
                                        // variant='outline'
                                        color={theme.colorScheme === 'dark' ? theme.colors.orange[7] : theme.colors.pink[7]}
                                    >
                                        Send message
                                    </Button>
                                </Group>
                            </div>
                        </form>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default Contact