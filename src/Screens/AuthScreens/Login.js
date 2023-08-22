import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import { BASE_URL } from '../../data/Data';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const Login = () => {
    const { auth, setAuth, setPersist, persist } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    useEffect(() => {
        const checkIfUserIsLoggedIn = () => {
            if (auth?.accessToken) {
                navigate('/already+logged+in')
            }
        }
        checkIfUserIsLoggedIn()
    }, [])


    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => ({
            email:
                values.email.length === 0
                    ? 'Address is required'
                    : EMAIL_REGEX.test(values.email.trim())
                        ? null
                        : 'Invalid email format',
            password:
                values.password.length === 0
                    ? 'Address is required'
                    : null,
        })
    });

    const submitLogin = async (data) => {
        try {
            const response = await axios.post('/signin', (data),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            const firstName = response?.data?.firstName
            const lastName = response?.data?.lastName
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            const id = response?.data?.id;
            const email = response?.data?.userEmail;

            setAuth({ firstName, lastName, accessToken, roles, id, email });

            navigate(from, { replace: true });
        } catch (err) {
            if (err?.response?.status === 401) {
                form.setErrors({ email: 'Incorrect login information', password: 'Incorrect login information' })
                // setError('root.serverError', { 
                //     type: err.response.status,
                // })
            }
        }
    };

    const handleCheck = () => {
        setPersist(prev => !prev);
    };

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist]);

    return (
        <Container size={420} my={120}>
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{' '}
                <Anchor href={`${BASE_URL}/register`} target="_blank" size="sm">
                    Create account
                </Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <form onSubmit={form.onSubmit((values) => submitLogin(values))}>
                    <TextInput
                        label="Email"
                        placeholder="you@dashpond.com"
                        // required
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput
                        label="Password"
                        placeholder="Your password"
                        // required 
                        mt="md"
                        {...form.getInputProps('password')}
                    />
                    <Group position="apart" mt="lg">
                        <Checkbox
                            label="Remember me"
                            checked={persist}
                            onChange={handleCheck}
                        />
                        <Anchor component="button" size="sm">
                            Forgot password?
                        </Anchor>
                    </Group>
                    <Button
                        type='submit'
                        fullWidth mt="xl"
                    >
                        Sign in
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}

export default Login 
